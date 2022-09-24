import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './TouristDestinationRecommend.module.scss'

function index() {
  return (
    <>
      <div className={style.mainAndMore}>
        <div className={style.main}>추천여행지</div>
        <Link href="/productlist/nation" className={style.more}>
          더보기
        </Link>
      </div>
      <Swiper spaceBetween={10} slidesPerView={1.5}>
        <SwiperSlide>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </>
  )
}

export default index
