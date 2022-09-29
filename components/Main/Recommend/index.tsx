import React, { useEffect, useState } from 'react'
import TilteAndEtc from '../TitleAndEtc'
import SelectButton from '../SelectButton'
import ProductlistSlide from '../ProductlistSlide'

import 'swiper/css'
import 'swiper/css/pagination'

function index({ name, link, spaceBetween, slidesPerView, api }: any) {
  const [selectButton, setSelectButton] = useState<Boolean>(false)

  useEffect(() => {
    if (api == 'ages' || api == 'companion') setSelectButton(true)
  }, [selectButton])

  return (
    <>
      <TilteAndEtc name={name} link={link} />
      {api == 'ages' ? (
        <SelectButton
          spaceBetween={10}
          slidesPerView={6}
          age={[
            '전체',
            '10대',
            '20대',
            '30대',
            '40대',
            '50대',
            '60대',
            '70대 이상',
          ]}
        />
      ) : (
        ''
      )}
      {api == 'companion' ? (
        <SelectButton
          spaceBetween={10}
          slidesPerView={3}
          conpanion={[
            '전체',
            '남자끼리',
            '여자끼리',
            '나홀로 여행',
            '친구나 동료',
            '연인이나 부부',
            '자녀를 동반하는 가족',
          ]}
        />
      ) : (
        ''
      )}
      <ProductlistSlide
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        api={api}
      />
    </>
  )
}

export default index
