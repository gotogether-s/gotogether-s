import { useRequestMembersDetailMutation } from '@api/requestApi'
import { Box } from '@mui/material'
import { getLoginStatus } from '@store/isLoginSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Menu from './Menu'
import User from './User'

const Feature = () => {
  const dispatch = useDispatch()

  const [requestMembersDetail] = useRequestMembersDetailMutation()

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const loginUserProps = {
    myInfoLink: '/myinfo',
    primary: userName,
    secondary: userEmail,
    myBookingLink: '/mybooking',
    favoriteLink: '/likes',
  }

  const logoutUserProps = {
    myInfoLink: '/signin',
    primary: '로그인해주세요',
    secondary: null,
    myBookingLink: '/signin',
    favoriteLink: '/signin',
  }

  const isLogin = useSelector((state) => {
    return state.isLogin.isLogin
  })

  const requestUserInfo = async (accessToken) => {
    try {
      const res = await requestMembersDetail({
        accessToken: accessToken,
      })
      const { name, email } = res.data.data
      setUserName(name)
      setUserEmail(email)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  useEffect(() => {
    dispatch(getLoginStatus())
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
  }, [])

  return (
    <Box role="presentation">
      {isLogin ? <User {...loginUserProps} /> : <User {...logoutUserProps} />}
      <Menu />
    </Box>
  )
}

export default Feature
