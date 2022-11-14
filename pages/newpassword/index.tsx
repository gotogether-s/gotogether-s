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
  const [passwordValuesErrors, setPasswordValuesErrors] = useState({})
  const [passwordUpdateResponseMessage, setPasswordUpdateResponseMessage] =
    useState('')

  const handleNewPasswordValuesChange = (e) => {
    const { name, value } = e.target
    setNewPasswordValues({ ...newPasswordValues, [name]: value })
  }

  const requestPasswordChange = async () => {
    const passwordValidation = validatePassword(newPasswordValues)
    setPasswordValuesErrors(validatePassword(newPasswordValues))
    setPasswordUpdateResponseMessage('')

    if (Object.keys(passwordValidation).length !== 0) return

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
      if (res.data.statusCode === 200) {
        setPasswordUpdateResponseMessage('비밀번호 변경에 성공했습니다!')
      } else {
        setPasswordUpdateResponseMessage(
          '비밀번호 변경에 실패했습니다! 다시 시도해주세요!',
        )
      }
    } catch (e) {
      console.log('e: ', e)
      setPasswordUpdateResponseMessage(
        '비밀번호 변경에 실패했습니다! 다시 시도해주세요!',
      )
    }
  }

  const validatePassword = (values) => {
    const errors = {}
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요!'
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = '비밀번호를 다시 입력해주세요!'
    }
    if (
      values.password &&
      values.passwordConfirm &&
      values.password !== values.passwordConfirm
    ) {
      errors.passwordConfirm = '비밀번호가 일치하지 않습니다!'
    }
    return errors
  }

  return (
    <>
      <div className={style['input-wrapper']}>
        <div className={style['label']}>새 비밀번호</div>
        <TextField
          name="password"
          size="small"
          placeholder="새 비밀번호를 입력해주세요"
          value={newPasswordValues.password}
          sx={{ width: '100%' }}
          onChange={handleNewPasswordValuesChange}
        />
        <p
          style={{
            visibility: passwordValuesErrors.password ? 'visible' : 'hidden',
          }}
          className={style['error-message']}
        >
          {passwordValuesErrors.password}
        </p>
      </div>
      <div className={style['input-wrapper']}>
        <div className={style['label']}>새 비밀번호 확인</div>
        <TextField
          name="passwordConfirm"
          size="small"
          placeholder="새 비밀번호를 다시 입력해주세요"
          value={newPasswordValues.passwordConfirm}
          sx={{ width: '100%' }}
          onChange={handleNewPasswordValuesChange}
        />
        <p
          style={{
            visibility: passwordValuesErrors.passwordConfirm
              ? 'visible'
              : 'hidden',
          }}
          className={style['error-message']}
        >
          {passwordValuesErrors.passwordConfirm}
        </p>
      </div>
      <Button
        onClick={requestPasswordChange}
        variant="contained"
        sx={{ width: '100%' }}
      >
        확인
      </Button>
      <p
        className={
          passwordUpdateResponseMessage !== '비밀번호 변경에 성공했습니다!'
            ? style['error-message']
            : style['success-message']
        }
        style={{
          visibility:
            passwordUpdateResponseMessage !== '' ? 'visible' : 'hidden',
        }}
      >
        {passwordUpdateResponseMessage}
      </p>
    </>
  )
}

export default NewPassword
