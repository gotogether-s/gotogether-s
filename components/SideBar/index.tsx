import { useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import Backdrop from '@mui/material/Backdrop'
import style from './SideBar.module.scss'

const SideBar = () => {
  const [open, setOpen] = useState(false)

  const clickSideBarMenuIcon = () => {
    setOpen(!open)
  }

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
      <div className={style['box-wrapper']}>
        <Box className={style['status-box']}>
          <div>주문(예약)건</div>
          <div>-</div>
        </Box>
        <Box className={style['status-box']}>
          <div>찜하기</div>
          <div>-</div>
        </Box>
      </div>
      <List>
        {[
          '내 정보',
          '주문/예약 확인 및 취소',
          '카테고리',
          '여행지 추천 다시 받기',
        ].map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={menu} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <MenuIcon sx={{ fontSize: 30 }} onClick={clickSideBarMenuIcon} />
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
        open={open}
      >
        {list()}
      </Drawer>
      <Backdrop
        open={open}
        onClick={clickSideBarMenuIcon}
        sx={{ position: 'absolute' }}
      />
    </>
  )
}

export default SideBar
