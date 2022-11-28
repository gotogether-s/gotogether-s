import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useGolfRecommendMutation } from '@api/requestApi'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './GolfRecommend.module.scss'

type data = {
  id: string
  thumbnail: string
  country: string
  productName: string
  ages: string
  companion: string
  basicPrice: number
}

const GolfRecommend = () => {
  const [golf, setGolf] = useState<[]>([])
  const [golfRecommend]: any = useGolfRecommendMutation()

  const golfRec = async () => {
    try {
      const res = await golfRecommend()
      setGolf(res.data.data.content)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  useEffect(() => {
    golfRec()
  }, [])
  if (!golf) return <>상품을 준비중입니다...</>
  return (
    <>
      <Swiper spaceBetween={26} slidesPerView={2.3} className="swiper-list">
        {golf &&
          golf.map(({ ...golf }: data, index: number) => (
            <SwiperSlide key={index}>
              <Link href={`/product-details/${golf.id}`}>
                <img src={golf.thumbnail} alt="img" className={style.img} />
              </Link>
              <span className={style.nation}>{golf.country}</span>
              <div className={style.title}>{golf.productName}</div>
              <div className={style.hashTags}>
                <div className={style.hashTag1}>#{golf.ages} &nbsp;</div>
                <div className={style.hashTag2}>#{golf.companion}&nbsp;</div>
              </div>
              {golf.basicPrice == 0 ? (
                <div className={style.price}>가격 문의</div>
              ) : (
                <div className={style.price}>
                  {golf.basicPrice.toLocaleString('ko-KR')}원
                </div>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default GolfRecommend
