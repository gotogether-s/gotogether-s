import React, { useEffect, useState } from 'react'
import TilteAndEtc from '../TitleAndEtc'
import SelectButton from '../SelectButton'
import ProductlistSlide from '../ProductlistSlide'

import 'swiper/css'
import 'swiper/css/pagination'

type recommendProps = {
  title: string
  name: string
  api: string
  spaceBetween: number
  slidesPerView: number
  apiAddress: string
}

function index(props: recommendProps) {
  const [selectButton, setSelectButton] = useState<Boolean>(false)

  useEffect(() => {
    if (props.api == 'ages' || props.api == 'companion') setSelectButton(true)
  }, [selectButton])

  return (
    <>
      <TilteAndEtc name={props.name} api={props.api} title={props.title} />
      {props.api == 'ages' ? (
        <SelectButton spaceBetween={10} slidesPerView={6} api="ages" />
      ) : (
        ''
      )}
      {props.api == 'companion' ? (
        <SelectButton spaceBetween={10} slidesPerView={3} api="companion" />
      ) : (
        ''
      )}
      <ProductlistSlide
        spaceBetween={props.spaceBetween}
        slidesPerView={props.slidesPerView}
        apiAddress={props.apiAddress}
      />
    </>
  )
}

export default index
