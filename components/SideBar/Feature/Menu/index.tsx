import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import {
  useRequestMembersDetailMutation,
  useRequestLogoutMutation,
} from '@api/requestApi'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { close } from '@store/sideBarStatusSlice'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Category from './Category'
import style from './Menu.module.scss'

const mainMenusLogin = [
  {
    label: '내 정보',
    link: '/myinfo',
  },
  {
    label: '주문/예약 확인 및 취소',
    link: '/mybooking',
  },
  {
    label: '여행지 추천 받기',
    link: '/survey',
  },
]

const mainMenusLogout = [
  {
    label: '내 정보',
    link: '/signin',
  },
  {
    label: '주문/예약 확인 및 취소',
    link: '/signin',
  },
  {
    label: '여행지 추천 받기',
    link: '/survey',
  },
]

const Menu = () => {
  const [requestMembersDetail] = useRequestMembersDetailMutation()
  const [requestLogout] = useRequestLogoutMutation()

  const router = useRouter()
  const dispatch = useDispatch()

  const [statusCode, setStatusCode] = useState(null)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
  }, [])

  const requestUserInfo = async (accessToken) => {
    console.log(accessToken)
    try {
      const res = await requestMembersDetail({
        accessToken: accessToken,
      })
      console.log('res: ', res)
      const { statusCode } = res.data
      setStatusCode(statusCode)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const clickLogoutMenu = async (e) => {
    dispatch(close())
    try {
      const accessToken = localStorage.getItem('accessToken')
      const refreshToken = localStorage.getItem('refreshToken')
      const res = await requestLogout({
        accessToken: accessToken,
        refreshToken: refreshToken,
      })
      console.log('res: ', res)
      if (res.data.statusCode === 200) {
        router.push('/')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
      }
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const clickSignupMenu = () => {
    dispatch(close())
    router.push('/signup')
  }

  return (
    <>
      {statusCode ? (
        <>
          <List onClick={() => dispatch(close())} sx={{ padding: '0' }}>
            {mainMenusLogin.map((mainMenu: any, index: number) => (
              <Link key={index} href={mainMenu.link}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={mainMenu.label} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <Category />
          <List onClick={clickLogoutMenu} sx={{ padding: '0' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="로그아웃" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      ) : (
        <>
          <List onClick={() => dispatch(close())} sx={{ padding: '0' }}>
            {mainMenusLogout.map((mainMenu: any, index: number) => (
              <Link key={index} href={mainMenu.link}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={mainMenu.label} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <List onClick={clickSignupMenu} sx={{ padding: '0' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="회원가입" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}
    </>
  )
}

export default Menu
