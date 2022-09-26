import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import style from './SignIn.module.scss'
import NavBar from '../../components/NavBar'

const SignIn = () => {
  return (
    <>
      <NavBar link="/" title="로그인" />
      <form>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>이메일</div>
          <TextField
            placeholder="이메일을 입력해주세요"
            size="small"
            sx={{ width: '100%' }}
          />
        </div>
        <div className={style['input-wrapper']}>
          <div className={style['label']}>비밀번호</div>
          <TextField
            placeholder="비밀번호를 입력해주세요"
            size="small"
            sx={{ width: '100%' }}
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
