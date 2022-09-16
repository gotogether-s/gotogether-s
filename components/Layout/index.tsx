import { Container } from '@mui/system'
import Nav from '../Nav'
import style from './Layout.module.scss'

const Layout = ({ children }: any) => {
  return (
    <>
      <Container maxWidth="sm" className={style.container}>
        <Nav />
        <div>{children}</div>
      </Container>
    </>
  )
}

export default Layout
