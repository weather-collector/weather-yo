import styled from 'styled-components'

import {SIZES} from './constants'
import {MEDIA_QUERIES} from '../../../utils/mediaQueries'


type TypographyProps = {
  textColor?: string;
  fontFamily?: string;
  textSize: keyof typeof SIZES | string;
  lineHeight?: number;
  fontWeight?: number;
}


export const Typography = styled.div<TypographyProps>`
  color: ${props => props.textColor};
  line-height: ${props => props.lineHeight};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => typeof props.textSize === 'string' ?  props.textSize : SIZES[props.textSize].default};
  font-family: ${props => props.fontFamily};
  ${props => {
    return `${MEDIA_QUERIES.lg}{
      font-size: ${typeof props.textSize === 'string' ?  props.textSize : SIZES[props.textSize].md};
    }`
  }}
  ${props => {
    return `${MEDIA_QUERIES.sm}{
      font-size: ${typeof props.textSize === 'string' ?  props.textSize : SIZES[props.textSize].sm};
    }`
  }}
`
