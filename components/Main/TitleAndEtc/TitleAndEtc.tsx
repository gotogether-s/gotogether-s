import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'
import style from './TitleAndEtc.module.scss'

type titleProps = {
  title: string
  name: string
  api: string
  apiAddress: string
}
type Props = {
  name: string
  api: string
  apiAddress: string
}

const TitleAndEtc = (props: titleProps) => {
  return (
    <>
      <div className={style.mainAndMore}>
        <div className={style.main}>{props.title}</div>
        {props.apiAddress == 'custom' ? (
          <Link
            href={`/product-list/${props.apiAddress}?page=0&sort=`}
            className={style.more}
          >
            <a>더보기</a>
          </Link>
        ) : (
          <Link
            href={`/product-list/${props.apiAddress}?category=&page=0&sort=`}
            className={style.more}
          >
            <a>더보기</a>
          </Link>
        )}
      </div>
    </>
  )
}

export default TitleAndEtc
