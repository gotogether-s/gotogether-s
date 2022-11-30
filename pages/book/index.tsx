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
            />
          </div>
          <div className={style['input-wrapper']}>
            <div className={style['label']}>전화번호</div>
            <TextField
              name="phone"
              size="small"
              placeholder="전화번호를 입력해주세요"
              sx={{ width: '100%' }}
            />
          </div>
        </StyledSection>
      </Box>
    </>
  )
}

export default Book