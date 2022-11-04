import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from 'axios'
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
  companion: string
  basicPrice: number
}

function index() {
  const [customs, setCustoms] = useState<[]>([])

  const customRec = async () => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      const res = await axios.get(
        encodeURI(
          process.env.NEXT_PUBLIC_API_URL + `/product-list/custom?page=0&sort=`,
        ),
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      setCustoms(res.data.data.content)
    } else {
      const res = await axios.get(
        encodeURI(
          process.env.NEXT_PUBLIC_API_URL + `/product-list/custom?page=0&sort=`,
        ),
      )
      setCustoms(res.data.data.content)
    }
  }

  useEffect(() => {
    customRec()
  }, [])

  if (!customs) return <>상품을 준비중입니다...</>
  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={2.2}>
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
                <div className={style.hashTag2}>#{custom.companion}&nbsp;</div>
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
