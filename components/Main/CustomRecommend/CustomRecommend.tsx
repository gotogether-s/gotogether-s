import {
  useCustomRecommendMutation,
  useCustomRecommendUserMutation,
} from '@api/requestApi'
import en from '@public/locales/en/main.json'
import productsEnglish from '@public/locales/en/products.json'
import ko from '@public/locales/ko/main.json'
import productsKorean from '@public/locales/ko/products.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko
  const translateProducts = locale === 'en' ? productsEnglish : productsKorean

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

  if (!customs) return <>{translate['상품을 준비중입니다...']}</>
  return (
    <>
      <Swiper spaceBetween={26} slidesPerView={2.3} className="swiper-list">
        {customs &&
          customs.map(({ ...custom }: data, index: number) => (
            <SwiperSlide key={index}>
              <Link href={`/product-details/${custom.id}`}>
                <div className={style.click}>
                  <img src={custom.thumbnail} alt="img" className={style.img} />
                  <span className={style.nation}>
                    {translateProducts[custom.country]}
                  </span>
                  <div className={style.title}>
                    {translateProducts[custom.productName]}
                  </div>
                  <div className={style.hashTags}>
                    <div className={style.hashTag1}>
                      #{translateProducts[custom.ages]} &nbsp;
                    </div>
                    <div className={style.hashTag2}>
                      {custom.theme !== '상관 없음' &&
                        '#' + translateProducts[custom.theme]}
                      &nbsp;
                    </div>
                  </div>
                  {custom.basicPrice == 0 ? (
                    <div className={style.price}>{translate['가격 문의']}</div>
                  ) : (
                    <div className={style.price}>
                      {custom.basicPrice.toLocaleString('ko-KR')}
                      {translate['원']}
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
