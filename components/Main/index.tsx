import React from 'react'
import SwiperBanner from '../SwiperBanner'
import style from './Main.module.scss'
import Category from '../Category'

function Main() {
  return (
    <>
      <SwiperBanner />
      <div className={style.container}>
        <Category />
        <div>recommend-product</div>
        <div>realtime-favorite-product</div>
        <div>nation-recommend-prodcut</div>
        <div>group-recommend-product</div>
        <div>theme-recommend-product</div>
      </div>
    </>
  )
}

export default Main
