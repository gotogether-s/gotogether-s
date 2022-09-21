import { useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/categoryMenuSlice'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import AddIcon from '@mui/icons-material/Add'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import Backdrop from '@mui/material/Backdrop'
import { MENU_LIST } from '../../data/menu'
import style from './SideBar.module.scss'

const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const clickSideBarMenu = () => {
    setSideBarOpen(!sideBarOpen)
  }

  const [categoryMenuOpen, setSubMenuOpen] = useState(false)
  const clickSubMenu = () => {
    setSubMenuOpen(!categoryMenuOpen)
  }

  const categoryMenus = useSelector((state) => {
    return state.categoryMenu
  })

  const dispatch = useDispatch()

  const list = () => (
    <Box role="presentation">
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText primary="로그인하기" />
          <ArrowForwardIosIcon />
        </ListItem>
      </List>
      <List className={style['box-wrapper']}>
        <Box className={style['status-box']}>
          <div>주문(예약)건</div>
          <div>-</div>
        </Box>
        <Box className={style['status-box']}>
          <div>찜하기</div>
          <div>-</div>
        </Box>
      </List>
      <List>
        {MENU_LIST.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={menu.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <>
          <ListItem disablePadding>
            <ListItemButton onClick={clickSubMenu}>
              <ListItemText primary="카테고리" />
              {categoryMenuOpen ? (
                <ExpandLess sx={{ fontSize: 25 }} />
              ) : (
                <ExpandMore sx={{ fontSize: 25 }} />
              )}
            </ListItemButton>
          </ListItem>
          <Collapse in={categoryMenuOpen} timeout="auto" unmountOnExit>
            <List>
              {categoryMenus.map((categoryMenu: any, index: number) => (
                <Fragment key={index}>
                  <ListItem sx={{ width: '100%' }} disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={() => {
                        dispatch(open(index))
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
        </>
      </List>
    </Box>
  )

  return (
    <>
      <MenuIcon sx={{ fontSize: 30 }} onClick={clickSideBarMenu} />
      <Drawer
        PaperProps={{
          sx: {
            width: '80%',
            position: 'absolute',
            height: '100%',
            border: '1px solid #ddd',
            transition: 'none !important',
          },
        }}
        variant="persistent"
        anchor="left"
        open={sideBarOpen}
      >
        {list()}
      </Drawer>
      <Backdrop
        open={sideBarOpen}
        onClick={clickSideBarMenu}
        sx={{ position: 'absolute' }}
      />
    </>
  )
}

export default SideBar
