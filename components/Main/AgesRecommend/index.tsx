import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from 'axios'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './AgesRecommend.module.scss'

function index() {
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
  const [age, setAge] = useState(null)

  const ageRec = async () => {
    const res = await axios.get(
      encodeURI(
        process.env.NEXT_PUBLIC_API_URL +
          `/product-list/ages?category=${ageValue}&page=0&sort=`,
      ),
    )
    setAge(res.data.data.content)
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

  if (!age) return <>상품을 준비중입니다...</>
  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={3} className={style.group}>
        {ages &&
          ages.map((age: string, index: number) => (
            <SwiperSlide key={index} className={style.selectAge}>
              {selectAgeValue === age ? (
                <span className={style.choice} onClick={() => searchAge(age)}>
                  {age}
                </span>
              ) : (
                <span
                  className={style.selectGroup}
                  onClick={() => searchAge(age)}
                >
                  {age}
                </span>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper spaceBetween={10} slidesPerView={2.2}>
        {age.map((ages: string, index: number) => (
          <SwiperSlide key={index}>
            <Link href={`/product-detail/${ages.id}`}>
              <img src={ages.thumbnail} alt="img" className={style.img} />
            </Link>
            <span className={style.nation}>{ages.country}</span>
            <div className={style.title}>{ages.productName}</div>
            <div className={style.hashTags}>
              <div className={style.hashTag1}>#{ages.ages} &nbsp;</div>
              <div className={style.hashTag2}>#{ages.companion}&nbsp;</div>
            </div>
            {ages.basicPrice == 0 ? (
              <div className={style.price}>가격 문의</div>
            ) : (
              <div className={style.price}>
                {ages.basicPrice.toLocaleString('ko-KR')}원
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default index
