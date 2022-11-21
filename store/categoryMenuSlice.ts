import { createSlice } from '@reduxjs/toolkit'

type categoryMenuState = {
  label: string
  open: boolean
  subMenus: { label: string; link: string }[]
}[]

const initialState: categoryMenuState = [
  {
    label: '국가별 여행',
    open: false,
    subMenus: [
      {
        label: '전체',
        link: '/product-list/continents?category=&page=0&sort=',
      },
      {
        label: '괌&사이판&하와이',
        link: encodeURI(
          '/product-list/continents?category=괌,사이판,하와이&page=0&sort=',
        ),
      },
      {
        label: '동남아시아',
        link: encodeURI(
          '/product-list/continents?category=동남아시아&page=0&sort=',
        ),
      },
      {
        label: '동남아프리카',
        link: encodeURI(
          '/product-list/continents?category=동남아프리카&page=0&sort=',
        ),
      },
      {
        label: '대만',
        link: encodeURI('/product-list/continents?category=대만&page=0&sort='),
      },
      {
        label: '북미',
        link: encodeURI('/product-list/continents?category=북미&page=0&sort='),
      },
      {
        label: '북아프리카/중동',
        link: encodeURI(
          '/product-list/continents?category=북아프리카,중동&page=0&sort=',
        ),
      },
      {
        label: '인도/주변국',
        link: encodeURI(
          '/product-list/continents?category=인도,주변국&page=0&sort=',
        ),
      },
      {
        label: '유럽',
        link: encodeURI('/product-list/continents?category=유럽&page=0&sort='),
      },
      {
        label: '일본',
        link: encodeURI('/product-list/continents?category=일본&page=0&sort='),
      },
      {
        label: '중국',
        link: encodeURI('/product-list/continents?category=중국&page=0&sort='),
      },
      {
        label: '중남미',
        link: encodeURI(
          '/product-list/continents?category=중남미&page=0&sort=',
        ),
      },
      {
        label: '중앙아시아',
        link: encodeURI(
          '/product-list/continents?category=중앙아시아&page=0&sort=',
        ),
      },
      {
        label: '코카서스',
        link: encodeURI(
          '/product-list/continents?category=코카서스&page=0&sort=',
        ),
      },
      {
        label: '호주/뉴질랜드',
        link: encodeURI(
          '/product-list/continents?category=호주,뉴질랜드&page=0&sort=',
        ),
      },
    ],
  },
  {
    label: '연령대별 여행',
    open: false,
    subMenus: [
      {
        label: '전체',
        link: '/product-list/ages?category=&page=0&sort=',
      },
      {
        label: '10대',
        link: encodeURI('/product-list/ages?category=10대&page=0&sort='),
      },
      {
        label: '20대',
        link: encodeURI('/product-list/ages?category=20대&page=0&sort='),
      },
      {
        label: '30대',
        link: encodeURI('/product-list/ages?category=30대&page=0&sort='),
      },
      {
        label: '40대',
        link: encodeURI('/product-list/ages?category=40대&page=0&sort='),
      },
      {
        label: '50대',
        link: encodeURI('/product-list/ages?category=50대&page=0&sort='),
      },
      {
        label: '60대',
        link: encodeURI('/product-list/ages?category=60대&page=0&sort='),
      },
      {
        label: '70대 이상',
        link: encodeURI('/product-list/ages?category=70대 이상&page=0&sort='),
      },
    ],
  },
  {
    label: '유형별 여행',
    open: false,
    subMenus: [
      { label: '전체', link: '/product-list/companion?category=&page=0&sort=' },
      {
        label: '남자끼리',
        link: encodeURI(
          `/product-list/companion?category=남자끼리&page=0&sort=`,
        ),
      },
      {
        label: '여자끼리',
        link: encodeURI(
          `/product-list/companion?category=여자끼리&page=0&sort=`,
        ),
      },
      {
        label: '나홀로 참가',
        link: encodeURI(
          `/product-list/companion?category=나홀로 참가&page=0&sort=`,
        ),
      },
      {
        label: '친구나 동료',
        link: encodeURI(
          `/product-list/companion?category=친구나 동료&page=0&sort=`,
        ),
      },
      {
        label: '연인이나 부부',
        link: encodeURI(
          `/product-list/companion?category=연인이나 부부&page=0&sort=`,
        ),
      },
      {
        label: '자녀를 동반 가족',
        link: encodeURI(
          `/product-list/companion?category=자녀를 동반 가족&page=0&sort=`,
        ),
      },
    ],
  },
  {
    label: '테마별 여행',
    open: false,
    subMenus: [
      { label: '전체', link: '/product-list/themes?category=&page=0&sort=' },
      {
        label: '문화탐방',
        link: encodeURI('/product-list/themes?category=문화탐방&page=0&sort='),
      },
      {
        label: '골프여행',
        link: encodeURI('/product-list/themes?category=골프여행&page=0&sort='),
      },
      {
        label: '리조트 휴양 및 힐링',
        link: encodeURI(
          '/product-list/themes?category=리조트 휴양 및 힐링&page=0&sort=',
        ),
      },
      {
        label: '오지여행',
        link: encodeURI('/product-list/themes?category=오지여행&page=0&sort='),
      },
      {
        label: '트레킹여행',
        link: encodeURI(
          '/product-list/themes?category=트레킹여행&page=0&sort=',
        ),
      },
      {
        label: '봉사활동',
        link: encodeURI('/product-list/themes?category=봉사활동&page=0&sort='),
      },
      {
        label: '성지순례',
        link: encodeURI('/product-list/themes?category=성지순례&page=0&sort='),
      },
    ],
  },
]

const categroyMenuSlice = createSlice({
  name: 'categroyMenuSlice',
  initialState: initialState,
  reducers: {
    toggleCategorySubMenu: (state, action) => {
      state.map((s, i) =>
        i === action.payload
          ? (s.open = !state[action.payload].open)
          : (s.open = false),
      )
    },
  },
})

export default categroyMenuSlice

export const { toggleCategorySubMenu } = categroyMenuSlice.actions
