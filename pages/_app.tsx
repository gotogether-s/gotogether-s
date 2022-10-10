import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@styles/theme'
import { Provider } from 'react-redux'
import store, { persistor } from 'store'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from '@components/Layout'
import '@styles/reset.css'
import '@styles/global.scss'
import '@styles/muiOverride.scss'
import '@styles/swiperOverride.scss'

declare global {
  interface Window {
    Kakao: any
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
