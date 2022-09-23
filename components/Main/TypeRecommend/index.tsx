import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './TypeRecommend.module.scss'

function index() {
  return (
    <>
      <div className={style.mainAndMore}>
        <div className={style.main}>유형별 여행 추천</div>
        <div className={style.more}>더보기</div>
      </div>
      <Swiper spaceBetween={0} slidesPerView={3} className={style.group}>
        <SwiperSlide className={style.groupSize2}>
          <span className={style.selectGroup}>전체</span>
        </SwiperSlide>
        <SwiperSlide className={style.groupSize4}>
          <span className={style.selectGroup}>남자끼리</span>
        </SwiperSlide>
        <SwiperSlide className={style.groupSize4}>
          <span className={style.selectGroup}>여자끼리</span>
        </SwiperSlide>
        <SwiperSlide className={style.groupSize5}>
          <span className={style.selectGroup}>나홀로 여행</span>
        </SwiperSlide>
        <SwiperSlide className={style.groupSize5}>
          <span className={style.selectGroup}>친구나 동료</span>
        </SwiperSlide>
        <SwiperSlide className={style.groupSize6}>
          <span className={style.selectGroup}>연인이나 부부</span>
        </SwiperSlide>
        <SwiperSlide className={style.groupSize9}>
          <span className={style.selectGroup}>자녀를 동반하는 가족</span>
        </SwiperSlide>
      </Swiper>
      <Swiper spaceBetween={10} slidesPerView={2.2}>
        <SwiperSlide>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="100%"
            height="100%"
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
            width="100%"
            height="100%"
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
            width="100%"
            height="100%"
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
