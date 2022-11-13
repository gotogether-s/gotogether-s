import { TextField } from '@mui/material'
import style from './NewPassword.module.scss'

const NewPassword = () => {
  return (
    <>
      <p>새로운 비밀번호를 입력해주세요.</p>
      <div className={style['input-wrapper']}>
        <div className={style['label']}>새로운 비밀번호</div>
        <TextField
          name="password"
          size="small"
          placeholder="새로운 비밀번호를 입력해주세요"
          sx={{ width: '100%' }}
        />
      </div>
      <div className={style['input-wrapper']}>
        <div className={style['label']}>새로운 비밀번호 확인</div>
        <TextField
          name="passwordConfirm"
          size="small"
          placeholder="새로운 비밀번호를 다시 입력해주세요"
          sx={{ width: '100%' }}
        />
      </div>
    </>
  )
}

export default NewPassword
