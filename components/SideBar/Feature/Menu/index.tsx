import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { close } from '@store/sideBarStatusSlice'
import Category from './Category'
import style from './Menu.module.scss'

const Menu = () => {
  const mainMenus = useSelector((state) => {
    return state.mainMenu
  })
  const dispatch = useDispatch()

  return (
    <List onClick={() => dispatch(close())}>
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
