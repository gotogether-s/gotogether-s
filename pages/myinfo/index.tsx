import { List, ListItem, ListItemText, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useMembersDetailMutation } from '@api/requestApi'
import { useState, useEffect } from 'react'
import NavBar from '@components/NavBar'
import style from './MyInfo.module.scss'

const MyInfo = () => {
  const router = useRouter()

  const [membersDetail] = useMembersDetailMutation()

  const [userInfo, setUserInfo] = useState([
    {
      label: '이름',
      value: '',
    },
    {
      label: '생년월일',
      value: '',
    },
    {
      label: '이메일',
      value: '',
    },
  ])

  useEffect(() => {
    requestUserInfo()
  }, [])

  const requestUserInfo = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const res = await membersDetail({
        accessToken: accessToken,
      })
      console.log('res: ', res)
      const { name, birth, email } = res.data.data
      updateUserInfo(name, birth, email)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const updateUserInfo = (name, birth, email) => {
    const newUserInfo = userInfo.map((obj) => {
      if (obj.label === '이름') {
        return { ...obj, value: name }
      } else if (obj.label === '생년월일') {
        return { ...obj, value: birth }
      } else {
        return { ...obj, value: email }
      }
    })
    setUserInfo(newUserInfo)
  }

  const changePassword = () => {
    router.push('/confirmpassword')
  }

  return (
    <>
      <NavBar link="/" title="내 정보" />
      {userInfo.map((obj, index) => (
        <List
          key={index}
          sx={{
            padding: '0',
            margin: '3rem 0',
            borderBottom: '0.1rem solid #ddd',
          }}
        >
          <ListItem disablePadding>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: '1.5rem' }}>{obj.label}</Typography>
              }
              secondary={
                <Typography
                  variant="p"
                  component="p"
                  sx={{ padding: '1rem 0' }}
                >
                  {obj.value}
                </Typography>
              }
            />
          </ListItem>
        </List>
      ))}
      <Button
        variant="contained"
        sx={{
          width: '100%',
        }}
        onClick={changePassword}
      >
        비밀번호 변경
      </Button>
    </>
  )
}

export default MyInfo
