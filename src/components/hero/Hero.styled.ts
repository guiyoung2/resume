'use client'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
  background-size: 24px 24px;
  padding: 4rem 1.25rem;
`

export const HeroInner = styled.div`
  max-width: 640px;
  width: 100%;
  text-align: center;
  animation: ${fadeUp} 0.7s ease-out both;
`

export const HeroBadge = styled.span`
  display: inline-block;
  background: #eef2ff;
  color: #4f46e5;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.75rem;
  border: 1px solid #c7d2fe;
`

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 7vw, 3.75rem);
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  word-break: keep-all;
`

export const HeroNameAccent = styled.span`
  color: #4f46e5;
`

export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: #475569;
  line-height: 1.75;
  margin-bottom: 2.25rem;
  word-break: keep-all;
`

export const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`

export const HeroPrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 1.625rem;
  background: #4f46e5;
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 0.625rem;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #4338ca;
    transform: translateY(-2px);
  }
`

export const HeroOutlineButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 1.625rem;
  background: transparent;
  color: #0f172a;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 0.625rem;
  border: 1.5px solid #e2e8f0;
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
    background: #eef2ff;
    transform: translateY(-2px);
  }
`
