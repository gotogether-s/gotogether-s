import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import AddIcon from '@mui/icons-material/Add'
import { useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCategorySubMenu } from '/store/categoryMenuSlice'
import style from './Category.module.scss'

const Category = () => {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const toggleCategoryMenu = () => {
    setCategoryOpen(!categoryOpen)
  }

  const categoryMenus = useSelector((state) => {
    return state.categoryMenu
  })

  const dispatch = useDispatch()

  return (
    <List disablePadding>
      <ListItem disablePadding>
        <ListItemButton onClick={toggleCategoryMenu}>
          <ListItemText primary="카테고리" />
          {categoryOpen ? (
            <ExpandLess sx={{ fontSize: 25 }} />
          ) : (
            <ExpandMore sx={{ fontSize: 25 }} />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={categoryOpen} timeout="auto" unmountOnExit>
        <List>
          {categoryMenus.map((categoryMenu: any, index: number) => (
            <Fragment key={index}>
              <ListItem sx={{ width: '100%' }} disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => {
                    dispatch(toggleCategorySubMenu(index))
                  }}
                >
                  <ListItemText primary={categoryMenu.label} />
                  <AddIcon />
                </ListItemButton>
              </ListItem>
              {categoryMenu.subMenus.map((subMenu: any, index: number) => (
                <Collapse
                  in={categoryMenu.open}
                  timeout="auto"
                  unmountOnExit
                  key={index}
                >
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary={subMenu.label} />
                  </ListItemButton>
                </Collapse>
              ))}
            </Fragment>
          ))}
        </List>
      </Collapse>
    </List>
  )
}

export default Category
