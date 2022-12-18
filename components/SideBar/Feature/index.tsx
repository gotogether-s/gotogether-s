import { useRequestMembersDetailMutation } from '@api/requestApi'
import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { getLoginStatus } from '@store/isLoginSlice'
import { useState, useEffect } from 'react'
import User from './User'
import Menu from './Menu'
import style from './Feature.module.scss'

const Feature = () => {
  const isLogin = useSelector((state) => {
    return state.isLogin.isLogin
  })
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

  useEffect(() => {
    dispatch(getLoginStatus())
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
  }, [])

  const requestUserInfo = async (accessToken) => {
    try {
      const res = await requestMembersDetail({
        accessToken: accessToken,
      })
      console.log('res: ', res)
      const { name, email } = res.data.data
      setUserName(name)
      setUserEmail(email)
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
