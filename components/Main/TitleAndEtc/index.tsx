import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './TitleAndEtc.module.scss'

function index({ name, link }: any) {
  return (
    <>
      <div className={style.mainAndMore}>
        <div className={style.main}>{name}</div>
        <Link href={`/productlist/${link}`} className={style.more}>
          더보기
        </Link>
      </div>
    </>
  )
}

export default index
