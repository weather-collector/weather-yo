import Link from 'next/link'
import React from 'react'
import Logo from '../../../assets/images/logo.svg'
import BaseContainer from '../../shared/BaseContainer'
import * as Styles from './styles'


type AuthLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <Styles.AuthLayout>
      <Styles.LeftPart>
        <Styles.Header>
          <BaseContainer fluid={true}>
            <Link href={'/'} passHref>
              <Styles.Logo>
                <Logo />
              </Styles.Logo>
            </Link>
          </BaseContainer>
        </Styles.Header>
      </Styles.LeftPart>

      <Styles.RightPart>
          {children}
      </Styles.RightPart>
    </Styles.AuthLayout>
  )
}

export default AuthLayout
