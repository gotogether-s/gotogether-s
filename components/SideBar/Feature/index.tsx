import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import User from './User'
import Menu from './Menu'
import style from './Feature.module.scss'

const loginUserProps = {
  myInfoLink: '/myinfo',
  primary: '이름',
  secondary: '이메일',
  myBookingLink: '/mybooking',
  favoriteLink: '/favorite',
}

const logoutUserProps = {
  myInfoLink: '/signin',
  primary: '로그인해주세요',
  secondary: null,
  myBookingLink: '/signin',
  favoriteLink: '/signin',
}

const Feature = () => {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && setIsLogin(true)
  }, [])

  return (
    <Box role="presentation">
      {isLogin ? <User {...loginUserProps} /> : <User {...logoutUserProps} />}
      <Menu />
    </Box>
  )
}

export default Feature
