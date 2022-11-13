import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { useMembersDetailMutation } from '@api/requestApi'
import { useState, useEffect } from 'react'
import style from './MyInfo.module.scss'

const MyInfo = () => {
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

  return (
    <>
      {userInfo.map((obj) => (
        <List
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
    </>
  )
}

export default MyInfo
