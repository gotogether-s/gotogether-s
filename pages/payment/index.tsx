import HeadInfo from '@components/HeadInfo'
import { Box, Button, Divider, Typography } from '@mui/material'
import en from '@public/locales/en/payment.json'
import ko from '@public/locales/ko/payment.json'
import payment from '@public/payment.png'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Payment = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const [paymentSummary, setPaymentSummary] = useState([
    {
      title: translate['계좌번호'],
      content: '267-910020-36604',
    },
    {
      title: translate['은행명'],
      content: translate['KEB하나은행'],
    },
    {
      title: translate['예금주'],
      content: translate['주더샤이니'],
    },
    {
      title: translate['입금기한'],
      content: '',
    },
  ])

  useEffect(() => {
    dayjs.locale('ko')

    const getPaymentDueDate = dayjs()
      .add(3, 'day')
      .format(`YYYY.MM.DD (ddd) H:mm`)

    const newPaymentSummary = paymentSummary.map((list) => {
      if (list.title === translate['입금기한']) {
        return {
          ...list,
          content: `~ ${getPaymentDueDate}`,
        }
      } else {
        return list
      }
    })

    setPaymentSummary(newPaymentSummary)
  }, [])

  return (
    <Box sx={{ padding: '0 1.6rem' }}>
      <HeadInfo title={translate['페이지 제목']} />
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
            fontSize: '1.8rem',
            fontWeight: 500,
            padding: '1rem 0',
          }}
        >
          {translate['무통장입금 계좌번호 안내']}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.4rem',
            color: '#8D8D8D',
          }}
        >
          {translate['고투게더를 이용해주셔서 감사합니다.']}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.4rem',
            color: '#8D8D8D',
          }}
        >
          {
            translate[
              '예약일로부터 3일 이내에 아래 계좌로 입금해주시면 예약이 완료됩니다.'
            ]
          }
        </Typography>
      </Box>
      <Divider sx={{ margin: '0 -1.6rem' }} />
      <Box sx={{ width: '80%', margin: '0 auto', padding: '2rem 0' }}>
        {paymentSummary.map((list, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '0.5rem',
            }}
          >
            <Typography
              sx={{ fontSize: '1.5rem', fontWeight: 500, width: '35%' }}
            >
              {list.title}
            </Typography>
            <Typography
              sx={{
                fontSize: '1.5rem',
                color:
                  list.title !== translate['입금기한'] ? '#4E4E4E' : '#4581F8',
              }}
            >
              {list.content}
            </Typography>
          </Box>
        ))}
      </Box>
      <Divider sx={{ margin: '0 -1.6rem' }} />
      <Button
        variant="contained"
        sx={{
          width: '100%',
          backgroundColor: '#4581F8',
          boxShadow: 'none',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          fontWeight: '500',
          marginTop: '4rem',
          '&:hover': {
            backgroundColor: '#4581F8',
            boxShadow: 'none',
          },
        }}
        onClick={() => router.push('mybooking')}
      >
        {translate['예약 확인하기']}
      </Button>
    </Box>
  )
}

export default Payment
