import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  ages: string
  api: string
}

const initialState: initialStateType = {
  ages: '전체',
  api: 'ages',
}

const searchAgesSlice = createSlice({
  name: 'searchAgesSlice',
  initialState,
  reducers: {
    searchAges: (state, action) => {
      state.ages = action.payload.age
    },
  },
})

export default searchAgesSlice

export const { searchAges } = searchAgesSlice.actions
