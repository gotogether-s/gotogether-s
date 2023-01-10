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
import {
  updateTheNumberOfBooking,
  updateTheNumberOfLikes,
} from '@store/bookingAndLikesNumberSlice'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const User = (props) => {
  const {
    myInfoLink,
    backgroundColor,
    primary,
    secondary,
    myBookingLink,
    favoriteLink,
  } = props

  const dispatch = useDispatch()

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

  return (
    <>
      <Link href={myInfoLink}>
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
        <Link href={myBookingLink}>
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
          >
            <Typography sx={{ fontSize: '1.4rem' }}>예약한 상품</Typography>
            <Typography sx={{ fontSize: '2rem' }}>
              {isLogin ? bookingAndLikesNumber.theNumberOfBooking : '-'}
            </Typography>
          </Box>
        </Link>
        <Box sx={{ borderRight: '1px solid #fff', width: '0.1rem' }}></Box>
        <Link href={favoriteLink}>
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
          >
            <Typography sx={{ fontSize: '1.4rem' }}>찜한 상품</Typography>
            <Typography sx={{ fontSize: '2rem' }}>
              {isLogin ? bookingAndLikesNumber.theNumberOfLikes : '-'}
            </Typography>
          </Box>
        </Link>
      </Box>
    </>
  )
}

export default User
