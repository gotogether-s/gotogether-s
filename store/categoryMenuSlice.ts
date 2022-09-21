import { createSlice } from '@reduxjs/toolkit'

type categoryMenuState = {
  label: string
  open: boolean
  subMenus: { label: string; href: string }[]
}[]

const initialState: categoryMenuState = [
  {
    label: '국가별 여행',
    open: false,
    subMenus: [
      { label: '전체', href: '#' },
      { label: '동남아/태평양', href: '#' },
      { label: '인도/중앙', href: '#' },
      { label: '아프리카/중동', href: '#' },
      { label: '유럽/코카서스', href: '#' },
      { label: '중남미/북미', href: '#' },
    ],
  },
  {
    label: '그룹별 여행',
    open: false,
    subMenus: [
      { label: '전체', href: '#' },
      { label: '5070끼리', href: '#' },
      { label: '2040끼리', href: '#' },
      { label: '남자끼리', href: '#' },
      { label: '여자끼리', href: '#' },
      { label: '자녀동반', href: '#' },
      { label: '누구든지', href: '#' },
    ],
  },
  {
    label: '테마별 여행',
    open: false,
    subMenus: [
      { label: '전체', href: '#' },
      { label: '문화탐방', href: '#' },
      { label: '골프여행', href: '#' },
      { label: '휴양지', href: '#' },
      { label: '트레킹', href: '#' },
      { label: '성지순례', href: '#' },
      { label: '볼론투어', href: '#' },
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
