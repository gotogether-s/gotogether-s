import { createTheme } from '@mui/material/styles'

const typography = {
  fontFamily: 'Noto Sans KR',
  htmlFontSize: 10,
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
