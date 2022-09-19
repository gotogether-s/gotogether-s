import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/reset.css'
import '../styles/global.scss'
import '../styles/override.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
