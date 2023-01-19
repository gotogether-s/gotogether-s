import { useCultureRecommendMutation } from '@api/requestApi'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

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

const CultureRecommend = () => {
  const [culture, setCulture] = useState<[]>([])
  const [cultureRecommend]: any = useCultureRecommendMutation()

  const cultureRec = async () => {
    try {
      const res = await cultureRecommend()
      setCulture(res.data.data.content)
    } catch (e) {
      console.log('e: ', e)
    }
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
                <div className={style.click}>
                  <img
                    src={culture.thumbnail}
                    alt="img"
                    className={style.img}
                  />
                  <span className={style.nation}>{culture.country}</span>
                  <div className={style.title}>{culture.productName}</div>
                  <div className={style.hashTags}>
                    <div className={style.hashTag1}>#{culture.ages} &nbsp;</div>
                    <div className={style.hashTag2}>
                      #{culture.companion}&nbsp;
                    </div>
                  </div>
                  {culture.basicPrice == 0 ? (
                    <div className={style.price}>가격 문의</div>
                  ) : (
                    <div className={style.price}>
                      {culture.basicPrice.toLocaleString('ko-KR')}원
                    </div>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default CultureRecommend
