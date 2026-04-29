'use client'
import styled from '@emotion/styled'

export const AboutSection = styled.section`
  position: relative;
  padding: 6rem 1.25rem;
  background: #f8fafc;
`

export const AboutContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.25fr 0.95fr;
  gap: 1.25rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const AboutCard = styled.article`
  border-radius: 1rem;
  padding: 2rem 1.75rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03);
`

export const SectionLabel = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #4f46e5;
  margin-bottom: 0.75rem;
  font-weight: 700;
`

export const AboutTitle = styled.h2`
  font-size: clamp(1.25rem, 2.2vw, 1.75rem);
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.4;
  font-weight: 700;
`

export const AboutDescription = styled.p`
  color: #475569;
  font-size: 1rem;
  line-height: 1.85;
  word-break: keep-all;
  white-space: pre-line;
`

export const CareerCard = styled(AboutCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CareerCompany = styled.h3`
  color: #0f172a;
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
`

export const CareerMeta = styled.p`
  color: #475569;
  font-size: 0.9375rem;
  margin-bottom: 0.625rem;
`

export const CareerPeriod = styled.p`
  color: #475569;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
`

export const CareerPlaceholder = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.75;
`
