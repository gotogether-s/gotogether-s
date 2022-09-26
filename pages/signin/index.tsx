import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import style from './SignIn.module.scss'
import NavBar from '../../components/NavBar'
import { useState } from 'react'

const SignIn = () => {
  const initialValue = {
    email: '',
    password: '',
  }
  const [formValues, setFormValues] = useState(initialValue)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value.trim() })
  }

  return (
    <>
      <NavBar link="/" title="로그인" />
      <form>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>이메일</div>
          <TextField
            name="email"
            size="small"
            placeholder="이메일을 입력해주세요"
            value={formValues.email}
            sx={{ width: '100%' }}
            onChange={handleInputChange}
            onBlur={removeInputSpaces}
          />
        </div>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>비밀번호</div>
          <TextField
            name="password"
            size="small"
            placeholder="비밀번호를 입력해주세요"
            value={formValues.password}
            sx={{ width: '100%' }}
            onChange={handleInputChange}
            onBlur={removeInputSpaces}
          />
        </div>
        <div className={style['button-wrapper']}>
          <Button variant="contained" type="submit">
            로그인
          </Button>
        </div>
        <div className={style['signup-text']}>회원가입</div>
      </form>
    </>
  )
}

export default SignIn
