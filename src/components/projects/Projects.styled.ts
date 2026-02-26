"use client";
import styled from "@emotion/styled";

export const ProjectsSection = styled.section`
  position: relative;
  padding: 6.5rem 1.25rem 7rem;
  background: linear-gradient(180deg, #fff7ed 0%, #fffbeb 100%);
`;

export const ProjectsContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

export const SectionLabel = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9f1239;
  margin-bottom: 0.85rem;
  font-weight: 700;
`;

export const ProjectsTitle = styled.h2`
  font-size: clamp(1.45rem, 2.3vw, 2rem);
  color: #1e1b4b;
  margin-bottom: 0.65rem;
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
  border-radius: 1.25rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 10px 24px rgba(136, 19, 55, 0.08);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 30px rgba(136, 19, 55, 0.12);
  }
`;

export const ThumbnailFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 0.9rem;
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
  color: #1e1b4b;
  font-size: 1.12rem;
`;

export const IconLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

export const IconLink = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 0.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  color: #334155;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;

  &:hover {
    color: #881337;
    border-color: #fbcfe8;
    background: #ffffff;
  }
`;

export const CardDescription = styled.p`
  color: #334155;
  font-size: 0.95rem;
  line-height: 1.65;
  margin-bottom: 0.85rem;
  min-height: 2.8rem;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const Tag = styled.li`
  border-radius: 999px;
  padding: 0.28rem 0.62rem;
  font-size: 0.78rem;
  color: #4c1d95;
  background: #f5f3ff;
  border: 1px solid #ede9fe;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const ModalCard = styled.article`
  width: min(760px, 100%);
  max-height: 88vh;
  overflow: auto;
  border-radius: 1.1rem;
  padding: 1.25rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
`;

export const ModalTitle = styled.h3`
  color: #1e1b4b;
  font-size: 1.25rem;
`;

export const CloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 0.55rem;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #334155;
  font-size: 1.1rem;
  line-height: 1;

  &:hover {
    background: #f8fafc;
  }
`;

export const ModalDescription = styled.p`
  color: #334155;
  line-height: 1.75;
  margin-bottom: 0.9rem;
`;

export const ReadmeLink = styled.a`
  display: inline-block;
  margin-top: 0.35rem;
  color: #be185d;
  font-size: 0.87rem;
  text-decoration: underline;
  text-underline-offset: 2px;
  word-break: break-all;
  transition: color 0.2s ease;

  &:hover {
    color: #9d174d;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.8rem;
  margin-bottom: 0.95rem;
`;

export const MetaItem = styled.span`
  font-size: 0.86rem;
  color: #475569;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  padding: 0.24rem 0.6rem;
`;

export const BlockTitle = styled.h4`
  font-size: 0.95rem;
  color: #881337;
  margin-bottom: 0.45rem;
`;

export const HighlightList = styled.ul`
  display: grid;
  gap: 0.45rem;
  margin-bottom: 1rem;
`;

export const HighlightItem = styled.li`
  color: #334155;
  font-size: 0.95rem;
  line-height: 1.6;
  padding-left: 0.9rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6rem;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 999px;
    background: #f472b6;
  }
`;

export const ModalLinkGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.2rem;
`;
