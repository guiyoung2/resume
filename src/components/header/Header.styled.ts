'use client'
import styled from '@emotion/styled'

export const HeaderNav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? '#e2e8f0' : 'transparent')};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 1px 8px rgba(0, 0, 0, 0.06)' : 'none'};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
`

export const HeaderInner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
`

export const LogoButton = styled.button`
  font-size: 1.25rem;
  font-weight: 700;
  color: #4f46e5;
  letter-spacing: -0.01em;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`

export const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
`

export const NavButton = styled.button`
  padding: 0.5rem 0.875rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
  border-radius: 0.5rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    color: #4f46e5;
    background: #eef2ff;
  }

  @media (max-width: 640px) {
    padding: 0.4rem 0.55rem;
    font-size: 0.78rem;
  }
`
