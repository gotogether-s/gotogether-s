import { useRequestMembersDetailMutation } from '@api/requestApi'
import NavBar from '@components/NavBar'
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const MyInfo = () => {
  const router = useRouter()

  const [requestMembersDetail] = useRequestMembersDetailMutation()

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

  const requestUserInfo = async (accessToken) => {
    try {
      const res = await requestMembersDetail({
        accessToken: accessToken,
      })
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

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
  }, [])

  return (
    <>
      <NavBar link="/" title="내 정보" />
      {userInfo.map((obj, index) => (
        <List
          key={index}
          sx={{
            padding: '0',
            margin: '3rem 0',
          }}
        >
          <ListItem disablePadding>
            <ListItemText
              sx={{ margin: 0 }}
              primary={
                <Typography sx={{ fontSize: '1.5rem', color: '#4E4E4E' }}>
                  {obj.label}
                </Typography>
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
          <Divider sx={{ margin: '0 -1.6rem' }} />
        </List>
      ))}
      <Button
        variant="contained"
        sx={{
          width: '100%',
          backgroundColor: '#4581F8',
          boxShadow: 'none',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          fontWeight: '500',
          '&:hover': {
            backgroundColor: '#4581F8',
            boxShadow: 'none',
          },
        }}
        onClick={changePassword}
      >
        비밀번호 변경
      </Button>
    </>
  )
}

export default MyInfo
