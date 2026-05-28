"use client";
import { workflowIntro, workflowSteps, harnessItems, archiveItem } from "@/app/data/workflow";
import {
  WorkflowSection,
  WorkflowContainer,
  SectionLabel,
  WorkflowTitle,
  WorkflowIntro,
  StepsGrid,
  StepCard,
  StepBadge,
  StepTitle,
  StepDescription,
  PhilosophyNote,
  HarnessGrid,
  HarnessCard,
  HarnessName,
  HarnessDescription,
  HarnessMeta,
  BoxLink,
  ArchiveCard,
  ArchiveName,
  ArchiveDescription,
  ArchiveLinkGroup,
} from "./Workflow.styled";

export default function Workflow() {
  return (
    <WorkflowSection id="workflow">
      <WorkflowContainer>
        <SectionLabel>AI Workflow</SectionLabel>
        <WorkflowTitle>AI 개발 워크플로우</WorkflowTitle>
        <WorkflowIntro>{workflowIntro}</WorkflowIntro>

        <StepsGrid>
          {workflowSteps.map((s) => (
            <StepCard key={s.step}>
              <StepBadge>{s.step}</StepBadge>
              <StepTitle>{s.title}</StepTitle>
              <StepDescription>{s.description}</StepDescription>
            </StepCard>
          ))}
        </StepsGrid>

        <PhilosophyNote>
          하네스는 한 번이 아니다 — 프로젝트 목적·단계에 맞춰 직접 구축한다
        </PhilosophyNote>

        <HarnessGrid>
          {harnessItems.map((item) => (
            <HarnessCard key={item.name}>
              <HarnessName>{item.name}</HarnessName>
              <HarnessDescription>{item.description}</HarnessDescription>
              {item.appliedProjects ? (
                <HarnessMeta>적용 프로젝트: {item.appliedProjects}</HarnessMeta>
              ) : null}
              <BoxLink
                href={item.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub →
              </BoxLink>
            </HarnessCard>
          ))}
        </HarnessGrid>

        <ArchiveCard>
          <ArchiveName>{archiveItem.name}</ArchiveName>
          <ArchiveDescription>{archiveItem.description}</ArchiveDescription>
          <ArchiveLinkGroup>
            <BoxLink
              href={archiveItem.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Live →
            </BoxLink>
            <BoxLink
              href={archiveItem.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub →
            </BoxLink>
          </ArchiveLinkGroup>
        </ArchiveCard>
      </WorkflowContainer>
    </WorkflowSection>
  );
}
