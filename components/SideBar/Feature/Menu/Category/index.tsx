import AddIcon from '@mui/icons-material/Add'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import RemoveIcon from '@mui/icons-material/Remove'
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import en from '@public/locales/en/sideBar.json'
import ko from '@public/locales/ko/sideBar.json'
import {
  closeCategorySubMenu,
  toggleCategorySubMenu,
} from '@store/categoryMenuSlice'
import { close } from '@store/sideBarStatusSlice'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Category = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const [categoryOpen, setCategoryOpen] = useState(false)

  const toggleCategoryMenu = () => {
    setCategoryOpen(!categoryOpen)
  }

  const categoryMenus = useSelector((state) => {
    return state.categoryMenu
  })

  const moveLink = (link: string) => {
    router.push(link)
  }

  const sideBarOpen = useSelector((state) => {
    return state.sideBarStatus.sideBarOpen
  })

  useEffect(() => {
    if (!sideBarOpen) {
      setCategoryOpen(false)
      dispatch(closeCategorySubMenu())
    }
  }, [sideBarOpen])

  return (
    <List disablePadding>
      <ListItem disablePadding>
        <ListItemButton onClick={toggleCategoryMenu}>
          <ListItemText primary={translate['카테고리']} />
          {categoryOpen ? (
            <ExpandLess sx={{ fontSize: 25 }} />
          ) : (
            <ExpandMore sx={{ fontSize: 25 }} />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={categoryOpen} timeout="auto" unmountOnExit>
        <List disablePadding>
          {categoryMenus.map((categoryMenu: any, index: number) => (
            <Fragment key={index}>
              <ListItem sx={{ width: '100%' }} disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => {
                    dispatch(toggleCategorySubMenu(index))
                  }}
                >
                  <ListItemText primary={translate[categoryMenu.label]} />
                  {categoryMenu.open ? (
                    <RemoveIcon sx={{ fontSize: 15 }} />
                  ) : (
                    <AddIcon sx={{ fontSize: 15 }} />
                  )}
                </ListItemButton>
              </ListItem>
              {categoryMenu.subMenus.map((subMenu: any, index: number) => (
                <Collapse
                  in={categoryMenu.open}
                  timeout="auto"
                  unmountOnExit
                  key={index}
                  onClick={() => moveLink(subMenu.link)}
                >
                  <ListItemButton
                    sx={{ pl: 6 }}
                    onClick={() => dispatch(close())}
                  >
                    <ListItemText primary={translate[subMenu.label]} />
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
