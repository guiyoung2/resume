'use client'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const floatOrb = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(72px, -56px, 0) scale(1.18);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
`

const cardFadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const textReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const patternDrift = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
  }
  50% {
    transform: translate3d(46px, -30px, 0) scale(1.12) rotate(1deg);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
  }
`

const auroraFloat = keyframes`
  0% {
    transform: translate3d(-12%, 4%, 0) scale(1) rotate(0deg);
  }
  50% {
    transform: translate3d(10%, -8%, 0) scale(1.22) rotate(6deg);
  }
  100% {
    transform: translate3d(-12%, 4%, 0) scale(1) rotate(0deg);
  }
`

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #fffbeb;
  overflow: hidden;
`

export const IntroOverlay = styled.div<{ $toBackground: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ $toBackground }) => ($toBackground ? 1 : 4)};
  pointer-events: none;
  transition: z-index 0.8s ease;
`

export const IntroWord = styled.h2<{ $toBackground: boolean }>`
  margin: 0;
  font-size: clamp(3rem, 12vw, 9rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #1e1b4b;
  text-transform: uppercase;
  transition:
    transform 0.9s ease,
    opacity 0.9s ease,
    filter 0.9s ease,
    color 0.9s ease;
  transform: ${({ $toBackground }) =>
    $toBackground ? 'translateY(-6%) scale(1.1)' : 'translateY(0) scale(1)'};
  opacity: ${({ $toBackground }) => ($toBackground ? 0.14 : 1)};
  filter: ${({ $toBackground }) => ($toBackground ? 'blur(0.5px)' : 'none')};
  color: ${({ $toBackground }) => ($toBackground ? '#881337' : '#1e1b4b')};
`

export const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 20% 25%, rgba(251, 207, 232, 0.38), transparent 36%),
    radial-gradient(circle at 80% 72%, rgba(191, 219, 254, 0.38), transparent 36%),
    linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
  background-size: auto, auto, 34px 34px, 34px 34px;
  background-position: center;
  opacity: 0.92;
  mix-blend-mode: soft-light;
  animation: ${patternDrift} 8s ease-in-out infinite;
`

export const BackgroundAurora = styled.div`
  position: absolute;
  inset: -15%;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(48% 42% at 18% 20%, rgba(251, 207, 232, 0.86) 0%, transparent 72%),
    radial-gradient(42% 40% at 84% 72%, rgba(191, 219, 254, 0.86) 0%, transparent 72%),
    conic-gradient(
      from 180deg at 50% 50%,
      rgba(251, 207, 232, 0.45),
      rgba(191, 219, 254, 0.45),
      rgba(251, 207, 232, 0.45)
    );
  filter: blur(18px) saturate(1.15);
  opacity: 0.95;
  animation: ${auroraFloat} 9s ease-in-out infinite;
`

export const BgOrb = styled.div<{ $color: string; $size: number; $top?: string; $bottom?: string; $left?: string; $right?: string }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  filter: blur(82px);
  opacity: 0.88;
  top: ${({ $top }) => $top ?? 'auto'};
  bottom: ${({ $bottom }) => $bottom ?? 'auto'};
  left: ${({ $left }) => $left ?? 'auto'};
  right: ${({ $right }) => $right ?? 'auto'};
  pointer-events: none;
  animation: ${floatOrb} ${({ $size }) => ($size >= 360 ? '7s' : '6s')} ease-in-out infinite;
`

export const GlassCard = styled.div`
  position: relative;
  z-index: 2;
  padding: 3.5rem 4rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  max-width: 720px;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(136, 19, 55, 0.08);
  animation: ${cardFadeUp} 0.7s ease-out both;
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 36px rgba(136, 19, 55, 0.14);
  }
`

export const HeroGreeting = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: #881337;
  margin-bottom: 1.25rem;
  letter-spacing: 0.05em;
  opacity: 0;
  animation: ${textReveal} 0.5s ease-out 0.2s forwards;
`

export const HeroTitle = styled.h1`
  font-size: clamp(1.5rem, 3.5vw, 2.25rem);
  font-weight: 700;
  color: #1e1b4b;
  line-height: 1.55;
  word-break: keep-all;
`

export const HeroTitleLine = styled.span<{ $delay: string }>`
  display: block;
  opacity: 0;
  animation: ${textReveal} 0.55s ease-out ${({ $delay }) => $delay} forwards;
`

export const HeroNameHighlight = styled.span`
  color: #881337;
`
