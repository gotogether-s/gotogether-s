import axios from 'axios'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import User from './User'
import Menu from './Menu'
import style from './Feature.module.scss'

const Feature = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const loginUserProps = {
    myInfoLink: '/myinfo',
    primary: userName,
    secondary: userEmail,
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

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
  }, [])

  const requestUserInfo = async (accessToken) => {
    console.log(accessToken)
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/members/detail`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      console.log('res: ', res)
      const { name, email } = res.data.data
      setUserName(name)
      setUserEmail(email)
      setIsLogin(true)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  return (
    <Box role="presentation">
      {isLogin ? <User {...loginUserProps} /> : <User {...logoutUserProps} />}
      <Menu />
    </Box>
  )
}

export default Feature
