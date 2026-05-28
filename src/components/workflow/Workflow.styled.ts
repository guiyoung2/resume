"use client";
import styled from "@emotion/styled";

export const WorkflowSection = styled.section`
  padding: 6rem 1.25rem;
  background: #f8fafc;
`;

export const WorkflowContainer = styled.div`
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

export const WorkflowTitle = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: #0f172a;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const WorkflowIntro = styled.p`
  color: #475569;
  font-size: 1rem;
  line-height: 1.85;
  max-width: 720px;
  margin-bottom: 2.5rem;
  word-break: keep-all;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StepCard = styled.div`
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

export const StepBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: #eef2ff;
  border-radius: 50%;
  color: #4338ca;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.875rem;
`;

export const StepTitle = styled.h3`
  font-size: 0.9375rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

export const StepDescription = styled.p`
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.7;
  word-break: keep-all;
`;

export const PhilosophyNote = styled.p`
  font-size: 0.875rem;
  color: #4338ca;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 1.25rem;
  padding: 0.875rem 1.25rem;
  background: #eef2ff;
  border-radius: 0.75rem;
  border-left: 3px solid #4f46e5;
`;

export const HarnessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const HarnessCard = styled.div`
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

export const HarnessName = styled.h3`
  font-size: 0.9375rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.625rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
`;

export const HarnessDescription = styled.p`
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 0.625rem;
  word-break: keep-all;
`;

export const HarnessMeta = styled.p`
  font-size: 0.8125rem;
  color: #64748b;
  margin-bottom: 0.875rem;
`;

export const BoxLink = styled.a`
  font-size: 0.875rem;
  color: #4f46e5;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ArchiveCard = styled(HarnessCard)``;

export const ArchiveName = styled(HarnessName)``;

export const ArchiveDescription = styled(HarnessDescription)`
  margin-bottom: 0.875rem;
`;

export const ArchiveLinkGroup = styled.div`
  display: flex;
  gap: 1.5rem;
`;
