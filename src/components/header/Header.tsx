'use client'

import { HeaderNav, NavButton } from './Header.styled'

const MENU_ITEMS = [
  { label: 'Intro', id: 'intro' },
  { label: 'About', id: 'about' },
  { label: 'Project', id: 'projects' },
  { label: 'Contact', id: 'contact' },
] as const

export default function Header() {
  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HeaderNav aria-label="메인 네비게이션">
      {MENU_ITEMS.map(({ label, id }) => (
        <NavButton
          key={id}
          type="button"
          onClick={() => handleClick(id)}
          aria-label={`${label} 섹션으로 이동`}
        >
          {label}
        </NavButton>
      ))}
    </HeaderNav>
  )
}
