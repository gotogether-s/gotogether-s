import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './Banner.module.scss'

function index() {
  const [banner, setBanner] = useState(null)
  const Banner = async () => {
    const res = await axios.get(
      encodeURI(process.env.NEXT_PUBLIC_API_URL + `/banner`),
    )
    setBanner(res.data)
  }

  useEffect(() => {
    Banner()
  }, [])
  if (!banner) return <>배너를 준비중입니다...</>
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
      >
        {banner.data.map((banners: string, index: number) => (
          <SwiperSlide key={index}>
            <Link href={banners.bannerUrl}>
              <a>
                <img
                  src={banners.bannerImage}
                  alt="img"
                  className={style.img}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default index
