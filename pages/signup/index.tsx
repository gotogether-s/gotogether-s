import {
  useRequestSignUpMutation,
  useValidateEmailMutation,
} from '@api/requestApi'
import NavBar from '@components/NavBar'
import { Box, Button, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { Dayjs } from 'dayjs'
import { useRouter } from 'next/router'
import { useState } from 'react'

const regex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

const SignUp = () => {
  const router = useRouter()

  const [requestSignUp] = useRequestSignUpMutation()
  const [validateEmail] = useValidateEmailMutation()

  const [calendarValue, setCalendarValue] = useState<Dayjs | null>(null)
  const [duplicateEmailIsDone, setDuplicateEmailIsDone] = useState(false)
  const [signUpValues, setSignUpValues] = useState({
    name: '',
    dateOfBirth: '',
    email: '',
    passwordInitial: '',
    passwordConfirm: '',
  })
  const [signUpValuesErrors, setSignUpValuesErrors] = useState({})
  const [signUpResponseMessage, setSignUpResponseMessage] = useState('')

  const handleCalendarValueChange = (newCalendarValue: Dayjs | null) => {
    setCalendarValue(newCalendarValue)
    setSignUpValues({
      ...signUpValues,
      dateOfBirth: newCalendarValue.format('YYYY-MM-DD'),
    })
  }

  const handleSignUpValuesChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setDuplicateEmailIsDone(false)
    }
    setSignUpValues({ ...signUpValues, [name]: value })
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    setSignUpValues({
      ...signUpValues,
      [name]: value.trim().replace(/\s/g, ''),
    })
  }

  const validateSignUp = (signUpValues, requestDuplicateEmail, response) => {
    const errors = {}
    if (requestDuplicateEmail) {
      if (!signUpValues.email) {
        errors.email = '이메일을 입력해주세요!'
      } else if (!regex.test(signUpValues.email)) {
        errors.email = '올바른 이메일 형식이 아닙니다!'
      } else if (response === 200) {
        errors.email = '사용할수있는 이메일입니다!'
      } else if (response === 400) {
        errors.email = '이미 사용중인 이메일입니다!'
      } else if (response === 'failed') {
        errors.email = '이메일 중복검사 요청에 실패했습니다!'
      }
      return errors
    }
    if (!signUpValues.name) {
      errors.name = '이름을 입력해주세요!'
    }
    if (!signUpValues.dateOfBirth) {
      errors.dateOfBirth = '생년월일을 입력해주세요!'
    }
    if (!signUpValues.email) {
      errors.email = '이메일을 입력해주세요!'
    } else if (!regex.test(signUpValues.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다!'
    } else if (!duplicateEmailIsDone) {
      errors.email = '이메일 중복확인을 완료해주세요!'
    }
    if (!signUpValues.passwordInitial) {
      errors.passwordInitial = '비밀번호를 입력해주세요!'
    }
    if (!signUpValues.passwordConfirm) {
      errors.passwordConfirm = '확인을 위해 비밀번호를 다시 입력해주세요!'
    }
    if (
      signUpValues.passwordInitial &&
      signUpValues.passwordConfirm &&
      signUpValues.passwordInitial !== signUpValues.passwordConfirm
    ) {
      errors.passwordConfirm = '비밀번호가 일치하지 않습니다!'
    }
    return errors
  }

  const requestDuplicateEmail = async () => {
    const duplicateValidation = validateSignUp(signUpValues, true)
    if (duplicateValidation.email) {
      setSignUpValuesErrors(validateSignUp(signUpValues, true))
      return
    }
    const email = { email: signUpValues.email }
    try {
      const res = await validateEmail({
        data: email,
      })
      if (res.data.statusCode === 200) {
        setSignUpValuesErrors(validateSignUp(signUpValues, true, 200))
        setDuplicateEmailIsDone(true)
      } else if (res.data.statusCode === 400) {
        setSignUpValuesErrors(validateSignUp(signUpValues, true, 400))
      }
    } catch (e) {
      console.log('e: ', e)
      if (e.response.status === 400) {
        setSignUpValuesErrors(validateSignUp(signUpValues, true, 400))
      } else {
        setSignUpValuesErrors(validateSignUp(signUpValues, true, 'failed'))
      }
    }
  }

  const submitSignUp = async (e) => {
    e.preventDefault()
    const signUpValidation = validateSignUp(signUpValues)
    setSignUpValuesErrors(validateSignUp(signUpValues))
    setSignUpResponseMessage('')

    if (Object.keys(signUpValidation).length !== 0) return
    const signUpData = {
      name: signUpValues.name,
      birth: signUpValues.dateOfBirth,
      email: signUpValues.email,
      password: signUpValues.passwordConfirm,
    }

    try {
      const res = await requestSignUp({
        data: signUpData,
      })
      if (res.data.statusCode === 200) {
        setSignUpResponseMessage(
          '회원가입에 성공했습니다! 로그인 페이지로 이동합니다!',
        )
        setTimeout(() => {
          router.push('/signin')
        }, 1000)
      } else if (res.data.statusCode === 400) {
        setSignUpResponseMessage('회원가입에 실패했습니다!')
      }
    } catch (e) {
      console.log('e: ', e)
      setSignUpResponseMessage('회원가입에 실패했습니다!')
    }
  }

  return (
    <>
      <NavBar link="/" title="회원가입" />
      <Box>
        <Box sx={{ marginBottom: '1.6rem' }}>
          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            이름
          </Typography>
          <TextField
            name="name"
            size="small"
            placeholder="이름을 입력해주세요"
            sx={{ width: '100%' }}
            value={signUpValues.name}
            onChange={handleSignUpValuesChange}
            onBlur={removeInputSpaces}
          />
          <Typography
            sx={{
              visibility: signUpValuesErrors.name ? 'visible' : 'hidden',
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.3rem',
              lineHeight: 'normal',
            }}
          >
            {signUpValuesErrors.name}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '1.6rem' }}>
          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            생년월일
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              inputFormat="YYYY/MM/DD"
              value={calendarValue}
              onChange={handleCalendarValueChange}
              renderInput={(params) => (
                <TextField
                  size="small"
                  placeholder="YYYY/MM/DD"
                  sx={{ width: '100%' }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
          <Typography
            sx={{
              visibility: signUpValuesErrors.dateOfBirth ? 'visible' : 'hidden',
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.3rem',
              lineHeight: 'normal',
            }}
          >
            {signUpValuesErrors.dateOfBirth}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '1.6rem' }}>
          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            이메일
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <TextField
              name="email"
              size="small"
              placeholder="이메일을 입력해주세요"
              sx={{ width: '70%' }}
              value={signUpValues.email}
              onChange={handleSignUpValuesChange}
              onBlur={removeInputSpaces}
            />
            <Button
              variant="contained"
              sx={{
                width: '30%',
                border: '1px solid #4581F8',
                backgroundColor: 'transparent',
                color: '#4581F8',
                boxShadow: 'none',
                fontWeight: '500',
                '&:hover': {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                },
              }}
              onClick={requestDuplicateEmail}
            >
              중복확인
            </Button>
          </Box>
          <Typography
            sx={{
              visibility: signUpValuesErrors.email ? 'visible' : 'hidden',
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.3rem',
              lineHeight: 'normal',
              color:
                signUpValuesErrors.email !== '사용할수있는 이메일입니다!'
                  ? 'tomato'
                  : 'green',
            }}
          >
            {signUpValuesErrors.email}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '1.6rem' }}>
          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            비밀번호
          </Typography>
          <TextField
            name="passwordInitial"
            type="password"
            size="small"
            placeholder="비밀번호를 입력해주세요"
            sx={{ width: '100%' }}
            value={signUpValues.passwordInitial}
            onChange={handleSignUpValuesChange}
            onBlur={removeInputSpaces}
          />
          <Typography
            sx={{
              visibility: signUpValuesErrors.passwordInitial
                ? 'visible'
                : 'hidden',
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.3rem',
              lineHeight: 'normal',
            }}
          >
            {signUpValuesErrors.passwordInitial}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '1.6rem' }}>
          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            비밀번호 확인
          </Typography>
          <TextField
            name="passwordConfirm"
            type="password"
            size="small"
            placeholder="비밀번호를 다시 입력해주세요"
            sx={{ width: '100%' }}
            value={signUpValues.passwordConfirm}
            onChange={handleSignUpValuesChange}
            onBlur={removeInputSpaces}
          />
          <Typography
            sx={{
              visibility: signUpValuesErrors.passwordConfirm
                ? 'visible'
                : 'hidden',
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.3rem',
              lineHeight: 'normal',
            }}
          >
            {signUpValuesErrors.passwordConfirm}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '2rem', textAlign: 'center' }}>
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
            onClick={submitSignUp}
          >
            회원가입
          </Button>
        </Box>
        <Typography
          sx={{
            visibility: signUpResponseMessage !== '' ? 'visible' : 'hidden',
            fontSize: '1.4rem',
            height: '1.6rem',
            paddingTop: '0.5rem',
            lineHeight: 'normal',
            color:
              signUpResponseMessage !==
              '회원가입에 성공했습니다! 설문 페이지로 이동합니다!'
                ? 'tomato'
                : 'green',
          }}
        >
          {signUpResponseMessage}
        </Typography>
      </Box>
    </>
  )
}

export default SignUp
