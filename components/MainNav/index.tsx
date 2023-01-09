import SideBar from '@components/SideBar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Typography } from '@mui/material'
import mainLogo from '@public/main_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MainNav = () => {
  const router = useRouter()

  const goToLikesPage = () => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken ? router.push('/likes') : router.push('/signin')
  }

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
      <Link href="/" passHref>
        <a>
          <Image
            src={mainLogo}
            alt="gotogether logo"
            width="120%"
            height="30%"
            objectFit="contain"
            style={{ borderRadius: '0.75rem' }}
          />
        </a>
      </Link>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Box
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <Box onClick={goToLikesPage}>
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
          </Box>
        </Box>
        <Box
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <Box onClick={() => router.push('/product-search')}>
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
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MainNav
