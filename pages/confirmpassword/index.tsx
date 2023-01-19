import { useConfirmPasswordMutation } from '@api/requestApi'
import NavBar from '@components/NavBar'
import { Box, Button, TextField, Typography } from '@mui/material'
import en from '@public/locales/en/confirmPassword.json'
import ko from '@public/locales/ko/confirmPassword.json'
import { useRouter } from 'next/router'
import { useState } from 'react'

const ConfirmPassword = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const [confirmPassword] = useConfirmPasswordMutation()

  const [passwordValue, setPasswordValue] = useState('')
  const [passwordValueError, setPasswordValueError] = useState({})
  const [passwordConfirmResponseMessage, setPasswordConfirmResponseMessage] =
    useState('')

  const handlePasswordValueChange = (e) => {
    const { value } = e.target
    setPasswordValue(value)
  }

  const goToNext = async () => {
    const passwordValidation = validatePassword(passwordValue)
    setPasswordValueError(validatePassword(passwordValue))
    setPasswordConfirmResponseMessage('')

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
      if ('data' in res && res.data.responseMessage === '패스워드 확인 성공') {
        setPasswordConfirmResponseMessage(translate['비밀번호가 일치합니다'])
        router.push('/newpassword')
      } else if (
        'data' in res &&
        res.data.responseMessage === '패스워드 확인 실패'
      ) {
        setPasswordConfirmResponseMessage(
          translate['비밀번호가 일치하지 않습니다'],
        )
      }
    } catch (e) {
      setPasswordConfirmResponseMessage(
        translate['비밀번호가 일치하지 않습니다'],
      )
    }
  }

  const validatePassword = (passwordValue) => {
    const errors = {}
    if (!passwordValue) {
      errors.password = translate['비밀번호를 입력해주세요']
    }
    return errors
  }

  return (
    <>
      <NavBar link="/" title={translate['비밀번호 수정']} />
      <Box sx={{ marginBottom: '1rem' }}>
        <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
          {translate['기존 비밀번호']}
        </Typography>
        <TextField
          name="password"
          type="password"
          size="small"
          placeholder={translate['기존 비밀번호를 입력해주세요']}
          sx={{ width: '100%' }}
          value={passwordValue}
          onChange={handlePasswordValueChange}
        />
        <Typography
          sx={{
            visibility: passwordValueError.password ? 'visible' : 'hidden',
            color: 'tomato',
            fontSize: '1.4rem',
            height: '1.6rem',
            paddingTop: '0.3rem',
            lineHeight: 'normal',
          }}
        >
          {passwordValueError.password}
        </Typography>
      </Box>
      <Button
        onClick={goToNext}
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
        {translate['다음']}
      </Button>
      <Typography
        sx={{
          visibility:
            passwordConfirmResponseMessage !== '' ? 'visible' : 'hidden',
          color:
            passwordConfirmResponseMessage !==
            translate['비밀번호가 일치합니다']
              ? 'tomato'
              : 'green',
          fontSize: '1.4rem',
          height: '1.6rem',
          paddingTop: '0.3rem',
          lineHeight: 'normal',
        }}
      >
        {passwordConfirmResponseMessage}
      </Typography>
    </>
  )
}

export default ConfirmPassword
