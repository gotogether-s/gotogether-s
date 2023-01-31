import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './SemiBanner.module.scss'

const SemiBanner = () => {
  const router = useRouter()
  const { locale } = router

  return (
    <Link href="/survey">
      <img
        src={
          locale === 'en' ? './banner-middle-en.png' : './banner-middle-ko.png'
        }
        className={style.semiBanner}
      />
    </Link>
  )
}

export default SemiBanner
