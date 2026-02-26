'use client'
import styled from '@emotion/styled'

export const AboutSection = styled.section`
  position: relative;
  padding: 8rem 1.25rem 6rem;
  background: linear-gradient(180deg, #fffbeb 0%, #fff7ed 100%);
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
  border-radius: 1.25rem;
  padding: 2rem 1.75rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px rgba(136, 19, 55, 0.08);
`

export const SectionLabel = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9f1239;
  margin-bottom: 0.8rem;
  font-weight: 700;
`

export const AboutTitle = styled.h2`
  font-size: clamp(1.35rem, 2.2vw, 1.9rem);
  color: #1e1b4b;
  margin-bottom: 1rem;
  line-height: 1.35;
`

export const AboutDescription = styled.p`
  color: #312e81;
  font-size: 1.02rem;
  line-height: 1.9;
  word-break: keep-all;
  white-space: pre-line;
`

export const CareerCard = styled(AboutCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CareerCompany = styled.h3`
  color: #1e1b4b;
  font-size: 1.4rem;
  margin-bottom: 0.35rem;
`

export const CareerMeta = styled.p`
  color: #475569;
  font-size: 0.98rem;
  margin-bottom: 0.75rem;
`

export const CareerPeriod = styled.p`
  color: #334155;
  font-size: 0.96rem;
  margin-bottom: 1.1rem;
`

export const CareerPlaceholder = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
`
