import { useCultureRecommendMutation } from '@api/requestApi'
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
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko
  const translateProducts = locale === 'en' ? productsEnglish : productsKorean

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

  if (!culture) return <>{translate['상품을 준비중입니다...']}</>
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
                  <span className={style.nation}>
                    {translateProducts[culture.country]}
                  </span>
                  <div className={style.title}>
                    {translateProducts[culture.productName]}
                  </div>
                  <div className={style.hashTags}>
                    <div className={style.hashTag1}>
                      #{translateProducts[culture.ages]} &nbsp;
                    </div>
                    <div className={style.hashTag2}>
                      {culture.companion !== '상관 없음' &&
                        '#' + translateProducts[culture.companion]}
                      &nbsp;
                    </div>
                  </div>
                  {culture.basicPrice == 0 ? (
                    <div className={style.price}>{translate['가격 문의']}</div>
                  ) : (
                    <div className={style.price}>
                      {culture.basicPrice.toLocaleString('ko-KR')}
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

export default CultureRecommend
