import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from 'axios'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './CultureRecommend.module.scss'

type data = {
  id: string
  thumbnail: string
  country: string
  productName: string
  ages: string
  companion: string
  basicPrice: number
}

function index() {
  const [culture, setCulture] = useState<[]>([])
  const cultureRec = async () => {
    const res = await axios.get(
      encodeURI(
        process.env.NEXT_PUBLIC_API_URL +
          `/product-list/themes?category=문화탐방&page=0&sort=`,
      ),
    )
    setCulture(res.data.data.content)
  }

  useEffect(() => {
    cultureRec()
  }, [])
  if (!culture) return <>상품을 준비중입니다...</>
  return (
    <>
      <Swiper spaceBetween={26} slidesPerView={2.3} className="swiper-list">
        {culture &&
          culture.map(({ ...culture }: data, index: number) => (
            <SwiperSlide key={index}>
              <Link href={`/product-details/${culture.id}`}>
                <img src={culture.thumbnail} alt="img" className={style.img} />
              </Link>
              <span className={style.nation}>{culture.country}</span>
              <div className={style.title}>{culture.productName}</div>
              <div className={style.hashTags}>
                <div className={style.hashTag1}>#{culture.ages} &nbsp;</div>
                <div className={style.hashTag2}>#{culture.companion}&nbsp;</div>
              </div>
              {culture.basicPrice == 0 ? (
                <div className={style.price}>가격 문의</div>
              ) : (
                <div className={style.price}>
                  {culture.basicPrice.toLocaleString('ko-KR')}원
                </div>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default index
