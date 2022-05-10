import React from 'react'

import {SIZES} from './constants'
import * as Styles from './styles'


type TypographyProps = {
  children: React.ReactNode | React.ReactNode[];
  tag?: any;
  textColor?: string;
  fontFamily?: string;
  textSize: keyof typeof SIZES | string;
  lineHeight?: number;
  fontWeight?: number;
}

const Typography = ({children, tag = 'span', ...styles}: TypographyProps) => {

  return (
    <Styles.Typography as={tag} {...styles}>
      {children}
    </Styles.Typography>
  )
}

export default Typography
