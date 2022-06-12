import Link from 'next/link'
import React from 'react'
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {setIsMenuOpen} from '../../../store/reducers/InterfaceSlice'
import {COLORS} from '../../../styles/theme'
import BaseContainer from '../BaseContainer'
import Typography from '../Typography'
import * as Styles from './styles'

import Logo from '../../../assets/images/logo.svg'
// import BellIcon from '../../../assets/images/BellIcon.svg'
import AvatarIcon from '../../../assets/images/AvatarIcon.svg'


const Header = () => {
  const dispatch = useAppDispatch()
  const {isMenuOpen} = useAppSelector(state => state.interfaceReducer)
  const {user} = useAppSelector(state => state.authReducer)

  return (
    <Styles.Header>
      <BaseContainer fluid={true}>
        <Styles.LeftPart>
          <Styles.MenuToggle role={'button'} isOpen={isMenuOpen} onClick={()=> dispatch(setIsMenuOpen(!isMenuOpen))}>
            <Styles.MenuLine />
          </Styles.MenuToggle>
          <Link href={'/'} passHref>
            <Styles.Logo>
              <picture>
                <source srcSet="/logo-small.svg" media="(max-width: 576px)" />
                <img src="/logo.svg" alt="logo" />
              </picture>
              {/*<Logo />*/}
            </Styles.Logo>
          </Link>
        </Styles.LeftPart>

        <Styles.RightPart>
          {/*<Styles.Notification>*/}
          {/*  <BellIcon />*/}
          {/*</Styles.Notification>*/}
          <Link href={'/settings'} passHref>
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
