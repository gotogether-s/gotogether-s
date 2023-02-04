import { createTheme } from '@mui/material/styles'

const typography = {
  fontFamily: 'Noto Sans KR',
  html: {
    fontSize: '62.5%', // 1rem = 10px
  },
  fontSize: '1.6rem',
}

const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
  },
}

const theme = createTheme({
  typography,
  breakpoints,
})

export default theme
