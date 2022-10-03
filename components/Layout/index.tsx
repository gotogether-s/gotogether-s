import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import MainNav from 'components/MainNav'
import TopButton from 'components/TopButton'
import style from './Layout.module.scss'

type ALLOWED_PATH = '/search' | '/signin' | '/signup' | '/survey'
const pageWithoutNavbar: ALLOWED_PATH[] = [
  '/search',
  '/signin',
  '/signup',
  '/survey',
]

type TOPBUTTON_PATH = '/' | '/productlist' | '/productdetail'
const pageWithTopButton: TOPBUTTON_PATH[] = [
  '/',
  '/productlist',
  '/productdetail',
]

const Layout = ({ children }: any) => {
  const { asPath } = useRouter()
  const [currentPath, setCurrentPath] = useState<ALLOWED_PATH | null>(null)
  const [currentPathTopButton, setCurrentPathTopButton] =
    useState<TOPBUTTON_PATH | null>(null)

  useEffect(() => {
    if (asPath !== currentPath) setCurrentPath(asPath as ALLOWED_PATH)

    if (asPath !== currentPathTopButton)
      setCurrentPathTopButton(asPath as TOPBUTTON_PATH)
  }, [asPath, currentPath, currentPathTopButton])

  const displayMainNav = () => {
    if (currentPath && !pageWithoutNavbar.includes(currentPath)) {
      return <MainNav />
    }
  }
  const displayTopButton = () => {
    if (
      currentPathTopButton &&
      pageWithTopButton.includes(currentPathTopButton)
    ) {
      return <TopButton />
    }
  }

  return (
    <>
      <Container maxWidth="sm" className={style.container}>
        {displayMainNav()}
        {displayTopButton()}
        <div
          style={{
            padding: !pageWithoutNavbar.includes(currentPath) ? 0 : '2rem',
          }}
        >
          {children}
        </div>
      </Container>
    </>
  )
}

export default Layout
