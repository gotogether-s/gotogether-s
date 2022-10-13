import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import style from './ProductLists.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function index() {
  const viewProductList = useSelector((state: any) => {
    return state.persistedReducer.viewProductList
  })
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [sortChange, setSortChange] = useState<string>('')
  const [prevAgeChange, setPrevAgeChange] = useState<string>('상관 없음')
  const [prevCompanionChange, setPrevCompanionChange] =
    useState<string>('상관 없음')
  const [prevThemeChange, setPrevThemeChange] = useState<string>('상관 없음')
  const [prevContinentChange, setPrevContinentChange] =
    useState<string>('전체상품')
  const [isAgeChange, setIsAgeChange] = useState<boolean>(false)
  const [isCompanionChange, setIsCompanionChange] = useState<boolean>(false)
  const [isThemeChange, setIsThemeChange] = useState<boolean>(false)
  const [isContinentChange, setIsContinentChange] = useState<boolean>(false)
  const [ageChange, setAgeChange] = useState<string>('상관 없음')
  const [companionChange, setCompanionChange] = useState<string>('상관 없음')
  const [themeChange, setThemeChange] = useState<string>('상관 없음')
  const [continentChange, setContinentChange] = useState<string>('전체상품')

  const ages: string[] = [
    '상관 없음',
    '10대',
    '20대',
    '30대',
    '40대',
    '50대',
    '60대',
    '70대 이상',
  ]
  const companions: string[] = [
    '상관 없음',
    '남자끼리',
    '여자끼리',
    '나홀로 참가',
    '친구나 동료',
    '연인이나 부부',
    '자녀를 동반 가족',
  ]
  const themes: string[] = [
    '상관 없음',
    '문화탐방',
    '골프여행',
    '휴양지',
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
    '코카서스',
    '호주,뉴질랜드',
  ]

  const changeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortChange(e.target.value)
  }
  const prevChangeContinent = (e: string) => {
    setPrevContinentChange(e)
    setIsContinentChange(true)
  }
  const prevChangeAge = (e: string) => {
    setPrevAgeChange(e)
    setIsAgeChange(true)
  }
  const prevChangeTheme = (e: string) => {
    setPrevThemeChange(e)
    setIsThemeChange(true)
  }
  const prevChangeCompanion = (e: string) => {
    setPrevCompanionChange(e)
    setIsCompanionChange(true)
  }

  const closeModal = () => {
    if (isContinentChange) {
      setModalIsOpen(!modalIsOpen)
      setContinentChange(prevContinentChange)
    }
    if (isAgeChange) {
      setModalIsOpen(!modalIsOpen)
      setAgeChange(prevAgeChange)
    }
    if (isCompanionChange) {
      setModalIsOpen(!modalIsOpen)
      setCompanionChange(prevCompanionChange)
    }
    if (isThemeChange) {
      setThemeChange(prevThemeChange)
      setModalIsOpen(!modalIsOpen)
    } else setModalIsOpen(!modalIsOpen)
  }
  return (
    <>
      <div className={style.category}>{viewProductList.name}</div>
      {viewProductList.api == 'custom' ? (
        <></>
      ) : (
        <div className={style.categoryLine} />
      )}
      <div className={style.selectBox_group}>
        {viewProductList.api == 'all' || viewProductList.api == 'continents' ? (
          <div
            className={style.selectBoxArrow}
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <input
              className={style.selectBox}
              value={continentChange}
              disabled
            />
            <div className={style.arrowDown}>
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <></>
        )}

        {viewProductList.api == 'all' || viewProductList.api == 'ages' ? (
          <div
            className={style.selectBoxArrow}
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <input className={style.selectBox} value={ageChange} disabled />
            <div className={style.arrowDown}>
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <></>
        )}

        {viewProductList.api == 'all' || viewProductList.api == 'companion' ? (
          <div
            className={style.selectBoxArrow}
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <input
              className={style.selectBox}
              value={companionChange}
              disabled
            />
            <div className={style.arrowDown}>
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <></>
        )}

        {viewProductList.api == 'all' || viewProductList.api == 'themes' ? (
          <div
            className={style.selectBoxArrow}
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <input className={style.selectBox} value={themeChange} disabled />
            <div className={style.arrowDown}>
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <></>
        )}
        {modalIsOpen && (
          <div className={style.container}>
            <div className={style.modalBody}>
              {viewProductList.api == 'all' ||
              viewProductList.api == 'continents' ? (
                <>
                  <div className={style.top}>
                    <div className={style.sharePhrases}>국가 선택</div>
                  </div>
                  <div className={style.middle}>
                    {continents.map((continent: string, index: number) => (
                      <span
                        key={index}
                        className={style.select}
                        onClick={() => prevChangeContinent(continent)}
                      >
                        {prevContinentChange == continent ? (
                          <div className={style.selectName}>{continent}</div>
                        ) : (
                          <div className={style.name}>{continent}</div>
                        )}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
              {viewProductList.api == 'all' || viewProductList.api == 'ages' ? (
                <>
                  <div className={style.top}>
                    <div className={style.sharePhrasesA}>연령대 선택</div>
                  </div>
                  <div className={style.middle}>
                    {ages.map((age: string, index: number) => (
                      <span
                        key={index}
                        className={style.select}
                        onClick={() => prevChangeAge(age)}
                      >
                        {prevAgeChange == age ? (
                          <div className={style.selectName}>{age}</div>
                        ) : (
                          <div className={style.name}>{age}</div>
                        )}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
              {viewProductList.api == 'all' ||
              viewProductList.api == 'companion' ? (
                <>
                  <div className={style.top}>
                    <div className={style.sharePhrases}>유형 선택</div>
                  </div>
                  <div className={style.middle}>
                    {companions.map((companion: string, index: number) => (
                      <span
                        key={index}
                        className={style.select}
                        onClick={() => prevChangeCompanion(companion)}
                      >
                        {prevCompanionChange == companion ? (
                          <div className={style.selectName}>{companion}</div>
                        ) : (
                          <div className={style.name}>{companion}</div>
                        )}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
              {viewProductList.api == 'all' ||
              viewProductList.api == 'themes' ? (
                <>
                  <div className={style.top}>
                    <div className={style.sharePhrases}>테마 선택</div>
                  </div>
                  <div className={style.middle}>
                    {themes.map((theme: string, index: number) => (
                      <span
                        key={index}
                        className={style.select}
                        onClick={() => prevChangeTheme(theme)}
                      >
                        {prevThemeChange == theme ? (
                          <div className={style.selectName}>{theme}</div>
                        ) : (
                          <div className={style.name}>{theme}</div>
                        )}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className={style.bottom}>
                <div className={style.result} onClick={closeModal}>
                  결과보기
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={style.selectBoxLsine} />
      </div>

      <div className={style.totalFilter}>
        <div className={style.productTotal}>총 00개 상품</div>
        <select
          className={style.selectBox}
          onChange={changeSort}
          value={sortChange}
        >
          <option value="">기본순</option>
          <option value="basicPrice">높은 가격순</option>
          <option value="basicPrice,desc">낮은 가격순</option>
        </select>
      </div>
      <div className={style.totalFilterLine} />

      <div className={style.productLists}>
        <div className={style.productList}>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="185px"
            height="185px"
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </div>
        <div className={style.productList}>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="185px"
            height="185px"
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </div>
      </div>
    </>
  )
}

export default index
