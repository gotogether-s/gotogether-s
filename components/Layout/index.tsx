import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import MainNav from '@components/MainNav'
import TopButton from '@components/TopButton'
import style from './Layout.module.scss'

type ALLOWED_PATH =
  | '/search'
  | '/signin'
  | '/signup'
  | '/survey'
  | '/myinfo'
  | '/confirmpassword'
  | '/newpassword'
const pageWithoutNavbar: ALLOWED_PATH[] = [
  '/search',
  '/signin',
  '/signup',
  '/survey',
  '/myinfo',
  '/confirmpassword',
  '/newpassword',
]

const Layout = ({ children }: any) => {
  const { asPath } = useRouter()
  const [currentPath, setCurrentPath] = useState<ALLOWED_PATH | null>(null)
  const listExp: RegExp = new RegExp(`/product-list/\?(.*)`)
  const detailExp: RegExp = new RegExp(`/product-detail/\?(.*)`)

  useEffect(() => {
    if (asPath !== currentPath) setCurrentPath(asPath as ALLOWED_PATH)
  }, [asPath, currentPath])

  const displayMainNav = () => {
    if (currentPath && !pageWithoutNavbar.includes(currentPath)) {
      return <MainNav />
    }
  }

  const displayTopButton = () => {
    if (
      asPath &&
      (asPath === '/' || listExp.test(asPath) || detailExp.test(asPath))
    ) {
      return <TopButton />
    }
  }

  return (
    <>
      <Container maxWidth="sm" className={style['layout-container']}>
        {displayMainNav()}
        {displayTopButton()}
        <div className={style['layout-body-container']}>{children}</div>
      </Container>
    </>
  )
}

export default Layout
