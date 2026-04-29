import { skillCategories } from "@/app/data/skills";
import {
  SkillsSection,
  SkillsContainer,
  SectionLabel,
  SkillsTitle,
  SkillsGrid,
  CategoryCard,
  CategoryName,
  TagList,
  Tag,
} from "./Skills.styled";

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionLabel>Skills</SectionLabel>
        <SkillsTitle>기술 스택</SkillsTitle>
        <SkillsGrid>
          {skillCategories.map((category) => (
            <CategoryCard key={category.label}>
              <CategoryName>{category.label}</CategoryName>
              <TagList>
                {category.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </TagList>
            </CategoryCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
}
