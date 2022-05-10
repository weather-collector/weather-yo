import Link from 'next/link'
import React from 'react'
import BaseContainer from '../BaseContainer'
import * as Styles from './styles'

import Logo from '../../../assets/images/logo.svg'
import BellIcon from '../../../assets/images/BellIcon.svg'
import AvatarIcon from '../../../assets/images/AvatarIcon.svg'


const Header = () => {
  return (
    <Styles.Header>
      <BaseContainer fluid={true}>
        <Styles.LeftPart>
          <Link href={'/'} passHref>
            <Styles.Logo>
              <Logo />
            </Styles.Logo>
          </Link>
        </Styles.LeftPart>

        <Styles.RightPart>
          <Styles.Notification>
            <BellIcon />
          </Styles.Notification>
          <Link href={'/settings'}>
            <a><AvatarIcon /></a>
          </Link>
        </Styles.RightPart>
      </BaseContainer>
    </Styles.Header>
  )
}

export default Header
