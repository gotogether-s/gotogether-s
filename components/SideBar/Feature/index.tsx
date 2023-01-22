import { useRequestMembersDetailMutation } from '@api/requestApi'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Menu from './Menu'
import User from './User'

const Feature = () => {
  const [requestMembersDetail] = useRequestMembersDetailMutation()

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const loginUserProps = {
    myInfoLink: '/myinfo',
    backgroundColor: '#4581f6',
    primary: userName,
    secondary: userEmail,
    myBookingLink: '/mybooking',
    favoriteLink: '/likes',
  }

  const logoutUserProps = {
    myInfoLink: '/signin',
    backgroundColor: '#d3d3d3',
    primary: '로그인하기',
    secondary: null,
    myBookingLink: '/signin',
    favoriteLink: '/signin',
  }

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
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
  }, [])

  return (
    <Box role="presentation">
      {localStorage.getItem('accessToken') ? (
        <User {...loginUserProps} />
      ) : (
        <User {...logoutUserProps} />
      )}
      <Menu />
    </Box>
  )
}

export default Feature
