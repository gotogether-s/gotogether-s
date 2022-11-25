import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useRouter } from 'next/router'
import style from './NavBar.module.scss'

const NavBar = ({ link, title, marginBottom }) => {
  const router = useRouter()

  return (
    <div
      className={style['navbar-container']}
      style={{ marginBottom: marginBottom ? marginBottom : '3rem' }}
    >
      <ArrowBackIosNewIcon
        className={style['icon']}
        onClick={() => {
          router.push(`${link}`)
        }}
      />
      <div className={style['title']}>{title}</div>
    </div>
  )
}

export default NavBar
