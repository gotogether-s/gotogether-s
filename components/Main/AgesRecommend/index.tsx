import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './AgesRecommend.module.scss'

function index() {
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

  const [ageValue, setAgeValue] = useState<String>('전체')

  const searchAge = (e: String) => {
    setAgeValue(e)
  }
  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={3} className={style.group}>
        {ages.map((age: string, index: number) => (
          <SwiperSlide key={index} className={style.selectAge}>
            {ageValue === age ? (
              <span className={style.choice} onClick={() => searchAge(age)}>
                {age}
              </span>
            ) : (
              <span
                className={style.selectGroup}
                onClick={() => searchAge(age)}
              >
                {age}
              </span>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
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