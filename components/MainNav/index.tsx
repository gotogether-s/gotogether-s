import SideBar from '@components/SideBar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Typography } from '@mui/material'
import mainLogo from '@public/main_logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const MainNav = () => {
  return (
    <Box
      sx={{
        borderBottom: '1px solid #ddd',
        padding: '1rem 1.6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <SideBar />
      <Link href="/">
        <Image
          src={mainLogo}
          alt="gotogether logo"
          width="120%"
          height="30%"
          objectFit="contain"
          style={{ borderRadius: '0.75rem' }}
        />
      </Link>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Box
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <Link href="/likes">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <FavoriteBorderIcon sx={{ fontSize: 20 }} />
              <Typography sx={{ fontSize: '1.2rem' }}>찜 목록</Typography>
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <Link href="/product-search">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SearchIcon sx={{ fontSize: 25 }} />
              <Typography sx={{ fontSize: '1.2rem' }}>검색</Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default MainNav
