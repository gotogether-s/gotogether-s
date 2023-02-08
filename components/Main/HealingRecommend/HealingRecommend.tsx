import { useHealingRecommendMutation } from '@api/requestApi'
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
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko
  const translateProducts = locale === 'en' ? productsEnglish : productsKorean

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

  if (!healing) return <>{translate['상품을 준비중입니다...']}</>
  return (
    <>
      <Swiper spaceBetween={26} slidesPerView={2.3} className="swiper-list">
        {healing &&
          healing.map(({ ...heal }: data, index: number) => (
            <SwiperSlide key={index}>
              <Link href={`/product-details/${heal.id}`}>
                <div className={style.click}>
                  <img src={heal.thumbnail} alt="img" className={style.img} />
                  {heal.country.split(',')[1] ? (
                    <div className={style.nations}>
                      <span className={style.nation1}>
                        {translateProducts[heal.country].split(',')[0]}
                      </span>
                      <span className={style.nation2}>
                        {translateProducts[heal.country].split(', ')[1]}
                      </span>
                    </div>
                  ) : (
                    <span className={style.nation}>
                      {translateProducts[heal.country]}
                    </span>
                  )}
                  <div className={style.title}>
                    {translateProducts[heal.productName]}
                  </div>
                  <div className={style.hashTags}>
                    <div className={style.hashTag2}>
                      #{translateProducts[heal.ages]}
                    </div>
                    <div className={style.hashTag1}>
                      {heal.companion !== '상관 없음' &&
                        '#' + translateProducts[heal.companion]}
                    </div>
                  </div>
                  {heal.basicPrice == 0 ? (
                    <div className={style.price}>{translate['가격 문의']}</div>
                  ) : (
                    <div className={style.price}>
                      {heal.basicPrice.toLocaleString('ko-KR')}
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

export default HealingRecommend
