import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useHealingRecommendMutation } from '@api/requestApi'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './HealingRecommend.module.scss'

type data = {
  id: string
  thumbnail: string
  country: string
  productName: string
  ages: string
  companion: string
  basicPrice: number
}

const HealingRecommend = () => {
  const [healing, setHealing] = useState<[]>([])
  const [healingRecommend]: any = useHealingRecommendMutation()

  const healingRec = async () => {
    try {
      const res = await healingRecommend()
      setHealing(res.data.data.content)
    } catch (e) {
      console.log('e: ', e)
    }
  }
  useEffect(() => {
    healingRec()
  }, [])
  if (!healing) return <>상품을 준비중입니다...</>
  return (
    <>
      <Swiper spaceBetween={26} slidesPerView={2.3} className="swiper-list">
        {healing &&
          healing.map(({ ...heal }: data, index: number) => (
            <SwiperSlide key={index}>
              <Link href={`/product-details/${heal.id}`}>
                <img src={heal.thumbnail} alt="img" className={style.img} />
              </Link>
              <span className={style.nation}>{heal.country}</span>
              <div className={style.title}>{heal.productName}</div>
              <div className={style.hashTags}>
                <div className={style.hashTag1}>#{heal.ages} &nbsp;</div>
                <div className={style.hashTag2}>#{heal.companion}&nbsp;</div>
              </div>
              {heal.basicPrice == 0 ? (
                <div className={style.price}>가격 문의</div>
              ) : (
                <div className={style.price}>
                  {heal.basicPrice.toLocaleString('ko-KR')}원
                </div>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default HealingRecommend
