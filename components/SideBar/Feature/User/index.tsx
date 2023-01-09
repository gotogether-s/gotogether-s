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
  const { myInfoLink, primary, secondary, myBookingLink, favoriteLink } = props

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

  return (
    <>
      <Link href={myInfoLink}>
        <List
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
            <ArrowForwardIosIcon />
          </ListItem>
        </List>
      </Link>
      <Box sx={{ display: 'flex' }}>
        <Link href={myBookingLink}>
          <Box
            sx={{
              border: '1px solid #ddd',
              width: '50%',
              height: '10rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <Typography>예약한 상품</Typography>
            <Typography>{bookingAndLikesNumber.theNumberOfBooking}</Typography>
          </Box>
        </Link>
        <Link href={favoriteLink}>
          <Box
            sx={{
              border: '1px solid #ddd',
              width: '50%',
              height: '10rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <Typography>찜한 상품</Typography>
            <Typography>{bookingAndLikesNumber.theNumberOfLikes}</Typography>
          </Box>
        </Link>
      </Box>
    </>
  )
}

export default User
