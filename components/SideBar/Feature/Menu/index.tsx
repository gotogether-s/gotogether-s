import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
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
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemText primary={mainMenu.label} />
          </ListItemButton>
        </ListItem>
      ))}
      <Category />
    </List>
  )
}

export default Menu
