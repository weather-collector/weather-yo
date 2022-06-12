import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {logout} from '../../../store/reducers/ActionCreators/authActions'
import {setIsMenuOpen} from '../../../store/reducers/InterfaceSlice'
import Footer from '../Footer'
import ConfirmationDialog from '../Modals/ConfirmationDialog'
import Typography from '../Typography'
import {menuItems} from './constants'
import * as Styles from './styles'

import ExitIcon from '../../../assets/images/ExitIcon.svg'


type NavItemPros = {
  Icon: typeof React.Component,
  name: string,
  pathName: string
}

const NavItem = ({Icon, name, pathName}: NavItemPros) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  return (
    <Link href={pathName} passHref>
      <Styles.NavItem
        isActive={`/${router.pathname.split('/')[1]}` === pathName}
        onClick={() => dispatch(setIsMenuOpen(false))}
      >
        <Icon />
        <Typography textSize={1}>{name}</Typography>
      </Styles.NavItem>
    </Link>
  )
}

const Menu = () => {
  const dispatch = useAppDispatch()
  const {isMenuOpen} = useAppSelector(state => state.interfaceReducer)

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Styles.Menu isMenuOpen={isMenuOpen}>
      <Styles.MenuNav>
        {menuItems.map((navItem: NavItemPros, index: number) => (
          <NavItem Icon={navItem.Icon} name={navItem.name} pathName={navItem.pathName} key={`menu-item-${index}`}/>
        ))}
        <ConfirmationDialog
          trigger={
            <Styles.NavItem type={'button'}>
              <ExitIcon />
              <Typography textSize={1}>Вийти</Typography>
            </Styles.NavItem>
          }
          onConfirmationCallback={logoutHandler}
        />
      </Styles.MenuNav>

      <Styles.MenuFooter>
        <Footer />
      </Styles.MenuFooter>
    </Styles.Menu>
  )
}

export default Menu
