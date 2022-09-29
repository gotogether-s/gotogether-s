import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import style from './SignIn.module.scss'
import NavBar from '../../components/NavBar'
import Link from 'next/link'
import { useState } from 'react'

const SignIn = () => {
  const initialValue = {
    email: '',
    password: '',
  }
  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value.trim() })
  }

  const validateSignIn = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = '이메일을 입력해주세요!'
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요!'
    }
    return errors
  }

  const RequestSignIn = (e) => {
    e.preventDefault()
    setFormErrors(validateSignIn(formValues))
  }

  return (
    <>
      <NavBar link="/" title="로그인" />
      <form onSubmit={RequestSignIn}>
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
          <p
            style={{ visibility: formErrors.email ? 'visible' : 'hidden' }}
            className={style['error-message']}
          >
            {formErrors.email}
          </p>
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
          <p
            style={{ visibility: formErrors.password ? 'visible' : 'hidden' }}
            className={style['error-message']}
          >
            {formErrors.password}
          </p>
        </div>
        <div className={style['button-wrapper']}>
          <Button variant="contained" type="submit" sx={{ width: '100%' }}>
            로그인
          </Button>
        </div>
        <div className={style['signup-link-wrapper']}>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </div>
      </form>
    </>
  )
}

export default SignIn
