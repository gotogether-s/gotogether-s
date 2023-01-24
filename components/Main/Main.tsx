import en from '@public/locales/en/main.json'
import ko from '@public/locales/ko/main.json'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Banner from './Banner/Banner'
import Bundary from './Bundary/Bundary'
import Category from './Category/Category'
import style from './Main.module.scss'
import Recommend from './Recommend/Recommend'
import SemiBanner from './SemiBanner/SemiBanner'

const Main = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

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
        <Bundary />
        {username ? (
          <Recommend
            title={
              locale === 'ko'
                ? username + translate['님을 위한 추천 상품']
                : translate['님을 위한 추천 상품'] + username
            }
            name={username + '님을 위한 추천 상품'}
            api="custom"
            apiAddress="custom"
          />
        ) : (
          <Recommend
            title={translate['오늘의 추천 상품']}
            name="오늘의 추천 상품"
            api="custom"
            apiAddress="custom"
          />
        )}

        <Bundary />
        <Recommend
          title={translate['추천여행지']}
          name="국가별 여행"
          api="continents"
          apiAddress="continents"
        />

        <Bundary />
        <Recommend
          title={translate['연령대별 여행 추천']}
          name="연령대별 여행"
          api="ages"
          apiAddress="ages"
        />

        <SemiBanner />
        <Recommend
          title={translate['유형별 여행 추천']}
          name="유형별 여행"
          api="companion"
          apiAddress="companion"
        />

        <Bundary />
        <Recommend
          title={translate['골프여행 추천']}
          name="테마별 여행"
          api="golf"
          apiAddress="themes"
        />

        <Bundary />
        <Recommend
          title={translate['문화탐방 여행 추천']}
          name="테마별 여행"
          api="culture"
          apiAddress="themes"
        />

        <Bundary />
        <Recommend
          title={translate['휴양지 추천']}
          name="테마별 여행"
          api="healing"
          apiAddress="themes"
        />
      </div>
    </>
  )
}

export default Main
