import Link from 'next/link'
import { useRouter } from 'next/router'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './Banner.module.scss'

const Banner = () => {
  const router = useRouter()
  const { locale } = router

  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        className="swiper-banner"
      >
        <SwiperSlide>
          <Link href="/survey">
            <a>
              <img
                src={
                  locale === 'en' ? './banner-en-1.png' : './banner-ko-1.png'
                }
                alt="img"
                className={style.img}
              />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product-list/continents?category=괌,사이판,하와이&page=0&sort=">
            <a>
              <img
                src={
                  locale === 'en' ? './banner-en-2.png' : './banner-ko-2.png'
                }
                alt="img"
                className={style.img}
              />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product-details/58">
            <a>
              <img
                src={
                  locale === 'en' ? './banner-en-3.png' : './banner-ko-3.png'
                }
                alt="img"
                className={style.img}
              />
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
