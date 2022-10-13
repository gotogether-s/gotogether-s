import axios from 'axios'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  Box,
  ListItemAvatar,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Menu from './Menu'
import style from './Feature.module.scss'

const Feature = () => {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && setIsLogin(true)
  }, [])

  return (
    <Box role="presentation">
      {isLogin ? (
        <Link href="/myinfo">
          <List
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText primary="이름" secondary="이메일" />
              <ArrowForwardIosIcon />
            </ListItem>
          </List>
        </Link>
      ) : (
        <Link href="/signin">
          <List
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText primary="로그인하기" />
              <ArrowForwardIosIcon />
            </ListItem>
          </List>
        </Link>
      )}
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
      <Menu />
    </Box>
  )
}

export default Feature
