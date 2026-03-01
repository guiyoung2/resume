'use client'
import styled from '@emotion/styled'

export const HeaderNav = styled.nav`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(136, 19, 55, 0.08);

  @media (max-width: 640px) {
    top: 1rem;
    right: 1rem;
    padding: 0.4rem 0.5rem;
    gap: 0.25rem;
  }
`

export const NavButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e1b4b;
  letter-spacing: 0.04em;
  border-radius: 0.5rem;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: #881337;
    background: rgba(136, 19, 55, 0.08);
  }

  @media (max-width: 640px) {
    padding: 0.4rem 0.65rem;
    font-size: 0.8rem;
  }
`
