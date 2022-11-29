import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
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
      </Box>
    </>
  )
}

export default Book
