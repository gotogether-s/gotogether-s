import React, { useEffect, useState } from 'react'
import style from './Main.module.scss'
import TopButton from '../TopButton'
import Banner from './Banner'
import Category from './Category'
import Recommend from './Recommend'

function Main() {
  const [username, setUsername] = useState<string>('')
  useEffect(() => {
    if (!username) {
      setUsername('')
    }
    setUsername('dd')
  }, [username])

  return (
    <>
      <TopButton />
      <Banner />
      <div className={style.container}>
        <Category />
        {username !== '' ? (
          <Recommend
            name={username + '님을 위한 추천 상품'}
            link="user"
            spaceBetween={10}
            slidesPerView={2.2}
            api="custom"
          />
        ) : (
          <Recommend
            name="오늘의 추천 상품"
            link="user"
            spaceBetween={10}
            slidesPerView={2.2}
            api="custom"
          />
        )}

        <Recommend
          name="추천여행지"
          link="nation"
          spaceBetween={10}
          slidesPerView={1.5}
          api="nation"
        />
        <Recommend
          name="연령대별 여행 추천"
          link="age"
          spaceBetween={10}
          slidesPerView={2.2}
          api="ages"
        />
        <Recommend
          name="유형별 여행 추천"
          link="type"
          spaceBetween={10}
          slidesPerView={2.2}
          api="companion"
        />
        <Recommend
          name="골프여행 추천"
          link="theme"
          spaceBetween={10}
          slidesPerView={2.2}
          api="golf"
        />
        <Recommend
          name="문화탐방 여행 추천"
          link="theme"
          spaceBetween={10}
          slidesPerView={2.2}
          api="culture"
        />
        <Recommend
          name="휴양지 추천"
          link="theme"
          spaceBetween={10}
          slidesPerView={2.2}
          api="healing"
        />
      </div>
    </>
  )
}

export default Main
