"use client";
import {
  aboutContent,
  careerContent,
  insightsContent,
} from "@/app/data/about";
import {
  AboutSection,
  AboutContainer,
  AboutCard,
  SectionLabel,
  AboutTitle,
  AboutDescription,
  CareerCard,
  CareerCompany,
  CareerMeta,
  CareerPeriod,
  CareerPlaceholder,
  CareerProjectBlock,
  CareerProjectTitle,
  CareerLinkList,
  CareerDutyList,
  CareerExtra,
  InsightGrid,
  InsightTitle,
  InsightDescription,
} from "./About.styled";

export default function About() {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutCard>
          <SectionLabel>About</SectionLabel>
          <AboutTitle>&quot;{aboutContent.title}&quot;</AboutTitle>
          <AboutDescription>{aboutContent.introduction}</AboutDescription>
        </AboutCard>

        <CareerCard>
          <div>
            <SectionLabel>Career</SectionLabel>
            <CareerCompany>{careerContent.company}</CareerCompany>
            <CareerMeta>{careerContent.meta}</CareerMeta>
            <CareerPeriod>{careerContent.period}</CareerPeriod>
            <CareerPlaceholder>{careerContent.description}</CareerPlaceholder>
          </div>

          {careerContent.projects.map((project) => (
            <CareerProjectBlock key={project.title}>
              <CareerProjectTitle>{project.title}</CareerProjectTitle>
              <CareerLinkList>
                {project.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </CareerLinkList>
              <CareerDutyList>
                {project.duties.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </CareerDutyList>
            </CareerProjectBlock>
          ))}

          <CareerExtra>
            관련 토이 작업물:{" "}
            <a
              href={careerContent.extraLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {careerContent.extraLink.label} ↗
            </a>
            <br />
            사용 기술: {careerContent.techStackText}
          </CareerExtra>
        </CareerCard>

        <AboutCard>
          <SectionLabel>Insights</SectionLabel>
          <InsightGrid>
            {insightsContent.map((insight) => (
              <div key={insight.title}>
                <InsightTitle>{insight.title}</InsightTitle>
                <InsightDescription>{insight.description}</InsightDescription>
              </div>
            ))}
          </InsightGrid>
        </AboutCard>
      </AboutContainer>
    </AboutSection>
  );
}
