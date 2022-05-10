import styled from 'styled-components'
import {COLORS} from '../../../styles/theme'


export const AuthLayout = styled.div`
  display: flex;
  flex-basis: 100%;
  min-height: 100vh;
`

export const LeftPart = styled.div`
  width: 40%;
  background-image: url('/authBG.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const RightPart = styled.main`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Logo = styled.a`
  path {
    fill: ${COLORS.lightBg}
  }
`

export const Header = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  > * {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
  }
`
