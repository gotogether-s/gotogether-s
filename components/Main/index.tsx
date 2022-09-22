import React from 'react'
import style from './Main.module.scss'
import TopButton from '../TopButton'
import SwiperBanner from './SwiperBanner'
import Category from './Category'
import UserRecommend from './UserRecommend'
import TouristDestinationRecommend from './TouristDestinationRecommend'
import AgeRecommend from './AgeRecommend'
import TypeRecommend from './TypeRecommend'
import GolfTravelRecommend from './GolfTravelRecommend'
import CultureTripRecommend from './CultureTripRecommend'
import VacationSpotRecommend from './VacationSpotRecommend'

function Main() {
  return (
    <>
      <TopButton />
      <SwiperBanner />
      <div className={style.container}>
        <Category />
        <UserRecommend />
        <TouristDestinationRecommend />
        <AgeRecommend />
        <TypeRecommend />
        <GolfTravelRecommend />
        <CultureTripRecommend />
        <VacationSpotRecommend />
      </div>
    </>
  )
}

export default Main
