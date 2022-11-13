import { TextField } from '@mui/material'
import { useState } from 'react'
import style from './ConfirmPassword.module.scss'

const ConfirmPassword = () => {
  const [passwordValue, setPasswordValue] = useState('')

  const handlePasswordValueChange = (e) => {
    const { value } = e.target
    setPasswordValue(value)
  }

  return (
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
  )
}

export default ConfirmPassword
