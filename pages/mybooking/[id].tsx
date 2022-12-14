import {
  useGetReservationWithIdMutation,
  useGetReservationPeopleMutation,
} from '@api/requestApi'
import { styled } from '@mui/material/styles'
import { Box, Typography, Chip, Divider } from '@mui/material'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { addMyBookingDetail } from '@store/myBookingDetailSlice'
import { addMyBookingPeople } from '@store/myBookingPeopleSlice'
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
  const [getReservationPeople] = useGetReservationPeopleMutation()

  const [pageIsReady, setPageIsReady] = useState(false)

  const readBookingDetail = async (accessToken) => {
    try {
      const res = await getReservationWithId({
        reservationId: id,
        accessToken: accessToken,
      })
      const { data } = res.data
      formatBookingDetailData(data)
    } catch (e) {
      console.log('e: ', e)
    }
  }

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
    const formattedTotalPrice = totalPrice.toLocaleString('ko-KR')

    const formattedData = {
      ...data,
      bookingDurationDate: bookingDurationDate,
      bookingDurationDay: bookingDurationDay,
      reservationDate: reservationDate,
      pricePerEach: pricePerEach,
      formattedTotalPrice: formattedTotalPrice,
    }

    dispatch(addMyBookingDetail(formattedData))
  }

  const myBookingDetail = useSelector((state) => {
    return state.myBookingDetail
  })

  const {
    bookingDurationDate,
    bookingDurationDay,
    formattedTotalPrice,
    pricePerEach,
    productName,
    reservationDate,
    reservationDayOfWeek,
    status,
    thumbnail,
    totalReservationPeople,
  } = myBookingDetail

  const readBookingPeople = async (accessToken) => {
    try {
      const res = await getReservationPeople({
        reservationId: id,
        accessToken: accessToken,
      })
      const { data } = res.data
      dispatch(addMyBookingPeople(data))
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const myBookingPeople = useSelector((state) => {
    return state.myBookingPeople
  })

  const bookingClient = myBookingPeople.find((list) => list.role === true)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken && id) {
      readBookingDetail(accessToken)
      readBookingPeople(accessToken)
    }
  }, [id])

  useEffect(() => {
    if (
      Object.keys(myBookingDetail).length !== 0 &&
      myBookingPeople.length !== 0
    )
      setPageIsReady(true)
  }, [myBookingDetail, myBookingPeople])

  return (
    <>
      <NavBar link={'/mybooking'} title="?????? ?????? ??????" marginBottom="0" />
      <Box sx={{ backgroundColor: '#F2F4FA' }}>
        {pageIsReady && (
          <>
            <StyledSection>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '2rem',
                  }}
                >
                  <Typography sx={{ fontSize: '1.8rem', fontWeight: 600 }}>
                    {reservationDate} ({reservationDayOfWeek}) ??????
                  </Typography>
                  <Chip
                    label={status}
                    sx={{ backgroundColor: '#4581F8', color: '#fff' }}
                  />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.6rem',
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
                        ?????? {bookingDurationDate[0]} ({bookingDurationDay[0]})
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '1.2rem',
                          marginBottom: '0.2rem',
                        }}
                      >
                        ?????? {bookingDurationDate[1]} ({bookingDurationDay[1]})
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '1.4rem',
                      }}
                    >
                      1??? /{' '}
                      <Box component="span" sx={{ fontWeight: 500 }}>
                        {pricePerEach}
                      </Box>{' '}
                      ???
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </StyledSection>
            {myBookingPeople.map((list, index) => (
              <StyledSection key={index}>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    {list.role ? '????????? ?????? (??????)' : '?????? 2'}
                  </Typography>
                  <Divider sx={{ margin: '1.6rem -1.6rem' }} />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography sx={{ fontWeight: 500 }}>??????</Typography>
                      <Typography>{bookingClient.name}</Typography>
                    </Box>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                      <Typography sx={{ fontWeight: 500 }}>
                        ????????? ??????
                      </Typography>
                      <Typography>{bookingClient.phoneNumber}</Typography>
                    </Box>
                  </Box>
                  {!list.role && (
                    <>
                      <Divider sx={{ margin: '1.6rem -1.6rem' }} />
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography sx={{ fontWeight: 500 }}>??????</Typography>
                          <Typography>{list.name}</Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography sx={{ fontWeight: 500 }}>
                            ????????? ??????
                          </Typography>
                          <Typography>{list.phoneNumber}</Typography>
                        </Box>
                      </Box>
                    </>
                  )}
                </Box>
              </StyledSection>
            ))}
            <StyledSection>
              <Box>
                <Typography sx={{ fontWeight: 600 }}>?????? ??????</Typography>
                <Divider sx={{ margin: '1.6rem -1.6rem' }} />
                <Typography sx={{ marginBottom: '0.5rem' }}>
                  {productName}
                </Typography>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      marginBottom: '0.2rem',
                    }}
                  >
                    ?????? {bookingDurationDate[0]} ({bookingDurationDay[0]})
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      marginBottom: '0.2rem',
                    }}
                  >
                    ?????? {bookingDurationDate[1]} ({bookingDurationDay[1]})
                  </Typography>
                </Box>
                <Divider sx={{ margin: '1.6rem -1.6rem' }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>?????? x {totalReservationPeople}</Typography>
                  <Typography>{formattedTotalPrice} ???</Typography>
                </Box>
                <Divider sx={{ margin: '1.6rem -1.6rem' }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontWeight: 600 }}>??????</Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {formattedTotalPrice} ???
                  </Typography>
                </Box>
              </Box>
            </StyledSection>
            <StyledSection sx={{ marginBottom: 0 }}>
              <Box sx={{ paddingBottom: '5rem' }}>
                <Typography sx={{ fontWeight: 600 }}>?????? ??????</Typography>
                <Divider sx={{ margin: '1.6rem -1.6rem' }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>????????????</Typography>
                  <Typography>{bookingClient.name}</Typography>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                    <SubdirectoryArrowRightIcon
                      sx={{ fontSize: '1.8rem', color: '#BEBEBE' }}
                    />
                    <Typography sx={{ fontSize: '1.4rem', color: '#BEBEBE' }}>
                      {reservationDate} ({reservationDayOfWeek}) ??????
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                    <SubdirectoryArrowRightIcon
                      sx={{ fontSize: '1.8rem', color: '#BEBEBE' }}
                    />
                    <Typography sx={{ fontSize: '1.4rem', color: '#BEBEBE' }}>
                      ?????? ?????????
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </StyledSection>
          </>
        )}
      </Box>
    </>
  )
}

export default myBookingDetail
