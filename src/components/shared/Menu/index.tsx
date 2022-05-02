import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import Footer from '../Footer'
import Typography from '../Typography'
import {menuItems} from './constants'
import * as Styles from './styles'


type NavItemPros = {
  Icon: typeof React.Component,
  name: string,
  pathName: string
}

const NavItem = ({Icon, name, pathName}: NavItemPros) => {
  const router = useRouter()

  return (
    <Link href={pathName} passHref>
      <Styles.NavItem isActive={router.pathname === pathName}>
        <Icon />
        <Typography textSize={1}>{name}</Typography>
      </Styles.NavItem>
    </Link>
  )
}

const Menu = () => {
  return (
    <Styles.Menu>
      <Styles.MenuNav>
        {menuItems.map((navItem: NavItemPros, index: number) => (
          <NavItem Icon={navItem.Icon} name={navItem.name} pathName={navItem.pathName} key={`menu-item-${index}`}/>
        ))}
      </Styles.MenuNav>

      <Styles.MenuFooter>
        <Footer />
      </Styles.MenuFooter>
    </Styles.Menu>
  )
}

export default Menu
