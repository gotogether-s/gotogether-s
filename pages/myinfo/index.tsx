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
        <p>{obj.value}</p>
      ))}
    </>
  )
}

export default MyInfo
