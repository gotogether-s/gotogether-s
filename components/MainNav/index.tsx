import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'
import SideBar from 'components/SideBar'
import style from './MainNav.module.scss'

const MainNav = () => {
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
            <div>찜 목록</div>
          </a>
        </Link>
        <Link href="/search">
          <a>
            <SearchIcon sx={{ fontSize: 25 }} />
            <div>검색</div>
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default MainNav
