"use client";
import styled from "@emotion/styled";

export const ContactSection = styled.section`
  position: relative;
  padding: 6rem 1.25rem 7rem;
  background: #ffffff;
`;

export const ContactContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

export const ContactCard = styled.article`
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03);
`;

export const SectionLabel = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #4f46e5;
  margin-bottom: 0.75rem;
  font-weight: 700;
`;

export const ContactTitle = styled.h2`
  font-size: clamp(1.375rem, 2.3vw, 1.875rem);
  color: #0f172a;
  font-weight: 700;
  margin-bottom: 0.625rem;
`;

export const ContactDescription = styled.p`
  color: #475569;
  line-height: 1.7;
  margin-bottom: 1.75rem;
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
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  overflow: hidden;
  transition: border-color 0.2s ease;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;
  padding: 1rem 1.125rem;
  color: #0f172a;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #eef2ff;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;
  padding: 1rem 1.125rem;
  color: #0f172a;
`;

export const ContactLabel = styled.span`
  display: block;
  color: #4f46e5;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 0.25rem;
`;

export const ContactValue = styled.span`
  display: block;
  font-size: 0.9375rem;
  color: #0f172a;
`;

export const ArrowIcon = styled.span`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1;
`;
