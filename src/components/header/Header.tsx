"use client";

import { useState, useEffect } from "react";
import {
  HeaderNav,
  HeaderInner,
  LogoButton,
  NavList,
  NavButton,
} from "./Header.styled";

const MENU_ITEMS = [
  { label: "Intro", id: "intro" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "AI Workflow", id: "workflow" },
  { label: "Contact", id: "contact" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderNav $scrolled={scrolled} aria-label="메인 네비게이션">
      <HeaderInner>
        <LogoButton
          type="button"
          onClick={() => handleClick("intro")}
          aria-label="홈으로 이동"
        >
          Guiyoung
        </LogoButton>
        <NavList>
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
        </NavList>
      </HeaderInner>
    </HeaderNav>
  );
}
