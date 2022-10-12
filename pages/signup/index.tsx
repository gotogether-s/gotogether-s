import axios from 'axios'
import { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { TextField, Button } from '@mui/material'
import { useState } from 'react'
import NavBar from '@components/NavBar'
import style from './SignUp.module.scss'

const regex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

const SignUp = () => {
  const [calendarValue, setCalendarValue] = useState<Dayjs | null>(null)

  const handleCalendarValueChange = (newCalendarValue: Dayjs | null) => {
    setCalendarValue(newCalendarValue)
    setSignUpValues({
      ...signUpValues,
      dateOfBirth: newCalendarValue.format('YYYY/MM/DD'),
    })
  }

  const [signUpValues, setSignUpValues] = useState({
    dateOfBirth: '',
    email: '',
    passwordInitial: '',
    passwordConfirm: '',
  })

  const [duplicateEmailIsDone, setDuplicateEmailIsDone] = useState(false)

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

  const [signUpValuesErrors, setSignUpValuesErrors] = useState({})

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
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/members/validation`,
        email,
      )
      console.log('res: ', res)
      if (res.data.statusCode === 200) {
        setSignUpValuesErrors(validateSignUp(signUpValues, true, 200))
        setDuplicateEmailIsDone(true)
      } else if (res.data.statusCode === 400) {
        setSignUpValuesErrors(validateSignUp(signUpValues, true, 400))
      }
    } catch (e) {
      console.log('e: ', e)
      setSignUpValuesErrors(validateSignUp(signUpValues, true, 'failed'))
    }
  }

  const [signUpResponseMessage, setSignUpResponseMessage] = useState('')

  const requestSignUp = (e) => {
    e.preventDefault()
    const signUpValidation = validateSignUp(signUpValues)

    if (Object.keys(signUpValidation).length !== 0) {
      setSignUpValuesErrors(validateSignUp(signUpValues))
      return
    }
  }

  return (
    <>
      <NavBar link="/" title="회원가입" />
      <form onSubmit={requestSignUp}>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>생년월일</div>
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
          <p
            style={{
              visibility: signUpValuesErrors.dateOfBirth ? 'visible' : 'hidden',
            }}
            className={style['error-message']}
          >
            {signUpValuesErrors.dateOfBirth}
          </p>
        </div>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>이메일</div>
          <div className={style['flex-wrapper']}>
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
              sx={{ width: '30%' }}
              onClick={requestDuplicateEmail}
            >
              중복확인
            </Button>
          </div>
          <p
            style={{
              visibility: signUpValuesErrors.email ? 'visible' : 'hidden',
            }}
            className={
              signUpValuesErrors.email !== '사용할수있는 이메일입니다!'
                ? style['error-message']
                : style['success-message']
            }
          >
            {signUpValuesErrors.email}
          </p>
        </div>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>비밀번호</div>
          <TextField
            name="passwordInitial"
            size="small"
            placeholder="비밀번호를 입력해주세요"
            sx={{ width: '100%' }}
            value={signUpValues.passwordInitial}
            onChange={handleSignUpValuesChange}
            onBlur={removeInputSpaces}
          />
          <p
            style={{
              visibility: signUpValuesErrors.passwordInitial
                ? 'visible'
                : 'hidden',
            }}
            className={style['error-message']}
          >
            {signUpValuesErrors.passwordInitial}
          </p>
        </div>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>비밀번호 확인</div>
          <TextField
            name="passwordConfirm"
            size="small"
            placeholder="비밀번호를 다시 입력해주세요"
            sx={{ width: '100%' }}
            value={signUpValues.passwordConfirm}
            onChange={handleSignUpValuesChange}
            onBlur={removeInputSpaces}
          />
          <p
            style={{
              visibility: signUpValuesErrors.passwordConfirm
                ? 'visible'
                : 'hidden',
            }}
            className={style['error-message']}
          >
            {signUpValuesErrors.passwordConfirm}
          </p>
        </div>
        <div className={style['button-wrapper']}>
          <Button variant="contained" type="submit" sx={{ width: '100%' }}>
            회원가입
          </Button>
        </div>
        <p
          className={
            signUpResponseMessage !== '회원가입을 완료했습니다!'
              ? style['error-message']
              : style['success-message']
          }
          style={{
            visibility: signUpResponseMessage !== '' ? 'visible' : 'hidden',
          }}
        >
          {signUpResponseMessage}
        </p>
      </form>
    </>
  )
}

export default SignUp
