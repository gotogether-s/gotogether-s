import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useRouter } from 'next/router'
import style from './NavBar.module.scss'

const NavBar = ({ link, title }) => {
  const router = useRouter()

  return (
    <div className={style['navbar-container']}>
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
