import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import payment from '@public/payment.png'
import style from './Payment.module.scss'

const Payment = () => {
  return (
    <>
      <Box>
        <Image
          src={payment}
          alt="payment icon"
          width="50%"
          height="50%"
          objectFit="contain"
        />
        <Typography>무통장입금 계좌번호 안내</Typography>
        <Typography>
          고투게더를 이용해주셔서 감사합니다. 무통장 입금을 원하실 경우, 아래
          계좌로 입금해주시면 됩니다.
        </Typography>
        <Typography>예약번호 </Typography>
      </Box>
      <Box>
        <Typography>계좌번호 :</Typography>
        <Typography>은행명 :</Typography>
        <Typography>예금주 :</Typography>
        <Typography>입금기한 :</Typography>
      </Box>
      <Button variant="contained">예약 확인하기</Button>
    </>
  )
}

export default Payment
