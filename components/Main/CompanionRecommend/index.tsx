import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './CompanionRecommend.module.scss'

function index() {
  const companion: string[] = [
    '전체',
    '남자끼리',
    '여자끼리',
    '나홀로 여행',
    '친구나 동료',
    '연인이나 부부',
    '자녀를 동반하는 가족',
  ]

  const [companionValue, setCompanionValue] = useState<String>('전체')

  const searchCompanion = (e: String) => {
    setCompanionValue(e)
  }

  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={3} className={style.group}>
        {companion.map((companion: string, index: number) => (
          <SwiperSlide key={index} className={style.selectcompanion}>
            {companionValue === companion ? (
              <label
                className={style.choice}
                defaultValue={companion}
                onClick={() => searchCompanion(companion)}
              >
                {companion}
              </label>
            ) : (
              <label
                className={style.selectGroup}
                defaultValue={companion}
                onClick={() => searchCompanion(companion)}
              >
                {companion}
              </label>
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
