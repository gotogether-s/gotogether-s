import {
  useRequestLogoutMutation,
  useRequestMembersDetailMutation,
} from '@api/requestApi'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { getLoginStatus } from '@store/isLoginSlice'
import { close } from '@store/sideBarStatusSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Category from './Category'

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
  const dispatch = useDispatch()
  const router = useRouter()

  const [requestMembersDetail] = useRequestMembersDetailMutation()
  const [requestLogout] = useRequestLogoutMutation()

  const isLogin = useSelector((state) => {
    return state.isLogin.isLogin
  })

  const requestUserInfo = async (accessToken) => {
    try {
      const res = await requestMembersDetail({
        accessToken: accessToken,
      })
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
      if (res.data.statusCode === 200) {
        router.push('/')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        dispatch(getLoginStatus())
      }
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const clickSignupMenu = () => {
    dispatch(close())
    router.push('/signup')
  }

  useEffect(() => {
    dispatch(getLoginStatus())
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
  }, [])

  return (
    <>
      {isLogin ? (
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
          <Category />
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
