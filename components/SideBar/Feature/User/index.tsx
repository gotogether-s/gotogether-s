import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  Box,
  ListItemAvatar,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import Link from 'next/link'
import style from './User.module.scss'

const User = (props) => {
  const { myInfoLink, primary, secondary, myBookingLink, favoriteLink } = props
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
            <div>주문(예약)건</div>
            <div>-</div>
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
            <div>찜하기</div>
            <div>-</div>
          </Box>
        </Link>
      </div>
    </>
  )
}

export default User
