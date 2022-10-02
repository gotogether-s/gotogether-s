import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import MainNav from 'components/MainNav'
import style from './Layout.module.scss'

type ALLOWED_PATH = '/search' | '/signin' | '/signup' | '/survey'
const pageWithoutNavbar: ALLOWED_PATH[] = [
  '/search',
  '/signin',
  '/signup',
  '/survey',
]

const Layout = ({ children }: any) => {
  const { asPath } = useRouter()
  const [currentPath, setCurrentPath] = useState<ALLOWED_PATH | null>(null)

  useEffect(() => {
    if (asPath !== currentPath) setCurrentPath(asPath as ALLOWED_PATH)
  }, [asPath, currentPath])

  const displayMainNav = () => {
    if (currentPath && !pageWithoutNavbar.includes(currentPath)) {
      return <MainNav />
    }
  }

  return (
    <>
      <Container maxWidth="sm" className={style.container}>
        {displayMainNav()}
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
