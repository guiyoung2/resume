'use client'
import { useEffect, useState } from 'react'
import {
  HeroSection,
  IntroOverlay,
  IntroWord,
  BackgroundAurora,
  BackgroundPattern,
  BgOrb,
  GlassCard,
  HeroGreeting,
  HeroTitle,
  HeroTitleLine,
  HeroNameHighlight,
} from './Hero.styled'

export default function Hero() {
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setIntroDone(true)
    }, 1000)

    return () => window.clearTimeout(timerId)
  }, [])

  return (
    <HeroSection id="intro">
      <IntroOverlay $toBackground={introDone}>
        <IntroWord $toBackground={introDone}>Front-End</IntroWord>
      </IntroOverlay>
      <BackgroundAurora />
      <BackgroundPattern />
      <BgOrb $color="#fbcfe8" $size={400} $top="-80px" $left="-100px" />
      <BgOrb $color="#bfdbfe" $size={300} $bottom="-60px" $right="-80px" />

      {introDone ? (
        <GlassCard>
          <HeroGreeting>안녕하세요,</HeroGreeting>
          <HeroTitle>
            <HeroTitleLine $delay="0.45s">변화에 적응해가는 프론트엔드 개발자</HeroTitleLine>
            <HeroTitleLine $delay="0.62s">
              <HeroNameHighlight>김귀영</HeroNameHighlight>입니다 :)
            </HeroTitleLine>
          </HeroTitle>
        </GlassCard>
      ) : null}
    </HeroSection>
  )
}
