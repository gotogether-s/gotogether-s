import { useState, useEffect } from 'react'
import axios from 'axios'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

function index({ data }: any) {
  const router = useRouter()
  const title: any = router.query.params

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const [ageChange, setAgeChange] = useState<string>('전체상품')
  const [companionChange, setCompanionChange] = useState<string>('전체상품')
  const [themeChange, setThemeChange] = useState<string>('전체상품')
  const [continentChange, setContinentChange] = useState<string>('전체상품')
  const [sortChange, setSortChange] = useState<string>('')

  const [prevAgeChange, setPrevAgeChange] = useState<string>('전체상품')
  const [prevCompanionChange, setPrevCompanionChange] =
    useState<string>('전체상품')
  const [prevThemeChange, setPrevThemeChange] = useState<string>('전체상품')
  const [prevContinentChange, setPrevContinentChange] =
    useState<string>('전체상품')

  const ages: string[] = [
    '전체상품',
    '10대',
    '20대',
    '30대',
    '40대',
    '50대',
    '60대',
    '70대 이상',
  ]
  const companions: string[] = [
    '전체상품',
    '남자끼리',
    '여자끼리',
    '나홀로 참가',
    '친구나 동료',
    '연인이나 부부',
    '자녀를 동반 가족',
  ]
  const themes: string[] = [
    '전체상품',
    '문화탐방',
    '골프여행',
    '리조트 휴양 및 힐링',
    '오지탐험',
    '트레킹여행',
    '봉사활동',
    '성지순례',
  ]
  const continents: string[] = [
    '전체상품',
    '괌,사이판,하와이',
    '동남아시아',
    '동남아프리카',
    '대만',
    '북미',
    '북아프리카,중동',
    '인도,주변국',
    '유럽',
    '일본',
    '중국',
    '중남미',
    '중앙아시아',
    '코카서스',
    '호주,뉴질랜드',
  ]

  const changeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortChange(e.target.value)
    if ((router.query.params = 'all')) {
      router.push(
        `/product-list/${router.query.params}?category1=${router.query.category1}&category2=${router.query.category2}&category3=${router.query.category3}&category4=${router.query.category4}&page=${router.query.page}&sort=${e.target.value}`,
      )
    } else
      router.push(
        `/product-list/${router.query.params}?category=${router.query.category}&page=${router.query.page}&sort=${e.target.value}`,
      )
  }
  const prevChangeContinent = (e: string) => {
    setPrevContinentChange(e)
  }
  const prevChangeAge = (e: string) => {
    setPrevAgeChange(e)
  }
  const prevChangeTheme = (e: string) => {
    setPrevThemeChange(e)
  }
  const prevChangeCompanion = (e: string) => {
    setPrevCompanionChange(e)
  }

  const closeModal = () => {
    setPrevContinentChange(continentChange)
    setPrevAgeChange(ageChange)
    setPrevCompanionChange(companionChange)
    setPrevThemeChange(themeChange)
    setModalIsOpen(!modalIsOpen)
  }

  const result = (title: string) => {
    if (title == 'all') {
      setContinentChange(prevContinentChange)
      setPrevContinentChange(prevContinentChange)
      setAgeChange(prevAgeChange)
      setPrevAgeChange(prevAgeChange)
      setCompanionChange(prevCompanionChange)
      setPrevCompanionChange(prevCompanionChange)
      setThemeChange(prevThemeChange)
      setPrevThemeChange(prevThemeChange)

      let con = prevContinentChange
      let age = prevAgeChange
      let com = prevCompanionChange
      let the = prevThemeChange

      if (prevContinentChange == '전체상품') {
        con = ''
      }
      if (prevAgeChange == '전체상품') {
        age = ''
      }
      if (prevCompanionChange == '전체상품') {
        com = ''
      }
      if (prevThemeChange == '전체상품') {
        the = ''
      }
      router.push(
        `/product-list/${router.query.params}?category1=${con}&category2=${age}&category3=${com}&category4=${the}&page=${router.query.page}&sort=${router.query.sort}`,
      )
    }
    if (title == 'continents') {
      setContinentChange(prevContinentChange)
      setPrevContinentChange(prevContinentChange)
      if (prevContinentChange == '전체상품') {
        router.push(
          `/product-list/${router.query.params}?category=&page=${router.query.page}&sort=${router.query.sort}`,
        )
      } else
        router.push(
          `/product-list/${router.query.params}?category=${prevContinentChange}&page=${router.query.page}&sort=${router.query.sort}`,
        )
    }
    if (title == 'ages') {
      setAgeChange(prevAgeChange)
      setPrevAgeChange(prevAgeChange)
      if (prevAgeChange == '전체상품') {
        router.push(
          `/product-list/${router.query.params}?category=&page=${router.query.page}&sort=${router.query.sort}`,
        )
      } else
        router.push(
          `/product-list/${router.query.params}?category=${prevAgeChange}&page=${router.query.page}&sort=${router.query.sort}`,
        )
    }
    if (title == 'companion') {
      setCompanionChange(prevCompanionChange)
      setPrevCompanionChange(prevCompanionChange)
      if (prevCompanionChange == '전체상품') {
        router.push(
          `/product-list/${router.query.params}?category=&page=${router.query.page}&sort=${router.query.sort}`,
        )
      } else
        router.push(
          `/product-list/${router.query.params}?category=${prevCompanionChange}&page=${router.query.page}&sort=${router.query.sort}`,
        )
    }
    if (title == 'themes') {
      setThemeChange(prevThemeChange)
      setPrevThemeChange(prevThemeChange)
      if (prevThemeChange == '전체상품') {
        router.push(
          `/product-list/${router.query.params}?category=&page=${router.query.page}&sort=${router.query.sort}`,
        )
      } else
        router.push(
          `/product-list/${router.query.params}?category=${prevThemeChange}&page=${router.query.page}&sort=${router.query.sort}`,
        )
    }
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <>
      {title == 'custom' ? <div className="category">추천 상품</div> : <></>}
      {title == 'custom' ? <div className="category">추천 상품</div> : <></>}
      {title == 'all' ? <div className="category">전체</div> : <></>}
      {title == 'companion' ? (
        <div className="category">유형별 여행</div>
      ) : (
        <></>
      )}
      {title == 'continents' ? (
        <div className="category">국가별 여행</div>
      ) : (
        <></>
      )}
      {title == 'ages' ? <div className="category">연령대별 여행</div> : <></>}
      {title == 'themes' ? <div className="category">테마별 여행</div> : <></>}

      {title == 'custom' ? <></> : <div className="categoryLine" />}
      <div className="selectBox_group">
        {title == 'all' || title == 'continents' ? (
          <div
            className="selectBoxArrow"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <input className="selectBox" value={continentChange} disabled />
            <div className="arrowDown">
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <></>
        )}

        {title == 'all' || title == 'ages' ? (
          <div
            className="selectBoxArrow"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <input className="selectBox" value={ageChange} disabled />
            <div className="arrowDown">
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <></>
        )}

        {title == 'all' || title == 'companion' ? (
          <div
            className="selectBoxArrow"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <input className="selectBox" value={companionChange} disabled />
            <div className="arrowDown">
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <></>
        )}

        {title == 'all' || title == 'themes' ? (
          <div
            className="selectBoxArrow"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <input className="selectBox" value={themeChange} disabled />
            <div className="arrowDown">
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <></>
        )}
        {modalIsOpen && (
          <div className="container" onClick={closeModal}>
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
              {title == 'all' || title == 'continents' ? (
                <>
                  <div className="top">
                    <div className="sharePhrases">국가 선택</div>
                  </div>
                  <div className="middle">
                    {continents.map((continent: string, index: number) => (
                      <span
                        key={index}
                        className="select"
                        onClick={() => prevChangeContinent(continent)}
                      >
                        {prevContinentChange == continent ? (
                          <div className="selectName">{continent}</div>
                        ) : (
                          <div className="name">{continent}</div>
                        )}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
              {title == 'all' || title == 'ages' ? (
                <>
                  <div className="top">
                    <div className="sharePhrasesA">연령대 선택</div>
                  </div>
                  <div className="middle">
                    {ages.map((age: string, index: number) => (
                      <span
                        key={index}
                        className="select"
                        onClick={() => prevChangeAge(age)}
                      >
                        {prevAgeChange == age ? (
                          <div className="selectName">{age}</div>
                        ) : (
                          <div className="name">{age}</div>
                        )}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
              {title == 'all' || title == 'companion' ? (
                <>
                  <div className="top">
                    <div className="sharePhrases">유형 선택</div>
                  </div>
                  <div className="middle">
                    {companions.map((companion: string, index: number) => (
                      <span
                        key={index}
                        className="select"
                        onClick={() => prevChangeCompanion(companion)}
                      >
                        {prevCompanionChange == companion ? (
                          <div className="selectName">{companion}</div>
                        ) : (
                          <div className="name">{companion}</div>
                        )}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
              {title == 'all' || title == 'themes' ? (
                <>
                  <div className="top">
                    <div className="sharePhrases">테마 선택</div>
                  </div>
                  <div className="middle">
                    {themes.map((theme: string, index: number) => (
                      <span
                        key={index}
                        className="select"
                        onClick={() => prevChangeTheme(theme)}
                      >
                        {prevThemeChange == theme ? (
                          <div className="selectName">{theme}</div>
                        ) : (
                          <div className="name">{theme}</div>
                        )}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="bottom">
                <div className="result" onClick={() => result(title)}>
                  결과보기
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="selectBoxLsine" />
      </div>

      <div className="totalFilter">
        <div className="productTotal">총 {data.data.totalElements}개 상품</div>
        <select className="selectBox" onChange={changeSort} value={sortChange}>
          <option value="">기본순</option>
          <option value="basicPrice,desc">높은 가격순</option>
          <option value="basicPrice">낮은 가격순</option>
        </select>
      </div>
      <div className="totalFilterLine" />

      <div className="productLists">
        {data.data.content.map(({ ...list }, index: number) => (
          <div className="productList" key={index}>
            <Link href={`/product-detail/${list.id}`}>
              <img
                src={list.thumbnail}
                alt="img"
                width="185px"
                height="185px"
                className="imgClick"
              />
            </Link>
            <span className="nation">{list.country}</span>
            <div className="title">{list.productName}</div>
            <div className="hashTags">
              <div className="hashTag">#{list.ages} &nbsp;</div>
              <div className="hashTag">#{list.theme} &nbsp;</div>
            </div>
            {list.basicPrice == 0 ? (
              <div className="price">가격 문의</div>
            ) : (
              <div className="price">
                {list.basicPrice.toLocaleString('ko-KR')}원
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let API_URL = ''

  if (query.params == 'all') {
    API_URL =
      process.env.NEXT_PUBLIC_API_URL +
      `/product-list/${query.params}?category1=${query.category1}&category2=${query.category2}&category3=${query.category3}&category4=${query.category4}&page=${query.page}&sort=${query.sort}`
  } else {
    API_URL =
      process.env.NEXT_PUBLIC_API_URL +
      `/product-list/${query.params}?category=${query.category}&page=${query.page}&sort=${query.sort}`
  }

  const response = await axios.get(encodeURI(API_URL))
  const data = await response.data
  return { props: { data } }
}

export default index
