import styled from 'styled-components'
import {COLORS} from '../../../styles/theme'


export const Menu = styled.nav`
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
`

export const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 240px;
  width: 100%;
  margin-top: 60px;
`

export const NavItem = styled.a<{isActive?: boolean}>`
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
