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
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(dayjs())

  const handleDobChange = (newValue: Dayjs | null) => {
    setDateOfBirth(newValue)
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
              value={dateOfBirth}
              onChange={handleDobChange}
              renderInput={(params) => (
                <TextField size="small" sx={{ width: '100%' }} {...params} />
              )}
            />
          </LocalizationProvider>
        </div>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>이메일</div>
          <TextField
            name="email"
            size="small"
            placeholder="이메일을 입력해주세요"
            sx={{ width: '100%' }}
          />
        </div>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>비밀번호</div>
          <TextField
            name="password"
            size="small"
            placeholder="비밀번호를 입력해주세요"
            sx={{ width: '100%' }}
          />
        </div>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>비밀번호 확인</div>
          <TextField
            name="password"
            size="small"
            placeholder="비밀번호를 다시 입력해주세요"
            sx={{ width: '100%' }}
          />
        </div>
        <div className={style['button-wrapper']}>
          <Button variant="contained" type="submit">
            회원가입
          </Button>
        </div>
      </form>
    </>
  )
}

export default SignUp
