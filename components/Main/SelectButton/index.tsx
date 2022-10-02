import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './SelectButton.module.scss'

type selectProps = {
  spaceBetween: number
  slidesPerView: number
  api: string
}

function index(props: selectProps) {
  const ages: string[] = [
    '전체',
    '10대',
    '20대',
    '30대',
    '40대',
    '50대',
    '60대',
    '70대 이상',
  ]
  const companion: string[] = [
    '전체',
    '남자끼리',
    '여자끼리',
    '나홀로 여행',
    '친구나 동료',
    '연인이나 부부',
    '자녀를 동반하는 가족',
  ]
  return (
    <>
      <Swiper
        spaceBetween={props.spaceBetween}
        slidesPerView={props.slidesPerView}
        className={style.group}
      >
        {props.api == 'ages'
          ? ages.map((age: string, index: number) => (
              <SwiperSlide key={index} className={style.selectAge}>
                <span className={style.selectGroup}>{age}</span>
              </SwiperSlide>
            ))
          : companion.map((companion: string, index: number) => (
              <SwiperSlide key={index} className={style.selectcompanion}>
                <span className={style.selectGroup}>{companion}</span>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  )
}

export default index
