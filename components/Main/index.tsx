import React from 'react'
import style from './Main.module.scss'
import SwiperBanner from '../SwiperBanner'
import Category from '../Category'
import RecommendTouristDestination from '../RecommendTouristDestination'

function Main() {
  return (
    <>
      <SwiperBanner />
      <div className={style.container}>
        <Category />
        <RecommendTouristDestination />
        <div>realtime-favorite-product</div>
        <div>nation-recommend-prodcut</div>
        <div>group-recommend-product</div>
        <div>theme-recommend-product</div>
      </div>
    </>
  )
}

export default Main
