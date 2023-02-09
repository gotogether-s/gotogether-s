import { useChangePasswordMutation } from '@api/requestApi'
import HeadInfo from '@components/HeadInfo'
import NavBar from '@components/NavBar'
import { Box, Button, TextField, Typography } from '@mui/material'
import en from '@public/locales/en/newPassword.json'
import ko from '@public/locales/ko/newPassword.json'
import { useRouter } from 'next/router'
import { useState } from 'react'

const NewPassword = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

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
      if (res.data.statusCode === 200) {
        setPasswordUpdateResponseMessage(
          translate['비밀번호 변경에 성공했습니다'],
        )
        router.push('/')
      } else {
        setPasswordUpdateResponseMessage(
          translate['비밀번호 변경에 실패했습니다. 다시 시도해주세요.'],
        )
      }
    } catch (e) {
      console.log('e: ', e)
      setPasswordUpdateResponseMessage(
        translate['비밀번호 변경에 실패했습니다. 다시 시도해주세요.'],
      )
    }
  }

  const validatePassword = (values) => {
    const errors = {}
    if (!values.password) {
      errors.password = translate['비밀번호를 입력해주세요']
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = translate['비밀번호를 다시 입력해주세요']
    }
    if (
      values.password &&
      values.passwordConfirm &&
      values.password !== values.passwordConfirm
    ) {
      errors.passwordConfirm = translate['비밀번호가 일치하지 않습니다']
    }
    return errors
  }

  return (
    <>
      <HeadInfo title={translate['페이지 제목']} />
      <NavBar link="/" title={translate['비밀번호 변경']} />
      <Box sx={{ padding: '0 1.6rem' }}>
        <Box sx={{ marginBottom: '1rem' }}>
          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            {translate['새 비밀번호']}
          </Typography>
          <TextField
            name="password"
            type="password"
            size="small"
            placeholder={translate['새 비밀번호를 입력해주세요']}
            value={newPasswordValues.password}
            sx={{ width: '100%' }}
            onChange={handleNewPasswordValuesChange}
          />
          <Typography
            sx={{
              visibility: passwordValuesErrors.password ? 'visible' : 'hidden',
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.3rem',
              lineHeight: 'normal',
            }}
          >
            {passwordValuesErrors.password}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '1rem' }}>
          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            {translate['새 비밀번호 확인']}
          </Typography>
          <TextField
            name="passwordConfirm"
            type="password"
            size="small"
            placeholder={translate['새 비밀번호를 다시 입력해주세요']}
            value={newPasswordValues.passwordConfirm}
            sx={{ width: '100%' }}
            onChange={handleNewPasswordValuesChange}
          />
          <Typography
            sx={{
              visibility: passwordValuesErrors.passwordConfirm
                ? 'visible'
                : 'hidden',
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.3rem',
              lineHeight: 'normal',
            }}
          >
            {passwordValuesErrors.passwordConfirm}
          </Typography>
        </Box>
        <Button
          onClick={requestPasswordChange}
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
        >
          {translate['확인']}
        </Button>
        <Typography
          sx={{
            visibility:
              passwordUpdateResponseMessage !== '' ? 'visible' : 'hidden',
            color:
              passwordUpdateResponseMessage !==
              translate['비밀번호 변경에 성공했습니다']
                ? 'tomato'
                : 'green',
            fontSize: '1.4rem',
            height: '1.6rem',
            paddingTop: '0.3rem',
            lineHeight: 'normal',
          }}
        >
          {passwordUpdateResponseMessage}
        </Typography>
      </Box>
    </>
  )
}

export default NewPassword
