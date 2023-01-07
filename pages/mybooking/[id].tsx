import { useGetReservationWithIdMutation } from '@api/requestApi'
import { styled } from '@mui/material/styles'
import { Box, Typography, Chip } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { addMyBookingDetail } from '@store/myBookingDetailSlice'
import { useState, useEffect } from 'react'
import NavBar from '@components/NavBar'

const StyledSection = styled('div')(() => ({
  backgroundColor: '#fff',
  padding: '1.6rem',
  marginBottom: '1.6rem',
}))

const myBookingDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()

  const [getReservationWithId] = useGetReservationWithIdMutation()
  const [dataIsReady, setDataIsReady] = useState(false)

  const readBookingDetail = async (accessToken) => {
    try {
      const res = await getReservationWithId({
        id: id,
        accessToken: accessToken,
      })
      console.log('res: ', res)
      const { data } = res.data
      formatBookingDetailData(data)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken && id) readBookingDetail(accessToken)
  }, [id])

  const formatBookingDetailData = (data) => {
    const { duration, reservationDate, totalPrice, totalReservationPeople } =
      data

    const bookingDurationDate = duration.trim().replace(/\s/g, '').split('~')
    const getDayName = (dateStr) => {
      const date = new Date(dateStr)
      return date.toLocaleDateString('ko-KR', { weekday: 'long' })
    }
    const bookingDurationDay = bookingDurationDate.map((date) =>
      getDayName(date).charAt(0),
    )
    reservationDate.trim().replace(/-/g, '/')
    const pricePerEach = (totalPrice / totalReservationPeople).toLocaleString(
      'ko-KR',
    )

    const formattedData = {
      ...data,
      bookingDurationDate: bookingDurationDate,
      bookingDurationDay: bookingDurationDay,
      reservationDate: reservationDate,
      pricePerEach: pricePerEach,
    }

    dispatch(addMyBookingDetail(formattedData))
    setDataIsReady(true)
  }

  const myBookingDetail = useSelector((state) => {
    return state.myBookingDetail
  })

  const {
    bookingDurationDate,
    bookingDurationDay,
    pricePerEach,
    productName,
    reservationDate,
    reservationDayOfWeek,
    reservation_id,
    status,
    thumbnail,
  } = myBookingDetail

  return (
    <>
      <NavBar link={'/mybooking'} title="예약 내역 상세" marginBottom="0" />
      {dataIsReady && (
        <Box sx={{ backgroundColor: '#F2F4FA' }}>
          <StyledSection>
            <Box>
              <Box sx={{ marginBottom: '2rem' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography sx={{ fontSize: '1.8rem', fontWeight: 500 }}>
                    {reservationDate} ({reservationDayOfWeek}) 예약
                  </Typography>
                  <Chip
                    label={status}
                    sx={{ backgroundColor: '#4581F8', color: '#fff' }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.6rem',
                  marginBottom: '2rem',
                }}
              >
                <Box
                  sx={{
                    width: '40%',
                  }}
                >
                  <Image
                    src={thumbnail}
                    alt={productName}
                    width="120%"
                    height="120%"
                    objectFit="contain"
                    style={{ borderRadius: '0.75rem' }}
                  />
                </Box>
                <Box
                  sx={{
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.6rem',
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: '500' }}>
                      {productName}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '1.2rem',
                        marginBottom: '0.2rem',
                      }}
                    >
                      출발 {bookingDurationDate[0]} ({bookingDurationDay[0]})
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '1.2rem',
                        marginBottom: '0.2rem',
                      }}
                    >
                      도착 {bookingDurationDate[1]} ({bookingDurationDay[1]})
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '1.4rem',
                    }}
                  >
                    1인 /{' '}
                    <Box component="span" sx={{ fontWeight: 500 }}>
                      {pricePerEach}
                    </Box>{' '}
                    원
                  </Typography>
                </Box>
              </Box>
            </Box>
          </StyledSection>
        </Box>
      )}
    </>
  )
}

export default myBookingDetail
