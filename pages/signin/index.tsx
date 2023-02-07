import { useRequestSignInMutation } from '@api/requestApi'
import HeadInfo from '@components/HeadInfo'
import NavBar from '@components/NavBar'
import { Box, Button, TextField, Typography } from '@mui/material'
import en from '@public/locales/en/signIn.json'
import ko from '@public/locales/ko/signIn.json'
import { close } from '@store/sideBarStatusSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const isEmail = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

const SignIn = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const [requestSignIn] = useRequestSignInMutation()

  const [signInValues, setSignInValues] = useState({
    email: '',
    password: '',
  })
  const [signInValuesErrors, setSignInValuesErrors] = useState({})
  const [signInResponseMessage, setSignInResponseMessage] = useState('')

  const handleSignInValuesChange = (e) => {
    const { name, value } = e.target
    setSignInValues({ ...signInValues, [name]: value })
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    setSignInValues({
      ...signInValues,
      [name]: value.trim().replace(/\s/g, ''),
    })
  }

  const validateSignIn = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = translate['에러: 이메일을 입력해주세요']
    } else if (!isEmail.test(signInValues.email)) {
      errors.email = translate['올바른 이메일 형식이 아닙니다']
    }
    if (!values.password) {
      errors.password = translate['에러: 비밀번호를 입력해주세요']
    }
    return errors
  }

  const submitSignIn = async (e) => {
    const signInValidation = validateSignIn(signInValues)
    setSignInValuesErrors(validateSignIn(signInValues))
    setSignInResponseMessage('')

    if (Object.keys(signInValidation).length !== 0) return

    try {
      const res = await requestSignIn({
        data: signInValues,
      })
      if ('data' in res && res.data.statusCode === 200) {
        setSignInResponseMessage(
          translate['로그인에 성공했습니다. 홈페이지로 이동합니다.'],
        )
        const { accessToken, refreshToken } = res.data.data
        window.localStorage.setItem('accessToken', accessToken)
        window.localStorage.setItem('refreshToken', refreshToken)
        setTimeout(() => {
          dispatch(close())
          router.push('/')
        }, 1000)
      } else if ('data' in res && res.data.statusCode === 400) {
        setSignInResponseMessage(
          translate['로그인에 실패했습니다. 다시 시도해주세요.'],
        )
      }
    } catch (e) {
      console.log('e: ', e)
      setSignInResponseMessage(
        translate['로그인에 실패했습니다. 다시 시도해주세요.'],
      )
    }
  }

  return (
    <>
      <HeadInfo title={translate['페이지 제목']} />
      <NavBar link="/" title={translate['로그인']} />
      <Box sx={{ padding: '0 1.6rem' }}>
        <Box sx={{ marginBottom: '1rem' }}>
          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            {translate['이메일']}
          </Typography>
          <TextField
            name="email"
            size="small"
            placeholder={translate['이메일을 입력해주세요']}
            value={signInValues.email}
            sx={{ width: '100%' }}
            onChange={handleSignInValuesChange}
            onBlur={removeInputSpaces}
            // autoComplete="off"
          />
          <Typography
            sx={{
              visibility: signInValuesErrors.email ? 'visible' : 'hidden',
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.3rem',
              lineHeight: 'normal',
            }}
          >
            {signInValuesErrors.email}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '1rem' }}>
          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            {translate['비밀번호']}
          </Typography>
          <TextField
            name="password"
            type="password"
            size="small"
            placeholder={translate['비밀번호를 입력해주세요']}
            value={signInValues.password}
            sx={{ width: '100%' }}
            onChange={handleSignInValuesChange}
            onBlur={removeInputSpaces}
          />
          <Typography
            sx={{
              visibility: signInValuesErrors.password ? 'visible' : 'hidden',
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.3rem',
              lineHeight: 'normal',
            }}
          >
            {signInValuesErrors.password}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            type="submit"
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
            onClick={submitSignIn}
          >
            {translate['로그인']}
          </Button>
        </Box>
        <Typography
          sx={{
            fontSize: '1.4rem',
            height: '1.6rem',
            paddingTop: '0.5rem',
            lineHeight: 'normal',
            visibility: signInResponseMessage !== '' ? 'visible' : 'hidden',
            color:
              signInResponseMessage !==
              translate['로그인에 성공했습니다. 홈페이지로 이동합니다.']
                ? 'tomato'
                : 'green',
          }}
        >
          {signInResponseMessage}
        </Typography>
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <Typography>{translate['아직 회원이 아니신가요?']}</Typography>
          <Link href="/signup">
            <a style={{ color: '#6C6C6C' }}>{translate['회원가입']}</a>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default SignIn
