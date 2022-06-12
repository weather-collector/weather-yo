import React from 'react'
import {COLORS} from '../../../styles/theme'
import * as Styles from './styles'


type ButtonProps = {
  type?: 'submit' | 'button'
  onClick?: () => void
  children: React.ReactNode
  bgColor?: string
  hoveredBgColor?: string
  activeBgColor?: string
  width?: string
  id?: string
}

const Button = ({
                  id,
                  children,
                  onClick,
                  type = 'submit',
                  bgColor = COLORS.accent,
                  hoveredBgColor = COLORS.hoveredAccent,
                  activeBgColor = COLORS.activeAccent,
                  width = '100%'
}: ButtonProps) => {
  return (
    <Styles.Button
      onClick={onClick}
      type={type}
      bgColor={bgColor}
      hoveredBgColor={hoveredBgColor}
      activeBgColor={activeBgColor}
      width={width}
      id={id}
    >
      {children}
    </Styles.Button>
  )
}

export default Button
