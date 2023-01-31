import { useRequestMembersDetailMutation } from '@api/requestApi'
import HeadInfo from '@components/HeadInfo'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box, MenuItem, Select } from '@mui/material'
import { styled } from '@mui/material/styles'
import commonEn from '@public/locales/en/common.json'
import mainEn from '@public/locales/en/main.json'
import productListEn from '@public/locales/en/productList.json'
import productsEnglish from '@public/locales/en/products.json'
import commonKo from '@public/locales/ko/common.json'
import mainKo from '@public/locales/ko/main.json'
import productListKo from '@public/locales/ko/productList.json'
import productsKorean from '@public/locales/ko/products.json'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Pagination from 'react-js-pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

type data = {
  content: [
    {
      ages: string
      basicPrice: number
      companion: string
      country: string
      genderGroup: string
      id: number
      productName: string
      religion: string
      theme: string
      thumbnail: string
    },
  ]
  number: number
  numberOfElements: number
  pageable: {
    pageSize: number
  }
  totalElements: number
  totalPages: number
}

type listData = {
  ages: string
  basicPrice: number
  companion: string
  country: string
  genderGroup: string
  id: number
  productName: string
  religion: string
  theme: string
  thumbnail: string
}

type query = {
  query: {
    category: string
    category1?: string
    category2?: string
    category3?: string
    category4?: string
    page: string
    sort: string
    params: string
  }
}

type orderOptions = {
  label: string
  value: string
}[]

export default function productLists(data: data) {
  const router = useRouter()

  const { locale } = router
  const translateMain = locale === 'en' ? mainEn : mainKo
  const translateCommon = locale === 'en' ? commonEn : commonKo
  const translateProductList = locale === 'en' ? productListEn : productListKo
  const translateProducts = locale === 'en' ? productsEnglish : productsKorean

  const title: string | string[] | undefined = router.query.params

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
    '자녀를 동반하는 가족',
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

  const [requestMembersDetail]: any = useRequestMembersDetailMutation()

  const [page, setPage] = useState<number>(1)
  const handlePageChange = (page: number) => {
    setPage(page)
    if (router.query.params == 'all') {
      router.push(
        `/product-list/${router.query.params}?category1=${
          router.query.category1
        }&category2=${router.query.category2}&category3=${
          router.query.category3
        }&category4=${router.query.category4}&page=${
          page - 1
        }&sort=${sortChange}`,
      )
    } else
      router.push(
        `/product-list/${router.query.params}?category=${
          router.query.category
        }&page=${page - 1}&sort=${sortChange}`,
      )
  }
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
    handlePageChange(page)
  }, [page])

  const requestUserInfo = async (accessToken: string) => {
    try {
      const res = await requestMembersDetail({
        accessToken,
      })
      const { name } = res.data.data
      setUsername(name)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const changeSort = (e: any) => {
    setOrderOptionDuration(e.target.value)
    if (router.query.params == 'all') {
      if (e.target.value === 'all') {
        router.push(
          `/product-list/${router.query.params}?category1=${router.query.category1}&category2=${router.query.category2}&category3=${router.query.category3}&category4=${router.query.category4}&page=0&sort=`,
        )
      } else {
        router.push(
          `/product-list/${router.query.params}?category1=${router.query.category1}&category2=${router.query.category2}&category3=${router.query.category3}&category4=${router.query.category4}&page=0&sort=${e.target.value}`,
        )
      }
    } else {
      if (e.target.value === 'all') {
        router.push(
          `/product-list/${router.query.params}?category=${router.query.category}&page=0&sort=`,
        )
      } else {
        router.push(
          `/product-list/${router.query.params}?category=${router.query.category}&page=0&sort=${e.target.value}`,
        )
      }
    }
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

  const result = (title: string | string[] | undefined) => {
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
        `/product-list/${router.query.params}?category1=${con}&category2=${age}&category3=${com}&category4=${the}&page=0&sort=${router.query.sort}`,
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
          `/product-list/${router.query.params}?category=&page=0&sort=${router.query.sort}`,
        )
      } else
        router.push(
          `/product-list/${router.query.params}?category=${prevContinentChange}&page=0&sort=${router.query.sort}`,
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
          `/product-list/${router.query.params}?category=&page=0&sort=${router.query.sort}`,
        )
      } else
        router.push(
          `/product-list/${router.query.params}?category=${prevAgeChange}&page=0&sort=${router.query.sort}`,
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
          `/product-list/${router.query.params}?category=&page=0&sort=${router.query.sort}`,
        )
      } else
        router.push(
          `/product-list/${router.query.params}?category=${prevCompanionChange}&page=0&sort=${router.query.sort}`,
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
          `/product-list/${router.query.params}?category=&page=0&sort=${router.query.sort}`,
        )
      } else
        router.push(
          `/product-list/${router.query.params}?category=${prevThemeChange}&page=0&sort=${router.query.sort}`,
        )
    }
    setPage(1)
    setModalIsOpen(!modalIsOpen)
  }

  const StyledSection = styled('div')(() => ({
    backgroundColor: '#fff',
    padding: '1.6rem',
    marginBottom: '1.6rem',
  }))

  const orderOptions: orderOptions = [
    {
      label: '기본순',
      value: 'all',
    },
    {
      label: '높은 가격순',
      value: 'basicPrice,desc',
    },
    {
      label: '낮은 가격순',
      value: 'basicPrice',
    },
  ]

  const [orderOptionDuration, setOrderOptionDuration] = useState(
    orderOptions[0].value,
  )

  const getTitle = () => {
    if (title == 'custom' && username) {
      if (locale === 'ko') {
        return username + translateMain['님을 위한 추천 상품']
      } else if (locale === 'en') {
        return translateMain['님을 위한 추천 상품'] + username
      }
    } else if (title == 'custom' && !username) {
      return translateMain['오늘의 추천 상품']
    } else if (title == 'all') {
      return translateProductList['전체상품 페이지 제목']
    } else if (title == 'companion') {
      return translateProductList['유형별 페이지 제목']
    } else if (title == 'continents') {
      return translateProductList['국가별 페이지 제목']
    } else if (title == 'ages') {
      return translateProductList['연령대별 페이지 제목']
    } else if (title == 'themes') {
      return translateProductList['테마별 페이지 제목']
    } else {
      return translateMain['패키지 여행 상품 보기']
    }
  }

  useEffect(() => {
    getTitle()
  }, [])

  return (
    <>
      <HeadInfo title={translateProductList['페이지 제목'] + getTitle()} />
      {title == 'custom' && username ? (
        <div className="category">
          {locale === 'ko'
            ? username + translateMain['님을 위한 추천 상품']
            : translateMain['님을 위한 추천 상품'] + username}
        </div>
      ) : (
        <>
          {title == 'custom' ? (
            <div className="category">{translateMain['오늘의 추천 상품']}</div>
          ) : (
            <></>
          )}
        </>
      )}
      {title == 'all' ? (
        <div className="category">{translateCommon['전체상품']}</div>
      ) : (
        <></>
      )}
      {title == 'companion' ? (
        <div className="category">{translateCommon['유형별 여행']}</div>
      ) : (
        <></>
      )}
      {title == 'continents' ? (
        <div className="category">{translateCommon['국가별 여행']}</div>
      ) : (
        <></>
      )}
      {title == 'ages' ? (
        <div className="category">{translateCommon['연령대별 여행']}</div>
      ) : (
        <></>
      )}
      {title == 'themes' ? (
        <div className="category">{translateCommon['테마별 여행']}</div>
      ) : (
        <></>
      )}
      {title == 'custom' ? <></> : <div className="categoryLine" />}
      <div className="selectBox_group">
        <Swiper slidesPerView={4} spaceBetween={8}>
          {title == 'all' ? (
            <>
              <SwiperSlide className="selectBoxSwiper">
                <div>
                  {router.query.category1 == '' ? (
                    <div
                      className="selectBoxArrow"
                      onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                      <input
                        className="selectBox"
                        value={translateProductList[continentChange]}
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
                        value={translateCommon[router.query.category1]}
                        disabled
                      />
                      <div className="arrowDown">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>

              <SwiperSlide className="selectBoxSwiper">
                <div>
                  {router.query.category2 == '' ? (
                    <div
                      className="selectBoxArrow"
                      onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                      <input
                        className="selectBox"
                        value={translateProductList[ageChange]}
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
                        value={translateCommon[router.query.category2]}
                        disabled
                      />
                      <div className="arrowDown">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>

              <SwiperSlide className="selectBoxSwiper">
                <div>
                  {router.query.category3 == '' ? (
                    <div
                      className="selectBoxArrow"
                      onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                      <input
                        className="selectBox"
                        value={translateProductList[companionChange]}
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
                        value={translateCommon[router.query.category3]}
                        disabled
                      />
                      <div className="arrowDown">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>

              <SwiperSlide className="selectBoxSwiper">
                <div>
                  {router.query.category4 == '' ? (
                    <div
                      className="selectBoxArrow"
                      onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                      <input
                        className="selectBox"
                        value={translateProductList[themeChange]}
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
                        value={translateCommon[router.query.category4]}
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
                <input
                  className="selectBox"
                  value={translateProductList[continentChange]}
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
                  value={translateCommon[router.query.category]}
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
                <input
                  className="selectBox"
                  value={translateProductList[ageChange]}
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
                  value={translateCommon[router.query.category]}
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
                <input
                  className="selectBox"
                  value={translateProductList[companionChange]}
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
                  value={translateCommon[router.query.category]}
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
                <input
                  className="selectBox"
                  value={translateProductList[themeChange]}
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
                  value={translateCommon[router.query.category]}
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
                    <div className="sharePhrases">
                      {translateProductList['국가 선택']}
                    </div>
                  </div>
                  <div className="middle">
                    {continents &&
                      continents.map((continent: string, index: number) => (
                        <div key={index}>
                          {prevContinentChange == continent ? (
                            <span
                              className="selected"
                              onClick={() => prevChangeContinent(continent)}
                            >
                              <div className="selectName">
                                {translateCommon[continent]}
                              </div>
                            </span>
                          ) : (
                            <span
                              className="select"
                              onClick={() => prevChangeContinent(continent)}
                            >
                              <div className="name">
                                {translateCommon[continent]}
                              </div>
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
                    <div className="sharePhrases">
                      {translateProductList['연령대 선택']}
                    </div>
                  </div>
                  <div className="middle">
                    {ages &&
                      ages.map((age: string, index: number) => (
                        <div key={index}>
                          {prevAgeChange == age ? (
                            <span
                              className="selected"
                              onClick={() => prevChangeAge(age)}
                            >
                              <div className="selectName">
                                {translateCommon[age]}
                              </div>
                            </span>
                          ) : (
                            <span
                              className="select"
                              onClick={() => prevChangeAge(age)}
                            >
                              <div className="name">{translateCommon[age]}</div>
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
                    <div className="sharePhrases">
                      {translateProductList['유형 선택']}
                    </div>
                  </div>
                  <div className="middle">
                    {companions &&
                      companions.map((companion: string, index: number) => (
                        <div key={index}>
                          {prevCompanionChange == companion ? (
                            <span
                              className="selected"
                              onClick={() => prevChangeCompanion(companion)}
                            >
                              <div className="selectName">
                                {translateCommon[companion]}
                              </div>
                            </span>
                          ) : (
                            <span
                              className="select"
                              onClick={() => prevChangeCompanion(companion)}
                            >
                              <div className="name">
                                {translateCommon[companion]}
                              </div>
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
                    <div className="sharePhrases">
                      {translateProductList['테마 선택']}
                    </div>
                  </div>
                  <div className="middle">
                    {themes &&
                      themes.map((theme: string, index: number) => (
                        <div key={index}>
                          {prevThemeChange == theme ? (
                            <span
                              className="selected"
                              onClick={() => prevChangeTheme(theme)}
                            >
                              <div className="selectName">
                                {translateCommon[theme]}
                              </div>
                            </span>
                          ) : (
                            <span
                              className="select"
                              onClick={() => prevChangeTheme(theme)}
                            >
                              <div className="name">
                                {translateCommon[theme]}
                              </div>
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
                  {translateProductList['결과보기']}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="selectBoxLsine" />
      </div>
      <div className="totalFilter">
        <div className="productTotal">
          {translateProductList['총 상품']}
          <span className="productCount">&nbsp;{data.totalElements}</span>
          {translateProductList['개']}
        </div>
        <StyledSection className="selectBoxMui">
          <Box>
            <Select
              fullWidth
              size="small"
              value={orderOptionDuration}
              onChange={changeSort}
              sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 } }}
            >
              {orderOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {translateProductList[option.label]}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </StyledSection>
      </div>
      <div className="totalFilterLine" />
      <div className="productLists">
        {data &&
          data.content.map((list: listData, index: number) => (
            <div className="productList" key={index}>
              <Link href={`/product-details/${list.id}`}>
                <div className="clickProductDetail">
                  <img src={list.thumbnail} alt="img" className="imgClick" />
                  <span className="nation">
                    {translateProducts[list.country]}
                  </span>
                  <div className="title">
                    {translateProducts[list.productName]}
                  </div>
                  <div className="hashTags">
                    <div className="hashTag1">
                      #{translateProducts[list.ages]} &nbsp;
                    </div>
                    <div className="hashTag2">
                      {list.theme !== '상관 없음' &&
                        '#' + translateProducts[list.theme]}{' '}
                      &nbsp;
                    </div>
                  </div>
                  {list.basicPrice == 0 ? (
                    <div className="price">{translateMain['가격 문의']}</div>
                  ) : (
                    <div className="price">
                      {list.basicPrice.toLocaleString('ko-KR')}
                      {translateMain['원']}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className="paginationPosition">
        {data.totalElements ? (
          <Pagination
            activePage={page}
            itemsCountPerPage={data.pageable.pageSize}
            totalItemsCount={data.totalElements}
            pageRangeDisplayed={5}
            prevPageText={'‹'}
            nextPageText={'›'}
            onChange={handlePageChange}
          />
        ) : (
          <>{translateMain['상품을 준비중입니다...']}</>
        )}
      </div>
    </>
  )
}

export const getServerSideProps = async (context: query) => {
  let API_URL = ''

  if (context.query.params == 'all') {
    API_URL =
      process.env.NEXT_PUBLIC_API_URL +
      `/product-list/${context.query.params}?category1=${context.query.category1}&category2=${context.query.category2}&category3=${context.query.category3}&category4=${context.query.category4}&page=${context.query.page}&sort=${context.query.sort}`
  } else {
    API_URL =
      process.env.NEXT_PUBLIC_API_URL +
      `/product-list/${context.query.params}?category=${context.query.category}&page=${context.query.page}&sort=${context.query.sort}`
  }

  const response = await axios.get(encodeURI(API_URL))
  const data = response.data.data
  return { props: data }
}
