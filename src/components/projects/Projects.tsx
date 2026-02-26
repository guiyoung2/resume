"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import type { ProjectItem } from "@/app/types/project";
import {
  ProjectsSection,
  ProjectsContainer,
  SectionLabel,
  ProjectsTitle,
  ProjectsGrid,
  ProjectCard,
  ThumbnailFrame,
  CardHead,
  CardTitle,
  IconLinks,
  IconLink,
  CardDescription,
  TagList,
  Tag,
  ModalOverlay,
  ModalCard,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalDescription,
  ReadmeLink,
  MetaRow,
  MetaItem,
  BlockTitle,
  HighlightList,
  HighlightItem,
  ModalLinkGroup,
} from "./Projects.styled";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.85 10.91.57.11.77-.25.77-.55 0-.28-.01-1.03-.02-2.02-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.29-5.23-5.72 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.32 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.75.81 1.2 1.83 1.2 3.09 0 4.44-2.69 5.42-5.26 5.71.41.36.78 1.08.78 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.2.67.78.55a11.53 11.53 0 0 0 7.84-10.91C23.5 5.66 18.35.5 12 .5Z"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3Zm5 16H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7Z"
      />
    </svg>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onKeydown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeydown);
    };
  }, [selectedProject]);

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionLabel>Projects</SectionLabel>
        <ProjectsTitle>프로젝트 목록</ProjectsTitle>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`${project.title} 상세보기`}
            >
              <ThumbnailFrame>
                <Image
                  src={project.thumbnailSrc}
                  alt={project.thumbnailAlt}
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </ThumbnailFrame>
              <CardHead>
                <CardTitle>{project.title}</CardTitle>
                <IconLinks>
                  <IconLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.title} GitHub`}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <GitHubIcon />
                  </IconLink>
                  <IconLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.title} Live Site`}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <ExternalLinkIcon />
                  </IconLink>
                </IconLinks>
              </CardHead>
              <CardDescription>{project.description}</CardDescription>
              <TagList>
                {project.techStack.map((tech) => (
                  <Tag key={`${project.id}-${tech}`}>{tech}</Tag>
                ))}
              </TagList>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>

      {selectedProject ? (
        <ModalOverlay onClick={() => setSelectedProject(null)}>
          <ModalCard
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <ModalHeader>
              <ModalTitle id="project-modal-title">
                {selectedProject.title}
              </ModalTitle>
              <CloseButton
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="프로젝트 상세 닫기"
              >
                ×
              </CloseButton>
            </ModalHeader>

            <ThumbnailFrame>
              <Image
                src={selectedProject.thumbnailSrc}
                alt={selectedProject.thumbnailAlt}
                fill
                sizes="(max-width: 760px) 100vw, 760px"
                style={{ objectFit: "cover" }}
              />
            </ThumbnailFrame>

            <ModalDescription>
              {selectedProject.detailedDescription}
            </ModalDescription>

            <MetaRow>
              <MetaItem>{selectedProject.projectType}</MetaItem>
              <MetaItem>{selectedProject.period}</MetaItem>
            </MetaRow>

            {selectedProject.highlights.length > 0 ? (
              <>
                <BlockTitle>기술적 특징</BlockTitle>
                <HighlightList>
                  {selectedProject.highlights.map((item) => (
                    <HighlightItem key={item}>{item}</HighlightItem>
                  ))}
                </HighlightList>
              </>
            ) : null}

            <BlockTitle>기술 스택</BlockTitle>
            <TagList>
              {selectedProject.detailedTechStack
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean)
                .map((tech) => (
                  <Tag key={`detailed-${selectedProject.id}-${tech}`}>
                    {tech}
                  </Tag>
                ))}
            </TagList>

            <BlockTitle>상세 프로젝트 설명</BlockTitle>
            <ModalDescription>
              자세한 프로젝트 설명은 GitHub README에서 확인해주세요.
              <br />
              <ReadmeLink
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                {selectedProject.githubUrl}
              </ReadmeLink>
            </ModalDescription>

            <ModalLinkGroup>
              <IconLink
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${selectedProject.title} GitHub`}
              >
                <GitHubIcon />
              </IconLink>
              <IconLink
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${selectedProject.title} Live Site`}
              >
                <ExternalLinkIcon />
              </IconLink>
            </ModalLinkGroup>
          </ModalCard>
        </ModalOverlay>
      ) : null}
    </ProjectsSection>
  );
}
