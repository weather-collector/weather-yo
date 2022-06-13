import styled from 'styled-components'
import {COLORS} from '../../../styles/theme'
import {MEDIA_QUERIES} from '../../../utils/mediaQueries'


export const Header = styled.div`
  height: 60px;
  background-color: ${COLORS.lightBg};
  display: flex;
  align-items: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  > * {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Logo = styled.a`
  
`

export const LeftPart = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  ${MEDIA_QUERIES.xs} {
    column-gap: 10px;
  }
`

export const RightPart = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`

export const Notification = styled.div`
  cursor: pointer;
`

export const Profile = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const MenuLine = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  border-radius: 8px;
  margin-bottom: 6px;
  background-color: ${COLORS.primary};
`


export const MenuToggle = styled.div<{isOpen: boolean}>`
  display: none;
  cursor: pointer;
  background-color: transparent;
  height: 25px;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 3px;
    border-radius: 8px;
    background-color: ${COLORS.primary};
    margin-bottom: 6px;
    transform-origin: 0.15rem;
    transition: all 0.15s linear;
  }
  &::before {
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }
  &::after {
    margin-bottom: 0;
    transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
  ${MenuLine} {
    transform: ${props => props.isOpen ? 'translateX(-100%)' : 'translateX(0)'};
    opacity: ${props => props.isOpen ? '0' : '1'};
    transition: all 0.15s ease-in-out;
  }
  ${MEDIA_QUERIES.xl} {
    display: block;
  }
`
