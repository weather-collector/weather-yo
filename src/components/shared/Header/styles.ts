import styled from 'styled-components'
import {COLORS} from '../../../styles/colors'


export const Header = styled.div`
  height: 60px;
  background-color: ${COLORS.whiteBg};
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
  
`

export const RightPart = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`

export const Notification = styled.div`
  cursor: pointer;
`
