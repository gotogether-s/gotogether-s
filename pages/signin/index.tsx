import { TextField, Button } from '@mui/material'
import { useState } from 'react'
import Link from 'next/link'
import NavBar from 'components/NavBar'
import style from './SignIn.module.scss'

const regex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

const SignIn = () => {
  const [signInValues, setSignInValues] = useState({
    email: '',
    password: '',
  })
  const [signInValuesErrors, setSignInValuesErrors] = useState({})

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
    } else if (!regex.test(signInValues.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다!'
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요!'
    }
    return errors
  }

  const requestSignIn = (e) => {
    e.preventDefault()
    setSignInValuesErrors(validateSignIn(signInValues))
  }

  return (
    <>
      <NavBar link="/" title="로그인" />
      <form onSubmit={requestSignIn}>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>이메일</div>
          <TextField
            name="email"
            size="small"
            placeholder="이메일을 입력해주세요"
            value={signInValues.email}
            sx={{ width: '100%' }}
            onChange={handleSignInValuesChange}
            onBlur={removeInputSpaces}
          />
          <p
            style={{
              visibility: signInValuesErrors.email ? 'visible' : 'hidden',
            }}
            className={style['error-message']}
          >
            {signInValuesErrors.email}
          </p>
        </div>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>비밀번호</div>
          <TextField
            name="password"
            size="small"
            placeholder="비밀번호를 입력해주세요"
            value={signInValues.password}
            sx={{ width: '100%' }}
            onChange={handleSignInValuesChange}
            onBlur={removeInputSpaces}
          />
          <p
            style={{
              visibility: signInValuesErrors.password ? 'visible' : 'hidden',
            }}
            className={style['error-message']}
          >
            {signInValuesErrors.password}
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
