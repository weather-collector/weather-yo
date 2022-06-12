import styled from 'styled-components'
import {COLORS} from '../../../styles/theme'
import {MEDIA_QUERIES} from '../../../utils/mediaQueries'


export const AuthLayout = styled.div`
  display: flex;
  flex-basis: 100%;
  min-height: 100vh;
  position: relative;
  ${MEDIA_QUERIES.md} {
    
  }
`

export const LeftPart = styled.div`
  width: 40%;
  background-image: url('/authBG.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${MEDIA_QUERIES.md} {
    display: none;
  }
`

export const RightPart = styled.main`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 15px;
  ${MEDIA_QUERIES.md} {
    width: 100%;
  }
`

export const Logo = styled.a`
  path {
    fill: ${COLORS.lightBg}
  }
  ${MEDIA_QUERIES.md} {
    path {
      fill: ${COLORS.primary};
    }
  }
`

export const Header = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  position: absolute;
  > * {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
  }
`
