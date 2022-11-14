import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import style from './NewPassword.module.scss'

const NewPassword = () => {
  const [newPasswordValues, setNewPasswordValues] = useState({
    password: '',
    passwordConfirm: '',
  })

  const handleNewPasswordValuesChange = (e) => {
    const { name, value } = e.target
    setNewPasswordValues({ ...newPasswordValues, [name]: value })
  }

  return (
    <>
      <p>새로운 비밀번호를 입력해주세요.</p>
      <div className={style['input-wrapper']}>
        <div className={style['label']}>새로운 비밀번호</div>
        <TextField
          name="password"
          size="small"
          placeholder="새로운 비밀번호를 입력해주세요"
          value={newPasswordValues.password}
          sx={{ width: '100%' }}
          onChange={handleNewPasswordValuesChange}
        />
      </div>
      <div className={style['input-wrapper']}>
        <div className={style['label']}>새로운 비밀번호 확인</div>
        <TextField
          name="passwordConfirm"
          size="small"
          placeholder="새로운 비밀번호를 다시 입력해주세요"
          value={newPasswordValues.passwordConfirm}
          sx={{ width: '100%' }}
          onChange={handleNewPasswordValuesChange}
        />
      </div>
    </>
  )
}

export default NewPassword
