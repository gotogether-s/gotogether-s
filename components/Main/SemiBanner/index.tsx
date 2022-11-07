import Link from 'next/link'
import style from './SemiBanner.module.scss'

function index() {
  return (
    <Link href="/survey">
      <img src="./semiBanner.png" className={style.semiBanner} />
    </Link>
  )
}

export default index
