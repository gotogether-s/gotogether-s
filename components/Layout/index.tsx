import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import Nav from '../Nav'
import style from './Layout.module.scss'

const Layout = ({ children }: any) => {
  const { asPath } = useRouter()

  return (
    <>
      <Container maxWidth="sm" className={style.container}>
        {asPath !== 'search' && <Nav />}
        <div>{children}</div>
      </Container>
    </>
  )
}

export default Layout
