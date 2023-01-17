import Layout from '@components/Layout'
import { ThemeProvider } from '@mui/material/styles'
import '@styles/global.scss'
import '@styles/muiOverride.scss'
import '@styles/productDetail.scss'
import '@styles/productLists.scss'
import '@styles/reset.css'
import '@styles/swiperOverride.scss'
import theme from '@styles/theme'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from 'store'

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
