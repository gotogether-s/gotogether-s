import { useState, useEffect } from 'react'
import axios from 'axios'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

type data = {
  id: string
  thumbnail: string
  theme: string
  country: string
  productName: string
  ages: string
  companion: string
  basicPrice: number
}

function index({ data }: any) {
  const router = useRouter()
  const title: any = router.query.params

  const [username, setUsername] = useState<string>('')

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const [ageChange, setAgeChange] = useState<string>('연령대')
  const [companionChange, setCompanionChange] = useState<string>('여행 유형')
  const [themeChange, setThemeChange] = useState<string>('여행 테마')
  const [continentChange, setContinentChange] = useState<string>('여행 국가')
  const [sortChange, setSortChange] = useState<string>('')

  const [prevAgeChange, setPrevAgeChange] = useState<string>('연령대')
  const [prevCompanionChange, setPrevCompanionChange] =
    useState<string>('여행 유형')
  const [prevThemeChange, setPrevThemeChange] = useState<string>('여행 테마')
  const [prevContinentChange, setPrevContinentChange] =
    useState<string>('여행 국가')

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
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
  }, [])

  const requestUserInfo = async (accessToken: string) => {
    console.log(accessToken)
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

  const changeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortChange(e.target.value)
    if (router.query.params == 'all') {
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

      if (
        prevContinentChange == '전체상품' ||
        prevContinentChange == '여행 국가' ||
        prevContinentChange == ''
      ) {
        setContinentChange('여행 국가')
        con = ''
      }
      if (
        prevAgeChange == '전체상품' ||
        prevAgeChange == '연령대' ||
        prevAgeChange == ''
      ) {
        setAgeChange('연령대')
        age = ''
      }
      if (
        prevCompanionChange == '전체상품' ||
        prevCompanionChange == '여행 유형' ||
        prevCompanionChange == ''
      ) {
        setCompanionChange('여행 유형')
        com = ''
      }
      if (
        prevThemeChange == '전체상품' ||
        prevThemeChange == '여행 테마' ||
        prevThemeChange == ''
      ) {
        setThemeChange('여행 테마')
        the = ''
      }
      router.push(
        `/product-list/${router.query.params}?category1=${con}&category2=${age}&category3=${com}&category4=${the}&page=${router.query.page}&sort=${router.query.sort}`,
      )
    }
    if (title == 'continents') {
      setContinentChange(prevContinentChange)
      setPrevContinentChange(prevContinentChange)
      if (
        prevContinentChange == '전체상품' ||
        prevContinentChange == '여행 국가' ||
        prevContinentChange == ''
      ) {
        setContinentChange('여행 국가')
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
      if (
        prevAgeChange == '전체상품' ||
        prevAgeChange == '연령대' ||
        prevAgeChange == ''
      ) {
        setAgeChange('연령대')
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
      if (
        prevCompanionChange == '전체상품' ||
        prevCompanionChange == '여행 유형' ||
        prevCompanionChange == ''
      ) {
        setCompanionChange('여행 유형')
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
      if (
        prevThemeChange == '전체상품' ||
        prevThemeChange == '여행 테마' ||
        prevThemeChange == ''
      ) {
        setThemeChange('여행 테마')
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
      {title == 'custom' && username ? (
        <div className="category">{username}님을 위한 추천 상품</div>
      ) : (
        <>
          {title == 'custom' ? (
            <div className="category">추천 상품</div>
          ) : (
            <></>
          )}
        </>
      )}
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
        <Swiper slidesPerView={3.1}>
          {title == 'all' ? (
            <>
              <SwiperSlide>
                <div>
                  {router.query.category1 == '' ? (
                    <div
                      className="selectBoxArrow"
                      onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                      <input
                        className="selectBox"
                        value={continentChange}
                        disabled
                      />
                      <div className="arrowDown">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="selectedBoxArrow"
                      onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                      <input
                        className="selectedBox"
                        value={router.query.category1}
                        disabled
                      />
                      <div className="arrowDown">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  {router.query.category2 == '' ? (
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
                    <div
                      className="selectedBoxArrow"
                      onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                      <input
                        className="selectedBox"
                        value={router.query.category2}
                        disabled
                      />
                      <div className="arrowDown">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  {router.query.category3 == '' ? (
                    <div
                      className="selectBoxArrow"
                      onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                      <input
                        className="selectBox"
                        value={companionChange}
                        disabled
                      />
                      <div className="arrowDown">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="selectedBoxArrow"
                      onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                      <input
                        className="selectedBox"
                        value={router.query.category3}
                        disabled
                      />
                      <div className="arrowDown">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  {router.query.category4 == '' ? (
                    <div
                      className="selectBoxArrow"
                      onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                      <input
                        className="selectBox"
                        value={themeChange}
                        disabled
                      />
                      <div className="arrowDown">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="selectedBoxArrow"
                      onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                      <input
                        className="selectedBox"
                        value={router.query.category4}
                        disabled
                      />
                      <div className="arrowDown">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            </>
          ) : (
            <></>
          )}
        </Swiper>

        {title == 'continents' ? (
          <div>
            {router.query.category == '' ? (
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
              <div
                className="selectedBoxArrow"
                onClick={() => setModalIsOpen(!modalIsOpen)}
              >
                <input
                  className="selectedBox"
                  value={router.query.category}
                  disabled
                />
                <div className="arrowDown">
                  <KeyboardArrowDownIcon fontSize="small" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}

        {title == 'ages' ? (
          <div>
            {router.query.category == '' ? (
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
              <div
                className="selectedBoxArrow"
                onClick={() => setModalIsOpen(!modalIsOpen)}
              >
                <input
                  className="selectedBox"
                  value={router.query.category}
                  disabled
                />
                <div className="arrowDown">
                  <KeyboardArrowDownIcon fontSize="small" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}

        {title == 'companion' ? (
          <div>
            {router.query.category == '' ? (
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
              <div
                className="selectedBoxArrow"
                onClick={() => setModalIsOpen(!modalIsOpen)}
              >
                <input
                  className="selectedBox"
                  value={router.query.category}
                  disabled
                />
                <div className="arrowDown">
                  <KeyboardArrowDownIcon fontSize="small" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}

        {title == 'themes' ? (
          <div>
            {router.query.category == '' ? (
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
              <div
                className="selectedBoxArrow"
                onClick={() => setModalIsOpen(!modalIsOpen)}
              >
                <input
                  className="selectedBox"
                  value={router.query.category}
                  disabled
                />
                <div className="arrowDown">
                  <KeyboardArrowDownIcon fontSize="small" />
                </div>
              </div>
            )}
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
                    {continents &&
                      continents.map((continent: string, index: number) => (
                        <div>
                          {prevContinentChange == continent ? (
                            <span
                              key={index}
                              className="selected"
                              onClick={() => prevChangeContinent(continent)}
                            >
                              <div className="selectName">{continent}</div>
                            </span>
                          ) : (
                            <span
                              key={index}
                              className="select"
                              onClick={() => prevChangeContinent(continent)}
                            >
                              <div className="name">{continent}</div>
                            </span>
                          )}
                        </div>
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
                    {ages &&
                      ages.map((age: string, index: number) => (
                        <div>
                          {prevAgeChange == age ? (
                            <span
                              key={index}
                              className="selected"
                              onClick={() => prevChangeAge(age)}
                            >
                              <div className="selectName">{age}</div>
                            </span>
                          ) : (
                            <span
                              key={index}
                              className="select"
                              onClick={() => prevChangeAge(age)}
                            >
                              <div className="name">{age}</div>
                            </span>
                          )}
                        </div>
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
                    {companions &&
                      companions.map((companion: string, index: number) => (
                        <div>
                          {prevCompanionChange == companion ? (
                            <span
                              key={index}
                              className="selected"
                              onClick={() => prevChangeCompanion(companion)}
                            >
                              <div className="selectName">{companion}</div>
                            </span>
                          ) : (
                            <span
                              key={index}
                              className="select"
                              onClick={() => prevChangeCompanion(companion)}
                            >
                              <div className="name">{companion}</div>
                            </span>
                          )}
                        </div>
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
                    {themes &&
                      themes.map((theme: string, index: number) => (
                        <div>
                          {prevThemeChange == theme ? (
                            <span
                              key={index}
                              className="selected"
                              onClick={() => prevChangeTheme(theme)}
                            >
                              <div className="selectName">{theme}</div>
                            </span>
                          ) : (
                            <span
                              key={index}
                              className="select"
                              onClick={() => prevChangeTheme(theme)}
                            >
                              <div className="name">{theme}</div>
                            </span>
                          )}
                        </div>
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
        <div className="productTotal">
          총 상품
          <span className="productCount">&nbsp;{data.data.totalElements}</span>
          개
        </div>
        <select className="selectBox" onChange={changeSort} value={sortChange}>
          <option value="">기본순</option>
          <option value="basicPrice,desc">높은 가격순</option>
          <option value="basicPrice">낮은 가격순</option>
        </select>
      </div>
      <div className="totalFilterLine" />

      <div className="productLists">
        {data &&
          data.data.content.map(({ ...list }: data, index: number) => (
            <div className="productList" key={index}>
              <Link href={`/product-details/${list.id}`}>
                <img src={list.thumbnail} alt="img" className="imgClick" />
              </Link>
              <span className="nation">{list.country}</span>
              <div className="title">{list.productName}</div>
              <div className="hashTags">
                <div className="hashTag1">#{list.ages} &nbsp;</div>
                <div className="hashTag2">#{list.theme} &nbsp;</div>
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
  const data = response.data
  return { props: { data } }
}

export default index
