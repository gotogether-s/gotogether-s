import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Category from './Category'
import { useSelector } from 'react-redux'
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
