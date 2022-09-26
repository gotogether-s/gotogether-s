import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import MainNav from '../MainNav'
import style from './Layout.module.scss'

type ALLOWED_PATH = '/search' | '/signin'
const pageWithoutNavbar: ALLOWED_PATH[] = ['/search', '/signin']

const Layout = ({ children }: any) => {
  const { asPath } = useRouter()
  const [currentPath, setCurrentPath] = useState<ALLOWED_PATH | null>(null)

  useEffect(() => {
    if (asPath !== currentPath) setCurrentPath(asPath as ALLOWED_PATH)
  }, [asPath, currentPath])

  return (
    <>
      <Container maxWidth="sm" className={style.container}>
        {!pageWithoutNavbar.includes(currentPath) && <MainNav />}
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
