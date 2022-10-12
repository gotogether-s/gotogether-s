import { useEffect, useState } from 'react'
import style from './Main.module.scss'
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
      <Banner />
      <div className={style.container}>
        <Category />
        {username !== '' ? (
          <Recommend
            title={username + '님을 위한 추천 상품'}
            name={username + '님을 위한 추천 상품'}
            api="custom"
          />
        ) : (
          <Recommend
            title="오늘의 추천 상품"
            name="오늘의 추천 상품"
            api="custom"
          />
        )}

        <Recommend title="추천여행지" name="국가별 여행" api="continents" />
        <Recommend title="연령대별 여행 추천" name="연령대별 여행" api="ages" />
        <Recommend
          title="유형별 여행 추천"
          name="유형별 여행"
          api="companion"
        />
        <Recommend title="골프여행 추천" name="테마별 여행" api="golf" />
        <Recommend
          title="문화탐방 여행 추천"
          name="테마별 여행"
          api="culture"
        />
        <Recommend title="휴양지 추천" name="테마별 여행" api="healing" />
      </div>
    </>
  )
}

export default Main
