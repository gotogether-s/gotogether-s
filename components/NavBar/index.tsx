import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const NavBar = ({ link, title, marginBottom }) => {
  const router = useRouter()

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
      style={{ marginBottom: marginBottom ? marginBottom : '3rem' }}
    >
      <ArrowBackIosNewIcon
        sx={{ position: 'absolute', '&:hover': { cursor: 'pointer' } }}
        onClick={() => {
          router.push(`${link}`)
        }}
      />
      <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>{title}</Typography>
    </Box>
  )
}

export default NavBar
