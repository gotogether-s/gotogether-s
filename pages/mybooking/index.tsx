import {
  useDeleteReservationMutation,
  useGetReservationMutation,
  useGetReservationWithDurationMutation,
} from '@api/requestApi'
import NavBar from '@components/NavBar'
import {
  Box,
  Button,
  Chip,
  Divider,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  addMyBookingList,
  removeMyBookingList,
} from '@store/myBookingListsSlice'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const StyledSection = styled('div')(() => ({
  backgroundColor: '#fff',
  padding: '1.6rem',
  marginBottom: '1.6rem',
}))

const reservationDurationOptions = [
  {
    label: '전체',
    value: 'all',
  },
  {
    label: '최근 3개월',
    value: '90',
  },
  {
    label: '최근 6개월',
    value: '180',
  },
  {
    label: '최근 1년',
    value: '365',
  },
]

const MyBooking = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [getReservation] = useGetReservationMutation()
  const [getReservationWithDuration] = useGetReservationWithDurationMutation()
  const [deleteReservation] = useDeleteReservationMutation()

  const [reservationDuration, setReservationDuration] = useState(
    reservationDurationOptions[0].value,
  )

  const readMyBookingInfo = async (accessToken) => {
    try {
      const res = await getReservation({
        accessToken: accessToken,
      })
      const { data } = res.data
      dispatch(addMyBookingList(data))
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const myBookingLists = useSelector((state) => {
    return state.myBookingLists
  })

  const productName = myBookingLists.map((myBookingList) =>
    myBookingList.productName.trim().replace(/-|_/g, ' '),
  )

  const reservationDate = myBookingLists.map((myBookingList) =>
    myBookingList.duration.trim().replace(/\s/g, '').split('~'),
  )

  const getDayName = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ko-KR', { weekday: 'long' })
  }

  const reservationDay = reservationDate.map((dates) =>
    dates.map((date) => getDayName(date).charAt(0)),
  )

  const changeReservationDuration = async (e) => {
    setReservationDuration(e.target.value)
    try {
      const accessToken = localStorage.getItem('accessToken')
      const res = await getReservationWithDuration({
        duration: e.target.value,
        accessToken: accessToken,
      })
      const { data } = res.data
      dispatch(addMyBookingList(data))
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const cancelReservation = async (reservation_id, index) => {
    const data = {
      reservation_id: reservation_id,
    }
    const accessToken = localStorage.getItem('accessToken')
    try {
      const res = await deleteReservation({
        data: data,
        accessToken: accessToken,
      })
      dispatch(removeMyBookingList(index))
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const goToMyBookingDetailPage = (reservation_id) => {
    router.push(`mybooking/${reservation_id}`)
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && readMyBookingInfo(accessToken)
  }, [])

  return (
    <>
      <NavBar link={`/`} title="예약 확인 및 취소" marginBottom="0" />
      <Box sx={{ backgroundColor: '#F2F4FA' }}>
        <StyledSection>
          <Box>
            <Select
              fullWidth
              size="small"
              value={reservationDuration}
              onChange={changeReservationDuration}
              sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 } }}
            >
              {reservationDurationOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </StyledSection>
        {myBookingLists.length ? (
          <StyledSection sx={{ marginBottom: 0 }}>
            {myBookingLists.map((list, index) => (
              <Box key={index}>
                <Box
                  key={index}
                  sx={{
                    padding: '1.6rem 0',
                  }}
                >
                  <Box sx={{ marginBottom: '2rem' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: '1.8rem', fontWeight: 500 }}
                        >
                          {productName[index]}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '1.2rem',
                            marginBottom: '0.2rem',
                            color: '#939393',
                          }}
                        >
                          예약일:{' '}
                          {list.reservationDate.trim().replace(/-/g, '/')} (
                          {list.reservationDayOfWeek})
                        </Typography>
                      </Box>
                      <Chip
                        label="예약 완료"
                        sx={{
                          backgroundColor: '#4581F8',
                          padding: '0.5rem 0.6rem',
                          color: '#fff',
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.6rem',
                      marginBottom: '2rem',
                    }}
                  >
                    <Box
                      sx={{
                        width: '30%',
                      }}
                    >
                      <Image
                        src={list.thumbnail}
                        alt={productName[index]}
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
                        gap: '0.75rem',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '1.2rem',
                        }}
                      >
                        {list.airport}
                      </Typography>
                      <Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '0.5rem',
                          }}
                        >
                          <Typography
                            sx={{ fontSize: '1.3rem', fontWeight: 500 }}
                          >
                            출발
                          </Typography>
                          <Typography
                            sx={{ fontSize: '1.3rem', color: '#4581F8' }}
                          >
                            {reservationDate[index][0]} (
                            {reservationDay[index][0]})
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '0.5rem',
                          }}
                        >
                          <Typography
                            sx={{ fontSize: '1.3rem', fontWeight: 500 }}
                          >
                            도착
                          </Typography>
                          <Typography
                            sx={{ fontSize: '1.3rem', color: '#4581F8' }}
                          >
                            {reservationDate[index][1]} (
                            {reservationDay[index][1]})
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      onClick={() =>
                        goToMyBookingDetailPage(list.reservation_id)
                      }
                      sx={{
                        width: '100%',
                        backgroundColor: '#4581F8',
                        boxShadow: 'none',
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                        fontWeight: '500',
                        '&:hover': {
                          backgroundColor: '#4581F8',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      상세보기
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      onClick={() =>
                        cancelReservation(list.reservation_id, index)
                      }
                      sx={{
                        width: '100%',
                        border: '1px solid #4581F8',
                        color: '#4581F8',
                        boxShadow: 'none',
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                        fontWeight: '500',
                        '&:hover': {
                          backgroundColor: '#fff',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      예약 취소
                    </Button>
                  </Box>
                </Box>
                {myBookingLists.length - 1 !== index && (
                  <Divider sx={{ margin: '1.6rem -1.6rem' }} />
                )}
              </Box>
            ))}
          </StyledSection>
        ) : (
          <StyledSection sx={{ marginBottom: 0 }}>
            <Box sx={{ textAlign: 'center', paddingTop: '5rem' }}>
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: '500',
                  color: '#4581F8',
                  marginBottom: '1rem',
                }}
              >
                아직 예약한 상품이 없습니다
              </Typography>
              <Typography
                sx={{
                  textAlgin: 'center',
                  fontSize: '1.4rem',
                  color: '#8D8D8D',
                  marginBottom: '5rem',
                }}
              >
                홈페이지로 돌아가서 더 많은 여행 상품을 찾아보세요.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  backgroundColor: '#4581F8',
                  boxShadow: 'none',
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                  fontWeight: '500',
                  '&:hover': {
                    backgroundColor: '#4581F8',
                    boxShadow: 'none',
                  },
                }}
                onClick={() => router.push('/')}
              >
                홈으로
              </Button>
            </Box>
          </StyledSection>
        )}
      </Box>
    </>
  )
}

export default MyBooking
