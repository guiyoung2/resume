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
  grid-template-columns: 1fr;
  gap: 1.25rem;
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
  gap: 1.25rem;
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

export const CareerProjectBlock = styled.div`
  padding-top: 1.25rem;
  border-top: 1px solid #e2e8f0;
`

export const CareerProjectTitle = styled.h4`
  color: #0f172a;
  font-size: 1.0625rem;
  font-weight: 700;
  margin-bottom: 0.625rem;
`

export const CareerLinkList = styled.ul`
  list-style: none;
  margin-bottom: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  a {
    color: #4f46e5;
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const CareerDutyList = styled.ul`
  list-style: disc;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  li {
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.7;
    word-break: keep-all;
  }
`

export const CareerExtra = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e2e8f0;

  a {
    color: #4f46e5;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const InsightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const InsightTitle = styled.h4`
  color: #0f172a;
  font-size: 1.0625rem;
  font-weight: 700;
  margin-bottom: 0.625rem;
`

export const InsightDescription = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.75;
  word-break: keep-all;
`
