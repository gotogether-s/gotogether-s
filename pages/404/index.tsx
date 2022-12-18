import { Box, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router'
import style from './Payment.module.scss'

const NotFound = () => {
  const router = useRouter()

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
          페이지를 찾을 수 없습니다 <br />
          (404 Not Found)
        </Typography>
        <Typography
          sx={{ fontSize: '1.2rem', color: '#8D8D8D', marginBottom: '2rem' }}
        >
          고투게더를 이용해주셔서 감사합니다. 무통장 입금을 원하실 경우, 아래
          계좌로 입금해주시면 됩니다.
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: '100%',
            marginBottom: '1rem',
          }}
          onClick={() => router.back()}
        >
          이전화면
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: '100%',
          }}
          onClick={() => router.push('/')}
        >
          홈으로
        </Button>
      </Box>
    </Box>
  )
}

export default NotFound
