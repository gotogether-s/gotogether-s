import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Box, Typography } from '@mui/material'
import { close } from '@store/sideBarStatusSlice'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

const NavBar = ({ link, title, marginBottom }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const clickArrowBack = () => {
    dispatch(close())
    router.push(`${link}`)
  }

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
      style={{ marginBottom: marginBottom ? marginBottom : '2rem' }}
    >
      <ArrowBackIosNewIcon
        sx={{ position: 'absolute', '&:hover': { cursor: 'pointer' } }}
        onClick={clickArrowBack}
      />
      <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>{title}</Typography>
    </Box>
  )
}

export default NavBar
