import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import Button from '@mui/material/Button'
import NavBar from '../../components/NavBar'
import style from './SignUp.module.scss'

const SignUp = () => {
  const [calendarValue, setCalendarValue] = useState<Dayjs | null>(dayjs())

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

  const handleSignUpValuesChange = (e) => {
    const { name, value } = e.target
    setSignUpValues({ ...signUpValues, [name]: value })
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    setSignUpValues({
      ...signUpValues,
      [name]: value.trim().replace(/\s/g, ''),
    })
  }

  return (
    <>
      <NavBar link="/" title="회원가입" />
      <form>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>생년월일</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              inputFormat="YYYY/MM/DD"
              value={calendarValue}
              onChange={handleCalendarValueChange}
              renderInput={(params) => (
                <TextField size="small" sx={{ width: '100%' }} {...params} />
              )}
            />
          </LocalizationProvider>
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
            <Button variant="contained" sx={{ width: '30%' }}>
              중복확인
            </Button>
          </div>
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
        </div>
        <div className={style['button-wrapper']}>
          <Button variant="contained" type="submit" sx={{ width: '100%' }}>
            회원가입
          </Button>
        </div>
      </form>
    </>
  )
}

export default SignUp
