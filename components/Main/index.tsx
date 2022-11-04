import { useEffect, useState } from 'react'
import axios from 'axios'
import style from './Main.module.scss'
import Banner from './Banner'
import Category from './Category'
import Recommend from './Recommend'

function Main() {
  const [username, setUsername] = useState<string>('')
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
  }, [])

  const requestUserInfo = async (accessToken: string) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/members/detail`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      const { name } = res.data.data
      setUsername(name)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  return (
    <>
      <Banner />
      <div className={style.container}>
        <Category />
        {username ? (
          <Recommend
            title={username + '님을 위한 추천 상품'}
            name={username + '님을 위한 추천 상품'}
            api="custom"
            apiAddress="custom"
          />
        ) : (
          <Recommend
            title="오늘의 추천 상품"
            name="오늘의 추천 상품"
            api="custom"
            apiAddress="custom"
          />
        )}

        <Recommend
          title="추천여행지"
          name="국가별 여행"
          api="continents"
          apiAddress="continents"
        />
        <Recommend
          title="연령대별 여행 추천"
          name="연령대별 여행"
          api="ages"
          apiAddress="ages"
        />
        <Recommend
          title="유형별 여행 추천"
          name="유형별 여행"
          api="companion"
          apiAddress="companion"
        />
        <Recommend
          title="골프여행 추천"
          name="테마별 여행"
          api="golf"
          apiAddress="themes"
        />
        <Recommend
          title="문화탐방 여행 추천"
          name="테마별 여행"
          api="culture"
          apiAddress="themes"
        />
        <Recommend
          title="휴양지 추천"
          name="테마별 여행"
          api="healing"
          apiAddress="themes"
        />
      </div>
    </>
  )
}

export default Main
