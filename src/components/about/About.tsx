"use client";
import { aboutContent, careerContent } from "@/app/data/about";
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
          </div>
          <CareerPlaceholder>
            {careerContent.description}
            <br />
            <br />
            사용 기술: {careerContent.techStackText}
          </CareerPlaceholder>
        </CareerCard>
      </AboutContainer>
    </AboutSection>
  );
}
