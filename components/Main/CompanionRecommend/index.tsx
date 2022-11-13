import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useCompanionRecommendMutation } from '@api/requestApi'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './CompanionRecommend.module.scss'

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
  const companion: string[] = [
    '전체',
    '남자끼리',
    '여자끼리',
    '나홀로 참가',
    '친구나 동료',
    '연인이나 부부',
    '자녀를 동반 가족',
  ]

  const [companionValue, setCompanionValue] = useState<String>('')
  const [selectCompanionValue, setSelectCompanionValue] =
    useState<String>('전체')
  const [companions, setCompanions] = useState<[]>([])
  const [companionRecommend]: any = useCompanionRecommendMutation()

  const companionRec = async () => {
    try {
      const res = await companionRecommend({ companionValue })
      setCompanions(res.data.data.content)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const searchCompanion = (e: String) => {
    if (e == '전체') {
      setCompanionValue('')
      setSelectCompanionValue('전체')
    } else {
      setCompanionValue(e)
      setSelectCompanionValue(e)
    }
  }

  useEffect(() => {
    companionRec()
    searchCompanion
  }, [companionValue, selectCompanionValue])

  if (!companions) <>상품을 준비중입니다...</>
  return (
    <>
      <Swiper spaceBetween={8} slidesPerView={3} className={style.group}>
        {companion &&
          companion.map((companion: string, index: number) => (
            <SwiperSlide key={index} className={style.selectcompanion}>
              {selectCompanionValue === companion ? (
                <span
                  className={style.choice}
                  onClick={() => searchCompanion(companion)}
                >
                  {companion}
                </span>
              ) : (
                <span
                  className={style.selectGroup}
                  onClick={() => searchCompanion(companion)}
                >
                  {companion}
                </span>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper spaceBetween={26} slidesPerView={2.3} className="swiper-list">
        {companions &&
          companions.map(({ ...companion }: data, index: number) => (
            <SwiperSlide key={index}>
              <Link href={`/product-details/${companion.id}`}>
                <img
                  src={companion.thumbnail}
                  alt="img"
                  className={style.img}
                />
              </Link>
              <span className={style.nation}>{companion.country}</span>
              <div className={style.title}>{companion.productName}</div>
              <div className={style.hashTags}>
                <div className={style.hashTag1}>#{companion.ages} &nbsp;</div>
                <div className={style.hashTag2}>
                  #{companion.companion}&nbsp;
                </div>
              </div>
              {companion.basicPrice == 0 ? (
                <div className={style.price}>가격 문의</div>
              ) : (
                <div className={style.price}>
                  {companion.basicPrice.toLocaleString('ko-KR')}원
                </div>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default index
