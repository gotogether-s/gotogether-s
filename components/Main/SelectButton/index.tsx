import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './SelectButton.module.scss'

function index({ spaceBetween, slidesPerView, age, conpanion }: any) {
  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        className={style.group}
      >
        {age
          ? age.map((age: any, index: number) => (
              <SwiperSlide key={index} className={style.selectAge}>
                <span className={style.selectGroup}>{age}</span>
              </SwiperSlide>
            ))
          : conpanion.map((conpanion: any, index: number) => (
              <SwiperSlide key={index} className={style.selectConpanion}>
                <span className={style.selectGroup}>{conpanion}</span>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  )
}

export default index
