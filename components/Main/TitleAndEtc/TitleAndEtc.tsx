import en from '@public/locales/en/main.json'
import ko from '@public/locales/ko/main.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  return (
    <>
      <div className={style.mainAndMore}>
        <div className={style.main}>{props.title}</div>
        {props.apiAddress == 'custom' ? (
          <Link
            href={`/product-list/${props.apiAddress}?page=0&sort=`}
            className={style.more}
          >
            <a>{translate['더보기']}</a>
          </Link>
        ) : (
          <Link
            href={`/product-list/${props.apiAddress}?category=&page=0&sort=`}
            className={style.more}
          >
            <a>{translate['더보기']}</a>
          </Link>
        )}
      </div>
    </>
  )
}

export default TitleAndEtc
