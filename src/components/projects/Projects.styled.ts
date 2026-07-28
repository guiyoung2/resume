"use client";
import styled from "@emotion/styled";

export const ProjectsSection = styled.section`
  position: relative;
  padding: 6rem 1.25rem;
  background: #f8fafc;
`;

export const ProjectsContainer = styled.div`
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

export const ProjectsTitle = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: #0f172a;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const GroupTitle = styled.h3`
  font-size: 1rem;
  color: #0f172a;
  font-weight: 700;
  margin: 1.25rem 0 0.875rem;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article`
  border-radius: 1rem;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(79, 70, 229, 0.1);
    border-color: #c7d2fe;
  }
`;

export const ThumbnailFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  margin-bottom: 0.95rem;
`;

export const CardHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const CardTitle = styled.h3`
  color: #0f172a;
  font-size: 1.0625rem;
  font-weight: 700;
`;

export const IconLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

export const IconLink = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  color: #64748b;
  background: #ffffff;
  transition: all 0.2s ease;

  &:hover {
    color: #4f46e5;
    border-color: #c7d2fe;
    background: #eef2ff;
  }
`;

export const CardDescription = styled.p`
  color: #475569;
  font-size: 0.9375rem;
  line-height: 1.65;
  margin-bottom: 0.85rem;
  min-height: 2.8rem;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Tag = styled.li`
  border-radius: 999px;
  padding: 0.28rem 0.65rem;
  font-size: 0.78rem;
  color: #4338ca;
  background: #eef2ff;
  border: 1px solid #c7d2fe;
  font-weight: 500;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const ModalCard = styled.article`
  width: min(760px, 100%);
  max-height: 88vh;
  overflow: auto;
  border-radius: 1rem;
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.18);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const ModalTitle = styled.h3`
  color: #0f172a;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1;
  flex-shrink: 0;

  &:hover {
    background: #f8fafc;
    color: #0f172a;
  }
`;

export const ModalDescription = styled.p`
  color: #475569;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

export const ReadmeLink = styled.a`
  display: inline-block;
  margin-top: 0.35rem;
  color: #4f46e5;
  font-size: 0.875rem;
  text-decoration: underline;
  text-underline-offset: 2px;
  word-break: break-all;
  transition: color 0.2s ease;

  &:hover {
    color: #4338ca;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.75rem;
  margin-bottom: 1rem;
`;

export const MetaItem = styled.span`
  font-size: 0.84rem;
  color: #475569;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  padding: 0.24rem 0.65rem;
`;

export const BlockTitle = styled.h4`
  font-size: 0.9375rem;
  color: #4f46e5;
  font-weight: 700;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

export const HighlightList = styled.ul`
  display: grid;
  gap: 0.45rem;
  margin-bottom: 0.5rem;
`;

export const HighlightItem = styled.li`
  color: #475569;
  font-size: 0.9375rem;
  line-height: 1.65;
  padding-left: 0.9rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6rem;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 999px;
    background: #a5b4fc;
  }
`;

export const HighlightLabel = styled.strong`
  color: #4338ca;
  font-weight: 700;
  margin-right: 0.2rem;
`;

export const ModalLinkGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const CompactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const CompactCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-radius: 0.75rem;
  padding: 0.95rem 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: #c7d2fe;
    background: #fbfcff;
  }
`;

export const CompactTitle = styled.h4`
  font-size: 0.9375rem;
  font-weight: 700;
  color: #0f172a;
`;

export const CompactDescription = styled.p`
  font-size: 0.8125rem;
  line-height: 1.65;
  color: #64748b;
  word-break: keep-all;
`;

export const CompactMeta = styled.p`
  font-size: 0.75rem;
  color: #94a3b8;
`;
