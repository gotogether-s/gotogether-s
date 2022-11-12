import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useMembersDetailMutation, useLogoutMutation } from '@api/requestApi'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { close } from '@store/sideBarStatusSlice'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Category from './Category'
import style from './Menu.module.scss'

const Menu = () => {
  const [membersDetail] = useMembersDetailMutation()
  const [logout] = useLogoutMutation()

  const router = useRouter()

  const mainMenus = useSelector((state) => {
    return state.mainMenu
  })
  const dispatch = useDispatch()

  const [statusCode, setStatusCode] = useState(null)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
  }, [])

  const requestUserInfo = async (accessToken) => {
    console.log(accessToken)
    try {
      const res = await membersDetail({
        accessToken: accessToken,
      })
      console.log('res: ', res)
      const { statusCode } = res.data
      setStatusCode(statusCode)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const clickLogoutMenu = () => {
    dispatch(close())
    requestLogout()
  }

  const requestLogout = async (e) => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      console.log('accessToken:', accessToken)
      const res = await logout({
        accessToken: accessToken,
      })
      console.log('res: ', res)
      if (res.data.statusCode === 200) {
        router.push('/')
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
      <List onClick={() => dispatch(close())} sx={{ padding: '0' }}>
        {mainMenus.map((mainMenu: any, index: number) => (
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
      {statusCode ? (
        <List onClick={clickLogoutMenu} sx={{ padding: '0' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="로그아웃" />
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <List onClick={clickSignupMenu} sx={{ padding: '0' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="회원가입" />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </>
  )
}

export default Menu
