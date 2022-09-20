import React from 'react'
import SwiperBanner from '../SwiperBanner'
import style from './Main.module.scss'
function Main() {
  return (
    <>
      <SwiperBanner />
      <div className={style.ok}>category</div>
      <div>recommend-product</div>
      <div>realtime-favorite-product</div>
      <div>nation-recommend-prodcut</div>
      <div>group-recommend-product</div>
      <div>theme-recommend-product</div>
    </>
  )
}

export default Main
