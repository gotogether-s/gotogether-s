import { styled } from '@mui/material/styles'
import { Box, Select, MenuItem, Typography, Chip, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import {
  useGetReservationMutation,
  useGetReservationWithDurationMutation,
  useDeleteReservationMutation,
} from '@api/requestApi'
import { useSelector, useDispatch } from 'react-redux'
import {
  addMyBookingList,
  removeMyBookingList,
} from '@store/myBookingListsSlice'
import { useRouter } from 'next/router'
import Image from 'next/image'
import NavBar from '@components/NavBar'
import style from './MyBooking.module.scss'

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

  const StyledSection = styled('div')(() => ({
    backgroundColor: '#fff',
    padding: '1.6rem',
    marginBottom: '1.6rem',
  }))

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

  const [reservationDuration, setReservationDuration] = useState(
    reservationDurationOptions[0].value,
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

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && readMyBookingInfo(accessToken)
  }, [])

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
        <StyledSection sx={{ marginBottom: 0 }}>
          {myBookingLists.map((list, index) => (
            <Box
              key={index}
              sx={{
                padding: '2.5rem 0',
                borderBottom:
                  myBookingLists.length - 1 !== index
                    ? '0.1rem solid #DDD'
                    : 'none',
              }}
            >
              <Box sx={{ marginBottom: '2rem' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography sx={{ fontSize: '1.8rem', fontWeight: 500 }}>
                    {list.reservationDate.trim().replace(/-/g, '/')} (
                    {list.reservationDayOfWeek}) 예약
                  </Typography>
                  <Chip
                    label="예약 완료"
                    sx={{ backgroundColor: '#4581F8', color: '#fff' }}
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
                    gap: '1.6rem',
                  }}
                >
                  <Box>
                    <Typography>{productName[index]}</Typography>
                    <Typography
                      sx={{
                        fontSize: '1.2rem',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {list.airport}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '1.2rem',
                        marginBottom: '0.2rem',
                      }}
                    >
                      출발 {reservationDate[index][0]} (
                      {reservationDay[index][0]})
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '1.2rem',
                      }}
                    >
                      도착 {reservationDate[index][1]} (
                      {reservationDay[index][1]})
                    </Typography>
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
                  onClick={() => goToMyBookingDetailPage(list.reservation_id)}
                >
                  상세보기
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  onClick={() => cancelReservation(list.reservation_id, index)}
                >
                  예약 취소
                </Button>
              </Box>
            </Box>
          ))}
        </StyledSection>
      </Box>
    </>
  )
}

export default MyBooking
