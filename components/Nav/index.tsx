import Link from 'next/link'
import style from './Nav.module.scss'

const Nav = () => {
  return (
    <nav>
      <Link href="/mypage/favorite">
        <a>찜</a>
      </Link>
    </nav>
  )
}

export default Nav
