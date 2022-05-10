import React from 'react'
import * as Styles from './styles'


type BaseContainerProps = {
  children: React.ReactNode | React.ReactNode[];
  fluid?: boolean
}


function BaseContainer({children, fluid = false}: BaseContainerProps) {
  return (
    <Styles.BaseContainer fluid={fluid}>
      {children}
    </Styles.BaseContainer>
  )
}

export default BaseContainer
