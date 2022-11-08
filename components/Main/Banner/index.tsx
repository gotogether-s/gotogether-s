import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './Banner.module.scss'

function index() {
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
              <img src="./banner1.png" alt="img" className={style.img} />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product-list/continents?category=괌,사이판,하와이&page=0&sort=">
            <a>
              <img src="./banner2.png" alt="img" className={style.img} />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <a>
              <img src="./banner3.png" alt="img" className={style.img} />
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default index
