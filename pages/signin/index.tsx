import { useRequestSignInMutation } from '@api/requestApi'
import NavBar from '@components/NavBar'
import { Box, Button, TextField, Typography } from '@mui/material'
import { close } from '@store/sideBarStatusSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const isEmail = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

const SignIn = () => {
  const dispatch = useDispatch()
  const router = useRouter()

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
      errors.email = '이메일을 입력해주세요!'
    } else if (!isEmail.test(signInValues.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다!'
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요!'
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
      if (res.data.statusCode === 200) {
        setSignInResponseMessage(
          '로그인에 성공했습니다! 홈페이지로 이동합니다!',
        )
        const { accessToken, refreshToken } = res.data.data
        window.localStorage.setItem('accessToken', accessToken)
        window.localStorage.setItem('refreshToken', refreshToken)
        setTimeout(() => {
          dispatch(close())
          router.push('/')
        }, 1000)
      } else if (res.data.statusCode === 400) {
        setSignInResponseMessage('로그인에 실패했습니다!')
      }
    } catch (e) {
      console.log('e: ', e)
      setSignInResponseMessage('로그인에 실패했습니다!')
    }
  }

  return (
    <>
      <NavBar link="/" title="로그인" />
      <Box>
        <Box sx={{ marginBottom: '1.6rem' }}>
          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            이메일
          </Typography>
          <TextField
            name="email"
            size="small"
            placeholder="이메일을 입력해주세요"
            value={signInValues.email}
            sx={{ width: '100%' }}
            onChange={handleSignInValuesChange}
            onBlur={removeInputSpaces}
          />
          <Typography
            style={{
              visibility: signInValuesErrors.email ? 'visible' : 'hidden',
            }}
            sx={{
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.5rem',
              lineHeight: 'normal',
            }}
          >
            {signInValuesErrors.email}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '1.6rem' }}>
          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            비밀번호
          </Typography>
          <TextField
            name="password"
            size="small"
            placeholder="비밀번호를 입력해주세요"
            value={signInValues.password}
            sx={{ width: '100%' }}
            onChange={handleSignInValuesChange}
            onBlur={removeInputSpaces}
          />
          <Typography
            style={{
              visibility: signInValuesErrors.password ? 'visible' : 'hidden',
            }}
            sx={{
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.5rem',
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
            }}
            onClick={submitSignIn}
          >
            로그인
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
              '로그인에 성공했습니다! 홈페이지로 이동합니다!'
                ? 'tomato'
                : 'green',
          }}
        >
          {signInResponseMessage}
        </Typography>
        <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link href="/signup">
            <a style={{ color: '#6C6C6C' }}>회원가입</a>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default SignIn
