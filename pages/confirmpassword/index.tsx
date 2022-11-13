import { TextField, Button } from '@mui/material'
import { useConfirmPasswordMutation } from '@api/requestApi'
import { useState } from 'react'
import style from './ConfirmPassword.module.scss'

const ConfirmPassword = () => {
  const [confirmPassword] = useConfirmPasswordMutation()

  const [passwordValue, setPasswordValue] = useState('')

  const handlePasswordValueChange = (e) => {
    const { value } = e.target
    setPasswordValue(value)
  }

  const goToNext = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const password = {
        password: passwordValue,
      }
      const res = await confirmPassword({
        data: password,
        accessToken: accessToken,
      })
      console.log('res: ', res)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  return (
    <>
      <div className={style['input-wrapper']}>
        <div className={style['label']}>기존 비밀번호를 입력해주세요.</div>
        <TextField
          name="password"
          size="small"
          placeholder="기존 비밀번호 입력"
          sx={{ width: '100%' }}
          value={passwordValue}
          onChange={handlePasswordValueChange}
        />
      </div>
      <Button onClick={goToNext} variant="contained" sx={{ width: '100%' }}>
        다음
      </Button>
    </>
  )
}

export default ConfirmPassword
