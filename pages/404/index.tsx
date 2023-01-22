import { Box, Button, Typography } from '@mui/material'
import en from '@public/locales/en/notFound.json'
import ko from '@public/locales/ko/notFound.json'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  return (
    <Box sx={{ paddingTop: '5rem' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: '3rem',
            fontWeight: '500',
            color: '#4581F8',
            marginBottom: '2rem',
          }}
        >
          404 Not Found
        </Typography>
        <Typography
          sx={{
            marginBottom: '1rem',
          }}
        >
          {translate['페이지를 찾을 수 없습니다']}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.4rem',
            color: '#8D8D8D',
          }}
        >
          {translate['페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.']}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.4rem',
            color: '#8D8D8D',
            marginBottom: '5rem',
          }}
        >
          {translate['입력하신 주소가 정확한지 확인해 주시기 바랍니다.']}
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: '100%',
            backgroundColor: '#4581F8',
            boxShadow: 'none',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            fontWeight: '500',
            marginBottom: '1rem',
            '&:hover': {
              backgroundColor: '#4581F8',
              boxShadow: 'none',
            },
          }}
          onClick={() => router.back()}
        >
          {translate['이전화면']}
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: '100%',
            border: '1px solid#4581F8',
            color: '#4581F8',
            boxShadow: 'none',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            fontWeight: '500',
            '&:hover': {
              backgroundColor: '#fff',
              boxShadow: 'none',
            },
          }}
          onClick={() => router.push('/')}
        >
          {translate['홈으로']}
        </Button>
      </Box>
    </Box>
  )
}

export default NotFound
