import {
  useGetReservationMutation,
  useRequestLikedItemsMutation,
} from '@api/requestApi'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  Box,
  ListItemAvatar,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateTheNumberOfBooking,
  updateTheNumberOfLikes,
} from '@store/bookingAndLikesNumberSlice'
import Link from 'next/link'
import { useEffect } from 'react'
import style from './User.module.scss'

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
      <div className={style['box-wrapper']}>
        <Link href={myBookingLink}>
          <Box
            className={style['status-box']}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <div>예약한 상품</div>
            <div>{bookingAndLikesNumber.theNumberOfBooking}</div>
          </Box>
        </Link>
        <Link href={favoriteLink}>
          <Box
            className={style['status-box']}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <div>찜한 상품</div>
            <div>{bookingAndLikesNumber.theNumberOfLikes}</div>
          </Box>
        </Link>
      </div>
    </>
  )
}

export default User
