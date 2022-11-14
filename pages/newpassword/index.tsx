import { TextField, Button } from '@mui/material'
import { useChangePasswordMutation } from '@api/requestApi'
import { useState } from 'react'
import style from './NewPassword.module.scss'

const NewPassword = () => {
  const [changePassword] = useChangePasswordMutation()

  const [newPasswordValues, setNewPasswordValues] = useState({
    password: '',
    passwordConfirm: '',
  })

  const handleNewPasswordValuesChange = (e) => {
    const { name, value } = e.target
    setNewPasswordValues({ ...newPasswordValues, [name]: value })
  }

  const requestPasswordChange = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const password = {
        password: newPasswordValues.passwordConfirm,
      }
      const res = await changePassword({
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
      <Button
        onClick={requestPasswordChange}
        variant="contained"
        sx={{ width: '100%' }}
      >
        확인
      </Button>
    </>
  )
}

export default NewPassword
