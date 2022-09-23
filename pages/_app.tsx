import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
import Layout from '../components/Layout'
import '../styles/reset.css'
import '../styles/swiperOverride.scss'
import '../styles/global.scss'
import '../styles/override.scss'

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
