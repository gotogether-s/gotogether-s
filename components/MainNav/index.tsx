import SideBar from '@components/SideBar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'
import style from './MainNav.module.scss'

const MainNav = () => {
  return (
    <nav className={style.nav}>
      <SideBar />
      <Link href="/" className={style['logo']}>
        <a>로고</a>
      </Link>
      <div className={style['flex-wrapper']}>
        <Link href="/likes">
          <a className={style['flex-wrapper-favorite']}>
            <FavoriteBorderIcon sx={{ fontSize: 20 }} />
            <div>찜 목록</div>
          </a>
        </Link>
        <Link href="/product-search">
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
