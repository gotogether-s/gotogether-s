import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@styles/theme'
import { Provider } from 'react-redux'
import store from 'store'
import Layout from '@components/Layout'
import '@styles/reset.css'
import '@styles/global.scss'
import '@styles/muiOverride.scss'
import '@styles/swiperOverride.scss'
import '@styles/productLists.scss'

declare global {
  interface Window {
    Kakao: any
  }
}

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
