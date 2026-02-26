"use client";
import styled from "@emotion/styled";

export const ContactSection = styled.section`
  position: relative;
  padding: 6.5rem 1.25rem 7rem;
  background: linear-gradient(180deg, #fffbeb 0%, #fff1f2 100%);
`;

export const ContactContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

export const ContactCard = styled.article`
  border-radius: 1.35rem;
  padding: 2rem 1.6rem;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(255, 255, 255, 1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 10px 24px rgba(136, 19, 55, 0.1);
`;

export const SectionLabel = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9f1239;
  margin-bottom: 0.85rem;
  font-weight: 700;
`;

export const ContactTitle = styled.h2`
  font-size: clamp(1.45rem, 2.3vw, 2rem);
  color: #1e1b4b;
  margin-bottom: 0.6rem;
`;

export const ContactDescription = styled.p`
  color: #475569;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`;

export const ContactList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactItem = styled.li`
  border-radius: 0.95rem;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  overflow: hidden;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;
  padding: 0.95rem 1rem;
  color: #1e1b4b;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fff7ed;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;
  padding: 0.95rem 1rem;
  color: #1e1b4b;
`;

export const ContactLabel = styled.span`
  display: block;
  color: #881337;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
`;

export const ContactValue = styled.span`
  display: block;
  font-size: 0.92rem;
  color: #334155;
`;

export const ArrowIcon = styled.span`
  color: #64748b;
  font-size: 1rem;
  line-height: 1;
`;
