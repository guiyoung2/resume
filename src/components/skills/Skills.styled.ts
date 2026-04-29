"use client";
import styled from "@emotion/styled";

export const SkillsSection = styled.section`
  padding: 6rem 1.25rem;
  background: #ffffff;
`;

export const SkillsContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

export const SectionLabel = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #4f46e5;
  margin-bottom: 0.75rem;
  font-weight: 700;
`;

export const SkillsTitle = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: #0f172a;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.5rem;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: #c7d2fe;
    box-shadow: 0 4px 16px rgba(79, 70, 229, 0.08);
  }
`;

export const CategoryName = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Tag = styled.li`
  border-radius: 999px;
  padding: 0.28rem 0.7rem;
  font-size: 0.8rem;
  color: #4338ca;
  background: #eef2ff;
  border: 1px solid #c7d2fe;
  font-weight: 500;
`;
