import Link from 'next/link'
import React from 'react'
import {useAppSelector} from '../../../hooks/redux'
import {COLORS} from '../../../styles/theme'
import BaseContainer from '../BaseContainer'
import Typography from '../Typography'
import * as Styles from './styles'

import Logo from '../../../assets/images/logo.svg'
import BellIcon from '../../../assets/images/BellIcon.svg'
import AvatarIcon from '../../../assets/images/AvatarIcon.svg'


const Header = () => {
  const {user} = useAppSelector(state => state.authReducer)

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
          {/*<Styles.Notification>*/}
          {/*  <BellIcon />*/}
          {/*</Styles.Notification>*/}
          <Link href={'/settings'}>
            <Styles.Profile>
              <Typography textSize={1} textColor={COLORS.primary}>{user.email}</Typography>
              <AvatarIcon />
            </Styles.Profile>
          </Link>
        </Styles.RightPart>
      </BaseContainer>
    </Styles.Header>
  )
}

export default Header
