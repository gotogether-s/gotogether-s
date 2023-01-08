import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import payment from '@public/payment.png'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import style from './Payment.module.scss'

const Payment = () => {
  const router = useRouter()

  const [paymentSummary, setPaymentSummary] = useState([
    {
      title: '계좌번호 : ',
      content: '267-910020-36604',
    },
    {
      title: '은행명 : ',
      content: 'KEB하나은행',
    },
    {
      title: '예금주 : ',
      content: '(주)더샤이니',
    },
    {
      title: '입금기한 : ',
      content: '',
    },
  ])

  useEffect(() => {
    dayjs.locale('ko')

    const getPaymentDueDate = dayjs()
      .add(3, 'day')
      .format(`YYYY.MM.DD (ddd) H:mm`)

    const newPaymentSummary = paymentSummary.map((list) => {
      if (list.title === '입금기한 : ') {
        return {
          ...list,
          content: getPaymentDueDate,
        }
      } else {
        return list
      }
    })

    setPaymentSummary(newPaymentSummary)
  }, [])

  return (
    <Box>
      <Box sx={{ textAlign: 'center', margin: '5rem 0 2rem' }}>
        <Image
          src={payment}
          alt="payment icon"
          width="50%"
          height="50%"
          objectFit="contain"
        />
        <Typography
          sx={{
            padding: '1rem 0',
          }}
        >
          무통장입금 계좌번호 안내
        </Typography>
        <Typography>
          고투게더를 이용해주셔서 감사합니다. 무통장 입금을 원하실 경우, 아래
          계좌로 입금해주시면 됩니다.
        </Typography>
      </Box>
      <Box
        sx={{
          border: '1px solid #ddd',
          padding: '2rem 0',
          marginBottom: '2rem',
        }}
      >
        <Box sx={{ width: '80%', margin: '0 auto' }}>
          {paymentSummary.map((list, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'row' }}>
              <Typography sx={{ width: '35%' }}>{list.title}</Typography>
              <Typography>{list.content}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: '100%',
        }}
        onClick={() => router.push('mybooking')}
      >
        예약 확인하기
      </Button>
    </Box>
  )
}

export default Payment
