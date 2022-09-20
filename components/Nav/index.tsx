import Link from 'next/link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchIcon from '@mui/icons-material/Search'
import style from './Nav.module.scss'
import SideBar from '../SideBar'

const Nav = () => {
  return (
    <nav className={style.nav}>
      <Link href="#">
        <a>
          <SideBar />
        </a>
      </Link>
      <Link href="/">
        <a>로고</a>
      </Link>
      <div className={style['flex-wrapper']}>
        <Link href="/mypage/favorite">
          <a className={style['flex-wrapper-favorite']}>
            <FavoriteBorderIcon sx={{ fontSize: 20 }} />
            <div>찜</div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <SearchIcon sx={{ fontSize: 35 }} />
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
