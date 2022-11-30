import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import NavBar from '@components/NavBar'
import style from './Book.module.scss'

const StyledSection = styled('div')(() => ({
  backgroundColor: '#fff',
  padding: '1.6rem',
  marginBottom: '1.6rem',
}))

const Book = () => {
  const getReservationDetail = useSelector((state) => {
    return state.reservationDetail
  })

  const [reservationInfo, setReservationInfo] = useState({
    name: '',
    phone: '',
  })

  const handleReservationInfoChange = (e) => {
    const { name, value } = e.target
    setReservationInfo({ ...reservationInfo, [name]: value })
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    setReservationInfo({
      ...reservationInfo,
      [name]: value.trim().replace(/\s/g, ''),
    })
  }

  return (
    <>
      <NavBar link="/" title="예약" marginBottom="0" />
      <Box sx={{ backgroundColor: '#F2F4FA' }}>
        <StyledSection>
          <Card sx={{ display: 'flex', borderRadius: 0, boxShadow: 'none' }}>
            <CardMedia
              component="img"
              sx={{ width: 120, borderRadius: '0.8rem' }}
              image={getReservationDetail.thumbnail}
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0 1.6rem',
              }}
            >
              <Box>
                <Typography>{getReservationDetail.productName}</Typography>
                <Typography>{getReservationDetail.airport}</Typography>
                <Typography>10/18 (화)</Typography>
              </Box>
              <Typography>
                1인 / {getReservationDetail.basicPrice.toLocaleString('ko-KR')}{' '}
                원
              </Typography>
            </CardContent>
          </Card>
        </StyledSection>
        <StyledSection>
          <Typography>예약자 정보 (대표)</Typography>
          <div className={style['input-wrapper']}>
            <div className={style['label']}>이름</div>
            <TextField
              name="name"
              size="small"
              placeholder="이름을 입력해주세요"
              sx={{ width: '100%' }}
              value={reservationInfo.name}
              onChange={handleReservationInfoChange}
              onBlur={removeInputSpaces}
            />
          </div>
          <div className={style['input-wrapper']}>
            <div className={style['label']}>전화번호</div>
            <TextField
              name="phone"
              size="small"
              placeholder="전화번호를 입력해주세요"
              sx={{ width: '100%' }}
              value={reservationInfo.phone}
              onChange={handleReservationInfoChange}
              onBlur={removeInputSpaces}
            />
          </div>
        </StyledSection>
      </Box>
    </>
  )
}

export default Book
