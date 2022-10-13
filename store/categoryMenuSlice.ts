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
      { label: '전체', link: '/' },
      { label: '괌&사이판&하와이', link: '/' },
      { label: '동남아시아', link: '/' },
      { label: '동남아프리카', link: '/' },
      { label: '대만', link: '/' },
      { label: '북미', link: '/' },
      { label: '북아프리카/중동', link: '/' },
      { label: '인도/주변국', link: '/' },
      { label: '유럽', link: '/' },
      { label: '일본', link: '/' },
      { label: '중국', link: '/' },
      { label: '중남미', link: '/' },
      { label: '중앙아시아', link: '/' },
      { label: '코카서스', link: '/' },
      { label: '호주/뉴질랜드', link: '/' },
    ],
  },
  {
    label: '연령대별 여행',
    open: false,
    subMenus: [
      { label: '전체', link: '/' },
      { label: '10대', link: '/' },
      { label: '20대', link: '/' },
      { label: '30대', link: '/' },
      { label: '40대', link: '/' },
      { label: '50대', link: '/' },
      { label: '60대', link: '/' },
      { label: '70대 이상', link: '/' },
    ],
  },
  {
    label: '유형별 여행',
    open: false,
    subMenus: [
      { label: '전체', link: '/' },
      { label: '남자끼리', link: '/' },
      { label: '여자끼리', link: '/' },
      { label: '나홀로 참가', link: '/' },
      { label: '친구나 동료', link: '/' },
      { label: '연인이나 부부', link: '/' },
      { label: '자녀동반', link: '/' },
    ],
  },
  {
    label: '테마별 여행',
    open: false,
    subMenus: [
      { label: '전체', link: '/' },
      { label: '문화탐방', link: '/' },
      { label: '골프여행', link: '/' },
      { label: '휴양지', link: '/' },
      { label: '트레킹', link: '/' },
      { label: '성지순례', link: '/' },
      { label: '볼론투어', link: '/' },
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
