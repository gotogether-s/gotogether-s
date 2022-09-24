import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './CultureTripRecommend.module.scss'

function index() {
  return (
    <>
      <div className={style.mainAndMore}>
        <div className={style.main}>문화탐방 여행 추천</div>
        <Link href="/productlist/theme" className={style.more}>
          더보기
        </Link>
      </div>
      <Swiper spaceBetween={10} slidesPerView={2.2}>
        <SwiperSlide>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            className={style.img}
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            className={style.img}
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            className={style.img}
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
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
