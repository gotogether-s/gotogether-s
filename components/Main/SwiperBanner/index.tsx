import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './SwiperBanner.module.scss'

function index() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
        <SwiperSlide>Slide 11</SwiperSlide>
        <SwiperSlide>Slide 12</SwiperSlide>
        <SwiperSlide>Slide 13</SwiperSlide>
        <SwiperSlide>Slide 14</SwiperSlide>
        <SwiperSlide>Slide 15</SwiperSlide>
        <SwiperSlide>Slide 16</SwiperSlide>
        <SwiperSlide>Slide 17</SwiperSlide>
        <SwiperSlide>Slide 18</SwiperSlide>
        <SwiperSlide>Slide 19</SwiperSlide>
        <SwiperSlide>Slide 20</SwiperSlide>
        <SwiperSlide>Slide 21</SwiperSlide>
        <SwiperSlide>Slide 22</SwiperSlide>
      </Swiper>
    </>
  )
}

export default index
