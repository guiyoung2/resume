'use client'

import {
  HeroSection,
  HeroInner,
  HeroBadge,
  HeroTitle,
  HeroNameAccent,
  HeroSubtitle,
  HeroButtons,
  HeroPrimaryLink,
  HeroOutlineButton,
} from './Hero.styled'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HeroSection id="intro">
      <HeroInner>
        <HeroBadge>Frontend Developer</HeroBadge>
        <HeroTitle>
          안녕하세요,
          <br />
          <HeroNameAccent>김귀영</HeroNameAccent>입니다
        </HeroTitle>
        <HeroSubtitle>
          비즈니스 요구사항을 기술적 가치로 전환하는 개발자
        </HeroSubtitle>
        <HeroButtons>
          <HeroPrimaryLink
            href="https://github.com/guiyoung2"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub 프로필 바로가기"
          >
            GitHub ↗
          </HeroPrimaryLink>
          <HeroOutlineButton type="button" onClick={scrollToContact}>
            연락하기
          </HeroOutlineButton>
        </HeroButtons>
      </HeroInner>
    </HeroSection>
  )
}
