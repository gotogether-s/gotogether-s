import React, { useEffect, useState } from 'react'
import TilteAndEtc from '../TitleAndEtc'
import SelectButton from '../SelectButton'
import ProductlistSlide from '../ProductlistSlide'

import 'swiper/css'
import 'swiper/css/pagination'

type recommendProps = {
  name: string
  link: string
  spaceBetween: number
  slidesPerView: number
  api: string
}

function index(props: recommendProps) {
  const [selectButton, setSelectButton] = useState<Boolean>(false)

  useEffect(() => {
    if (props.api == 'ages' || props.api == 'companion') setSelectButton(true)
  }, [selectButton])

  return (
    <>
      <TilteAndEtc name={props.name} link={props.link} />
      {props.api == 'ages' ? (
        <SelectButton spaceBetween={10} slidesPerView={6} api="age" />
      ) : (
        ''
      )}
      {props.api == 'companion' ? (
        <SelectButton spaceBetween={10} slidesPerView={3} api="type" />
      ) : (
        ''
      )}
      <ProductlistSlide
        spaceBetween={props.spaceBetween}
        slidesPerView={props.slidesPerView}
        api={props.api}
      />
    </>
  )
}

export default index
