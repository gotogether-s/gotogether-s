import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './SelectButton.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { searchAges } from '@store/searchAgesSlice'
import { searchCompanions } from '@store/searchCompanionsSlice'

type selectProps = {
  spaceBetween: number
  slidesPerView: number
  api: string
}
type selectAge = {
  age: string
}
type selectCompanion = {
  companion: string
}

function index(props: selectProps) {
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

  const companion: string[] = [
    '전체',
    '남자끼리',
    '여자끼리',
    '나홀로 여행',
    '친구나 동료',
    '연인이나 부부',
    '자녀를 동반하는 가족',
  ]

  const selectedAge = useSelector((state: any) => {
    return state.searchAges
  })
  const selectedCompanion = useSelector((state: any) => {
    return state.searchCompanions
  })
  const dispatch = useDispatch()

  const searchAge = (props: selectAge) => {
    dispatch(searchAges(props))
  }
  const searchCompanion = (props: selectCompanion) => {
    dispatch(searchCompanions(props))
  }

  return (
    <>
      <Swiper
        spaceBetween={props.spaceBetween}
        slidesPerView={props.slidesPerView}
        className={style.group}
      >
        {props.api == 'ages'
          ? ages.map((age: string, index: number) => (
              <SwiperSlide key={index} className={style.selectAge}>
                {selectedAge.ages == age ? (
                  <span
                    className={style.choice}
                    onClick={() => searchAge({ age })}
                  >
                    {age}
                  </span>
                ) : (
                  <span
                    className={style.selectGroup}
                    onClick={() => searchAge({ age })}
                  >
                    {age}
                  </span>
                )}
              </SwiperSlide>
            ))
          : companion.map((companion: string, index: number) => (
              <SwiperSlide key={index} className={style.selectcompanion}>
                {selectedCompanion.companion == companion ? (
                  <span
                    className={style.choice}
                    onClick={() => searchCompanion({ companion })}
                  >
                    {companion}
                  </span>
                ) : (
                  <span
                    className={style.selectGroup}
                    onClick={() => searchCompanion({ companion })}
                  >
                    {companion}
                  </span>
                )}
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  )
}

export default index
