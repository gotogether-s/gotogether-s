import Nav from '../Nav'
import style from './Layout.module.scss'

const Layout = ({ children }: any) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  )
}

export default Layout
