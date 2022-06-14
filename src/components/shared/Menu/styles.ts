import styled, {css} from 'styled-components'
import {COLORS} from '../../../styles/theme'
import {MEDIA_QUERIES} from '../../../utils/mediaQueries'


export const Menu = styled.nav<{ isMenuOpen: boolean }>`
  flex-shrink: 0;
  top: 60px;
  position: sticky;
  max-width: 280px;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.primary};
  align-items: center;
  transition: all 0.15s ease-in-out;
  box-shadow: 4px 1px 8px 0 rgba(0, 0, 0, 0.59);
  z-index: 10;

  ${MEDIA_QUERIES.xl} {
    position: fixed;
    z-index: 99;
    ${props => !props.isMenuOpen ? css`
      transform: translateX(-110%);
      //margin-left: -280px;
    ` : css`
      transform: translateX(0);
    `}
  }
`

export const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 240px;
  width: 100%;
  margin-top: 60px;
`

export const NavItem = styled.a<{ isActive?: boolean }>`
  cursor: pointer;
  padding: 8px 15px;
  background-color: ${props => props.isActive && COLORS.accent};
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: ${COLORS.hoveredAccent};
  }
`

export const MenuFooter = styled.div`
  margin-top: auto;
  margin-bottom: 15px;
`
