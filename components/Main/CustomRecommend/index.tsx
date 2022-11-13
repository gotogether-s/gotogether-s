import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  useCustomRecommendUserMutation,
  useCustomRecommendMutation,
} from '@api/requestApi'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './CustomRecommend.module.scss'

type data = {
  id: string
  thumbnail: string
  country: string
  productName: string
  ages: string
  theme: string
  basicPrice: number
}

function index() {
  const [customs, setCustoms] = useState<[]>([])
  const [customRecommendUser]: any = useCustomRecommendUserMutation()
  const [customRecommend]: any = useCustomRecommendMutation()

  const customRec = async () => {
    const accessToken = localStorage.getItem('accessToken')
    try {
      if (accessToken) {
        const res = await customRecommendUser()
        setCustoms(res.data.data.content)
      } else {
        const res = await customRecommend()
        setCustoms(res.data.data.content)
      }
    } catch (e) {
      console.log('e: ', e)
    }
  }

  useEffect(() => {
    customRec()
  }, [])

  if (!customs) return <>상품을 준비중입니다...</>
  return (
    <>
      <Swiper spaceBetween={26} slidesPerView={2.3} className="swiper-list">
        {customs &&
          customs.map(({ ...custom }: data, index: number) => (
            <SwiperSlide key={index}>
              <Link href={`/product-details/${custom.id}`}>
                <img src={custom.thumbnail} alt="img" className={style.img} />
              </Link>
              <span className={style.nation}>{custom.country}</span>
              <div className={style.title}>{custom.productName}</div>
              <div className={style.hashTags}>
                <div className={style.hashTag1}>#{custom.ages} &nbsp;</div>
                <div className={style.hashTag2}>#{custom.theme}&nbsp;</div>
              </div>
              {custom.basicPrice == 0 ? (
                <div className={style.price}>가격 문의</div>
              ) : (
                <div className={style.price}>
                  {custom.basicPrice.toLocaleString('ko-KR')}원
                </div>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default index
