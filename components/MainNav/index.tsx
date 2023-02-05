import ModalWindow from '@components/ModalWindow'
import SideBar from '@components/SideBar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LanguageIcon from '@mui/icons-material/Language'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Typography } from '@mui/material'
import canada from '@public/canada.png'
import korea from '@public/korea.png'
import en from '@public/locales/en/mainNav.json'
import ko from '@public/locales/ko/mainNav.json'
import mainLogo from '@public/main_logo.svg'
import { openModal } from '@store/displayModalWindowSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

const MainNav = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const languageOptions = [
    {
      label: translate['한국어'],
      icon: korea,
    },
    {
      label: translate['영어'],
      icon: canada,
    },
  ]

  const displayModalWindow = useSelector((state) => {
    return state.displayModalWindow
  })

  const { isOpen } = displayModalWindow

  const goToLikesPage = () => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken ? router.push('/saved') : router.push('/signin')
  }

  return (
    <>
      {isOpen && (
        <ModalWindow
          text={translate['언어를 선택해주세요']}
          options={languageOptions}
        />
      )}
      <Box
        sx={{
          padding: '1rem 1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <SideBar />
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
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
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Box
            onClick={() => dispatch(openModal())}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <LanguageIcon sx={{ fontSize: 20 }} />
              <Typography sx={{ fontSize: '1.2rem' }}>
                {translate['선택언어']}
              </Typography>
            </Box>
          </Box>
          <Box
            onClick={goToLikesPage}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <FavoriteBorderIcon sx={{ fontSize: 20 }} />
              <Typography sx={{ fontSize: '1.2rem' }}>
                {translate['찜 목록']}
              </Typography>
            </Box>
          </Box>
          <Box
            onClick={() => router.push('/product-search')}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SearchIcon sx={{ fontSize: 25 }} />
              <Typography sx={{ fontSize: '1.2rem' }}>
                {translate['검색']}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MainNav
