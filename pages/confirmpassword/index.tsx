import { TextField, Button } from '@mui/material'
import { useConfirmPasswordMutation } from '@api/requestApi'
import { useEffect, useState } from 'react'
import style from './ConfirmPassword.module.scss'

const ConfirmPassword = () => {
  const [confirmPassword] = useConfirmPasswordMutation()

  const [passwordValue, setPasswordValue] = useState('')
  const [passwordValueError, setPasswordValueError] = useState({})

  const handlePasswordValueChange = (e) => {
    const { value } = e.target
    setPasswordValue(value)
  }

  const goToNext = async () => {
    const passwordValidation = validatePassword(passwordValue)
    setPasswordValueError(validatePassword(passwordValue))

    if (Object.keys(passwordValidation).length !== 0) return

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

  const validatePassword = (passwordValue) => {
    const errors = {}
    if (!passwordValue) {
      errors.password = '비밀번호를 입력해주세요!'
    }
    return errors
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
        <p
          style={{
            visibility: passwordValueError.password ? 'visible' : 'hidden',
          }}
          className={style['error-message']}
        >
          {passwordValueError.password}
        </p>
      </div>
      <Button onClick={goToNext} variant="contained" sx={{ width: '100%' }}>
        다음
      </Button>
    </>
  )
}

export default ConfirmPassword
