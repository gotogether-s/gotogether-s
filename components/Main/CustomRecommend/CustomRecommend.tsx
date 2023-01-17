import {
  useCustomRecommendMutation,
  useCustomRecommendUserMutation,
} from '@api/requestApi'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

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

const CustomRecommend = () => {
  const [customs, setCustoms] = useState<[]>([])
  const [customRecommendUser]: any = useCustomRecommendUserMutation()
  const [customRecommend]: any = useCustomRecommendMutation()

  const customRec = async () => {
    const accessToken = localStorage.getItem('accessToken')
    try {
      if (accessToken) {
        const res = await customRecommendUser({ accessToken })
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
                <div className={style.click}>
                  <img src={custom.thumbnail} alt="img" className={style.img} />
                  <br />
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
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default CustomRecommend
