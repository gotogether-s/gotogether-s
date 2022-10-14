import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Category from './Category'
import style from './Menu.module.scss'

const Menu = () => {
  const mainMenus = useSelector((state) => {
    return state.mainMenu
  })

  return (
    <List>
      {mainMenus.map((mainMenu: any, index: number) => (
        <Link key={index} href={mainMenu.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={mainMenu.label} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
      <Category />
    </List>
  )
}

export default Menu
