import Link from 'next/link'
import React from 'react'
import BaseContainer from '../../shared/BaseContainer'
import * as Styles from './styles'

import Logo from '../../../assets/images/logo.svg'


type AuthLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <Styles.AuthLayout>
      <Styles.Header>
        <BaseContainer fluid={true}>
          <Link href={'/'} passHref>
            <Styles.Logo>
              <Logo />
            </Styles.Logo>
          </Link>
        </BaseContainer>
      </Styles.Header>
      <Styles.LeftPart />

      <Styles.RightPart>
          {children}
      </Styles.RightPart>
    </Styles.AuthLayout>
  )
}

export default AuthLayout
