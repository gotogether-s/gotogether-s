import { useMembersDetailMutation } from '@api/requestApi'
import { useState, useEffect } from 'react'
import style from './MyInfo.module.scss'

const MyInfo = () => {
  const [membersDetail] = useMembersDetailMutation()

  const [userName, setUserName] = useState('')
  const [userBirthday, setUserBirthday] = useState('')
  const [userEmail, setUserEmail] = useState('')

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
      setUserName(name)
      setUserBirthday(birth)
      setUserEmail(email)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  return (
    <>
      <p>{userName}</p>
      <p>{userBirthday}</p>
      <p>{userEmail}</p>
    </>
  )
}

export default MyInfo
