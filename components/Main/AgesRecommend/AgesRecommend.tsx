import { useAgeRecommendMutation } from '@api/requestApi'
import commonEn from '@public/locales/en/common.json'
import mainEn from '@public/locales/en/main.json'
import productsEnglish from '@public/locales/en/products.json'
import commonKo from '@public/locales/ko/common.json'
import mainKo from '@public/locales/ko/main.json'
import productsKorean from '@public/locales/ko/products.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './AgesRecommend.module.scss'

type data = {
  id: string
  thumbnail: string
  country: string
  productName: string
  ages: string
  companion: string
  basicPrice: number
}

const AgesRecommend = () => {
  const router = useRouter()

  const { locale } = router
  const translateMain = locale === 'en' ? mainEn : mainKo
  const translateCommon = locale === 'en' ? commonEn : commonKo
  const translateProducts = locale === 'en' ? productsEnglish : productsKorean

  const ages: string[] = [
    '전체',
    '10대',
    '20대',
    '30대',
    '40대',
    '50대',
    '60대',
    '70대 이상',
  ]

  const [ageValue, setAgeValue] = useState<String>('')
  const [selectAgeValue, setSelectAgeValue] = useState<String>('전체')
  const [age, setAge] = useState<[]>([])
  const [ageRecommend]: any = useAgeRecommendMutation()

  const ageRec = async () => {
    try {
      const res = await ageRecommend({ ageValue })
      setAge(res.data.data.content)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const searchAge = (e: String) => {
    if (e == '전체') {
      setAgeValue('')
      setSelectAgeValue('전체')
    } else {
      setAgeValue(e)
      setSelectAgeValue(e)
    }
  }

  useEffect(() => {
    ageRec()
    searchAge
  }, [ageValue, selectAgeValue])

  if (!age) return <>{translateMain['상품을 준비중입니다...']}</>
  return (
    <>
      <Swiper spaceBetween={8} slidesPerView={3} className={style.group}>
        {ages &&
          ages.map((age: string, index: number) => (
            <SwiperSlide key={index} className={style.selectAge}>
              {selectAgeValue === age ? (
                <span className={style.choice} onClick={() => searchAge(age)}>
                  {translateCommon[age]}
                </span>
              ) : (
                <span
                  className={style.selectGroup}
                  onClick={() => searchAge(age)}
                >
                  {translateCommon[age]}
                </span>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper spaceBetween={26} slidesPerView={2.3} className="swiper-list">
        {age.map(({ ...ages }: data, index: number) => (
          <SwiperSlide key={index}>
            <Link href={`/product-details/${ages.id}`}>
              <div className={style.click}>
                <img src={ages.thumbnail} alt="img" className={style.img} />
                {ages.country.split(',')[1] ? (
                  <div className={style.nations}>
                    <span className={style.nation1}>
                      {translateProducts[ages.country].split(',')[0]}
                    </span>
                    <span className={style.nation2}>
                      {translateProducts[ages.country].split(', ')[1]}
                    </span>
                  </div>
                ) : (
                  <span className={style.nation}>
                    {translateProducts[ages.country]}
                  </span>
                )}
                <div className={style.title}>
                  {translateProducts[ages.productName]}
                </div>
                <div className={style.hashTags}>
                  <div className={style.hashTag1}>
                    #{translateProducts[ages.ages]}&nbsp;
                  </div>
                  <div className={style.hashTag2}>
                    {ages.companion !== '상관 없음' &&
                      '#' + translateProducts[ages.companion]}
                    &nbsp;
                  </div>
                </div>
                {ages.basicPrice == 0 ? (
                  <div className={style.price}>
                    {translateMain['가격 문의']}
                  </div>
                ) : (
                  <div className={style.price}>
                    {ages.basicPrice.toLocaleString('ko-KR')}
                    {translateMain['원']}
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

export default AgesRecommend
