import styled from 'styled-components'
import {COLORS} from '../../../styles/colors'


export const Menu = styled.nav`
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

export const NavItem = styled.a<{isActive: boolean}>`
  padding: 8px 15px;
  background-color: ${props => props.isActive && COLORS.accent};
  display: flex;
  gap: 10px;
  border-radius: 4px;
`

export const MenuFooter = styled.div`
  margin-top: auto;
  margin-bottom: 15px;
`
