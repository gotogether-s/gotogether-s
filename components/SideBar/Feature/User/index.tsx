import {
  useGetReservationMutation,
  useRequestLikedItemsMutation,
} from '@api/requestApi'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import en from '@public/locales/en/sideBar.json'
import ko from '@public/locales/ko/sideBar.json'
import {
  updateTheNumberOfBooking,
  updateTheNumberOfLikes,
} from '@store/bookingAndLikesNumberSlice'
import { close } from '@store/sideBarStatusSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const User = (props) => {
  const {
    myAccountLink,
    backgroundColor,
    primary,
    secondary,
    myBookingLink,
    favoriteLink,
  } = props

  const dispatch = useDispatch()
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const [getReservation] = useGetReservationMutation()
  const [requestLikedItems] = useRequestLikedItemsMutation()

  const bookingAndLikesNumber = useSelector((state) => {
    return state.bookingAndLikesNumber
  })

  const sideBarStatus = useSelector((state) => {
    return state.sideBarStatus
  })

  const readMyBookingInfo = async (accessToken) => {
    try {
      const res = await getReservation({
        accessToken: accessToken,
      })
      const { data } = res.data
      dispatch(updateTheNumberOfBooking(data.length))
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const getLikedItems = async (accessToken) => {
    try {
      const res = await requestLikedItems({
        accessToken: accessToken,
      })
      const { data } = res.data
      dispatch(updateTheNumberOfLikes(data.length))
    } catch (e) {
      console.log('e: ', e)
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken && sideBarStatus.sideBarOpen) {
      readMyBookingInfo(accessToken)
      getLikedItems(accessToken)
    }
  }, [sideBarStatus])

  const isLogin = useSelector((state) => {
    return state.isLogin.isLogin
  })

  const goToMyBooking = () => {
    router.push(`${myBookingLink}`)
    dispatch(close())
  }

  const goToLikes = () => {
    router.push(`${favoriteLink}`)
    dispatch(close())
  }

  return (
    <>
      <Link href={myAccountLink}>
        <List
          sx={{
            padding: '1.6rem 0',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                sx={{
                  width: '5rem',
                  height: '5rem',
                  marginRight: '2rem',
                  backgroundColor: `${backgroundColor}`,
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography style={{ fontSize: '1.8rem' }}>
                  {primary}
                </Typography>
              }
              secondary={
                <Typography style={{ fontSize: '1.4rem' }}>
                  {secondary}
                </Typography>
              }
            />
            <ArrowForwardIosIcon sx={{ fontSize: '1.6rem' }} />
          </ListItem>
        </List>
      </Link>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            backgroundColor: '#F2F4FA',
            width: '50%',
            height: '10rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={goToMyBooking}
        >
          <Typography sx={{ fontSize: '1.4rem' }}>
            {translate['예약한 상품']}
          </Typography>
          <Typography sx={{ fontSize: '2rem' }}>
            {isLogin ? bookingAndLikesNumber.theNumberOfBooking : '-'}
          </Typography>
        </Box>
        <Box sx={{ borderRight: '1px solid #fff', width: '0.1rem' }}></Box>
        <Box
          sx={{
            backgroundColor: '#F2F4FA',
            width: '50%',
            height: '10rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={goToLikes}
        >
          <Typography sx={{ fontSize: '1.4rem' }}>
            {translate['찜한 상품']}
          </Typography>
          <Typography sx={{ fontSize: '2rem' }}>
            {isLogin ? bookingAndLikesNumber.theNumberOfLikes : '-'}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default User
