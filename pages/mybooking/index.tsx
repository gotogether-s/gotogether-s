import { styled } from '@mui/material/styles'
import { Box, Select, MenuItem, Typography, Chip, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { useGetReservationMutation } from '@api/requestApi'
import { useSelector, useDispatch } from 'react-redux'
import {
  addMyBookingList,
  removeMyBookingList,
} from '@store/myBookingListsSlice'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@components/NavBar'
import style from './MyBooking.module.scss'

const reservationDurationOptions = [
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
  {
    label: '전체',
    value: 'all',
  },
]

const MyBooking = () => {
  const dispatch = useDispatch()

  const [getReservation] = useGetReservationMutation()

  const StyledSection = styled('div')(() => ({
    backgroundColor: '#fff',
    padding: '1.6rem',
    marginBottom: '1.6rem',
  }))

  const readMyBookingInfo = async () => {
    const accessToken = localStorage.getItem('accessToken')
    try {
      const res = await getReservation({
        accessToken: accessToken,
      })
      console.log('res: ', res)
      const { data } = res.data
      dispatch(addMyBookingList(data))
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const myBookingLists = useSelector((state) => {
    return state.myBookingLists
  })

  const [reservationDuration, setReservationDuration] = useState(
    reservationDurationOptions[0].value,
  )

  const handleChange = (e) => {
    setReservationDuration(e.target.value)
  }

  useEffect(() => {
    readMyBookingInfo()
  }, [])

  return (
    <>
      <NavBar link={`/`} title="예약 확인 및 취소" marginBottom="0" />
      <Box sx={{ backgroundColor: '#F2F4FA' }}>
        <StyledSection>
          <Box>
            <Select
              fullWidth
              value={reservationDuration}
              onChange={handleChange}
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
                  <Typography>{list.reservationDate} 예약</Typography>
                  <Chip
                    label="예약 완료"
                    sx={{ backgroundColor: '#4581F8', color: '#fff' }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2rem',
                }}
              >
                <Image
                  src={list.thumbnail}
                  alt={list.productName}
                  width="120%"
                  height="120%"
                  objectFit="contain"
                  style={{ borderRadius: '0.75rem' }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.6rem',
                  }}
                >
                  <Box>
                    <Typography>{list.productName}</Typography>
                    <Typography>{list.airport}</Typography>
                    <Typography>{list.duration}</Typography>
                  </Box>
                  <Link href="/">상세보기</Link>
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
                <Button variant="outlined" size="large" fullWidth>
                  전화걸기
                </Button>
                <Button variant="outlined" size="large" fullWidth>
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
