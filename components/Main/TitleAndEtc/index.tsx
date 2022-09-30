import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './TitleAndEtc.module.scss'

type titleProps = {
  name: string
  link: string
}

function index(props: titleProps) {
  return (
    <>
      <div className={style.mainAndMore}>
        <div className={style.main}>{props.name}</div>
        <Link href={`/productlist/${props.link}`} className={style.more}>
          더보기
        </Link>
      </div>
    </>
  )
}

export default index
