import React from 'react'
import style from './Main.module.scss'
import SwiperBanner from './SwiperBanner'
import Category from './Category'
import UserRecommend from './UserRecommend'
import RecommendTouristDestination from './RecommendTouristDestination'
import GroupRecommend from './GroupRecommend'
import CultureTripRecommend from './CultureTripRecommend'
import GolfTravelRecommend from './GolfTravelRecommend'

function Main() {
  return (
    <>
      <SwiperBanner />
      <div className={style.container}>
        <Category />
        <UserRecommend />
        <RecommendTouristDestination />
        <GroupRecommend />
        <GolfTravelRecommend />
        <CultureTripRecommend />
      </div>
    </>
  )
}

export default Main
