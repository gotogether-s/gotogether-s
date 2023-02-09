import {
  useGetReservationPeopleMutation,
  useGetReservationWithIdMutation,
} from '@api/requestApi'
import HeadInfo from '@components/HeadInfo'
import NavBar from '@components/NavBar'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'
import { Box, Chip, Divider, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import en from '@public/locales/en/bookingDetail.json'
import DayOfTheWeekEnglish from '@public/locales/en/DayOfTheWeek.json'
import productsEnglish from '@public/locales/en/products.json'
import ko from '@public/locales/ko/bookingDetail.json'
import DayOfTheWeekKorean from '@public/locales/ko/DayOfTheWeek.json'
import productsKorean from '@public/locales/ko/products.json'
import { addMyBookingDetail } from '@store/myBookingDetailSlice'
import { addMyBookingPeople } from '@store/myBookingPeopleSlice'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const StyledSection = styled('div')(() => ({
  backgroundColor: '#fff',
  padding: '1.6rem',
  marginBottom: '1.6rem',
}))

const myBookingDetail = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { id } = router.query
  const { locale } = router
  const translate = locale === 'en' ? en : ko
  const translateProducts = locale === 'en' ? productsEnglish : productsKorean
  const translateDayOfTheWeek =
    locale === 'en' ? DayOfTheWeekEnglish : DayOfTheWeekKorean

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
    const formattedReservationDate = reservationDate.trim().replace(/-/g, '/')
    const pricePerEach = (totalPrice / totalReservationPeople).toLocaleString(
      'ko-KR',
    )
    const formattedTotalPrice = totalPrice.toLocaleString('ko-KR')

    const formattedData = {
      ...data,
      bookingDurationDate: bookingDurationDate,
      bookingDurationDay: bookingDurationDay,
      reservationDate: formattedReservationDate,
      pricePerEach: pricePerEach,
      formattedTotalPrice: formattedTotalPrice,
    }

    dispatch(addMyBookingDetail(formattedData))
  }

  const myBookingDetail = useSelector((state) => {
    return state.myBookingDetail
  })

  const {
    airport,
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
      <HeadInfo title={translate['페이지 제목']} />
      <NavBar
        link={'/mybooking'}
        title={translate['예약 내역 상세']}
        marginBottom="0"
      />
      <Box sx={{ backgroundColor: '#F2F4FA' }}>
        {pageIsReady && (
          <>
            <StyledSection>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '2rem',
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: '1.8rem', fontWeight: 500 }}>
                      {translateProducts[productName]}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '1.2rem',
                        marginBottom: '0.2rem',
                        color: '#939393',
                      }}
                    >
                      {translate['예약일']}: {reservationDate} (
                      {translateDayOfTheWeek[reservationDayOfWeek]})
                    </Typography>
                  </Box>
                  <Chip
                    label={translate[status]}
                    sx={{
                      backgroundColor: '#4581F8',
                      padding: '0.5rem 0.6rem',
                      color: '#fff',
                    }}
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
                      gap: '0.75rem',
                      justifyContent: 'space-around',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '1.2rem',
                      }}
                    >
                      {airport}
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
                          {translate['출발']}
                        </Typography>
                        <Typography
                          sx={{ fontSize: '1.3rem', color: '#4581F8' }}
                        >
                          {bookingDurationDate[0]} (
                          {translateDayOfTheWeek[bookingDurationDay[0]]})
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
                          {translate['도착']}
                        </Typography>
                        <Typography
                          sx={{ fontSize: '1.3rem', color: '#4581F8' }}
                        >
                          {bookingDurationDate[1]} (
                          {translateDayOfTheWeek[bookingDurationDay[1]]})
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '1.4rem',
                      }}
                    >
                      {translate['1인']} /{' '}
                      <Box component="span" sx={{ fontWeight: 500 }}>
                        {pricePerEach}
                      </Box>{' '}
                      {translate['원']}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </StyledSection>
            {myBookingPeople.map((list, index) => (
              <StyledSection key={index}>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    {list.role
                      ? translate['예약자 정보 (대표)']
                      : translate['인원'] + ' ' + (index + 1)}
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
                      <Typography sx={{ fontWeight: 500 }}>
                        {translate['이름']}
                      </Typography>
                      <Typography sx={{ color: '#4E4E4E' }}>
                        {bookingClient.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                      <Typography sx={{ fontWeight: 500 }}>
                        {translate['전화번호']}
                      </Typography>
                      <Typography sx={{ color: '#4E4E4E' }}>
                        {bookingClient.phoneNumber}
                      </Typography>
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
                          <Typography sx={{ fontWeight: 500 }}>
                            {translate['이름']}
                          </Typography>
                          <Typography sx={{ color: '#4E4E4E' }}>
                            {list.name}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography sx={{ fontWeight: 500 }}>
                            {translate['전화번호']}
                          </Typography>
                          <Typography sx={{ color: '#4E4E4E' }}>
                            {list.phoneNumber}
                          </Typography>
                        </Box>
                      </Box>
                    </>
                  )}
                </Box>
              </StyledSection>
            ))}
            <StyledSection>
              <Box>
                <Typography sx={{ fontWeight: 600 }}>
                  {translate['최종 요금']}
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
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography>
                      {translate['성인']} x {totalReservationPeople}
                    </Typography>
                    <Typography>
                      {formattedTotalPrice} {translate['원']}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>
                      {translate['합계']}
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }}>
                      {formattedTotalPrice} {translate['원']}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </StyledSection>
            <StyledSection sx={{ marginBottom: 0 }}>
              <Box sx={{ paddingBottom: '5rem' }}>
                <Typography sx={{ fontWeight: 600 }}>
                  {translate['결제 방법']}
                </Typography>
                <Divider sx={{ margin: '1.6rem -1.6rem' }} />
                <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                  <Typography sx={{ fontSize: '1.4rem', color: '#BEBEBE' }}>
                    {translate['입금자명']}
                  </Typography>
                  <Typography sx={{ fontSize: '1.4rem', color: '#BEBEBE' }}>
                    {bookingClient.name}
                  </Typography>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                    <SubdirectoryArrowRightIcon
                      sx={{ fontSize: '1.8rem', color: '#BEBEBE' }}
                    />
                    <Typography sx={{ fontSize: '1.4rem', color: '#BEBEBE' }}>
                      {locale === 'ko'
                        ? reservationDate +
                          ' (' +
                          reservationDayOfWeek +
                          ')' +
                          translate['예약']
                        : translate['예약'] +
                          reservationDate +
                          ' (' +
                          reservationDayOfWeek +
                          ')'}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                    <SubdirectoryArrowRightIcon
                      sx={{ fontSize: '1.8rem', color: '#BEBEBE' }}
                    />
                    <Typography sx={{ fontSize: '1.4rem', color: '#BEBEBE' }}>
                      {translate['입금 대기중']}
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
