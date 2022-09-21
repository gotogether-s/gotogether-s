import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { MENU_LIST } from '../../../../data/menu'
import Category from './Category'
import style from './Menu.module.scss'

const Menu = () => {
  return (
    <List>
      {MENU_LIST.map((menu, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemText primary={menu.label} />
          </ListItemButton>
        </ListItem>
      ))}
      <Category />
    </List>
  )
}

export default Menu
