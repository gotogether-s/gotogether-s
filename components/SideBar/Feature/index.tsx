import { useRequestMembersDetailMutation } from '@api/requestApi'
import { Box } from '@mui/material'
import en from '@public/locales/en/sideBar.json'
import ko from '@public/locales/ko/sideBar.json'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Menu from './Menu'
import User from './User'

const Feature = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const [requestMembersDetail] = useRequestMembersDetailMutation()

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const loginUserProps = {
    myAccountLink: '/myaccount',
    backgroundColor: '#4581f6',
    primary: userName,
    secondary: userEmail,
    myBookingLink: '/mybooking',
    favoriteLink: '/saved',
  }

  const logoutUserProps = {
    myAccountLink: '/signin',
    backgroundColor: '#d3d3d3',
    primary: translate['로그인하기'],
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
