import { createSlice } from '@reduxjs/toolkit'

type mainMenuState = {
  label: string
}[]

const mainMenuSlice: mainMenuState = createSlice({
  name: 'mainMenuSlice',
  initialState: [
    {
      label: '내 정보',
    },
    {
      label: '주문/예약 확인 및 취소',
    },
    {
      label: '여행지 추천 받기',
    },
  ],
  reducers: {},
})

export default mainMenuSlice
