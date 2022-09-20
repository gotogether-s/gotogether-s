import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
import Layout from '../components/Layout'
import '../styles/reset.css'
import '../styles/swiperOverride.scss'
import '../styles/global.scss'
import '../styles/override.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
