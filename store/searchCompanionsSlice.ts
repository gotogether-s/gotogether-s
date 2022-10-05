import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  companion: string
  api: string
}

const initialState: initialStateType = {
  companion: '전체',
  api: 'companion',
}

const searchCompanionsSlice = createSlice({
  name: 'searchCompanionsSlice',
  initialState,
  reducers: {
    searchCompanions: (state, action) => {
      state.companion = action.payload.companion
    },
  },
})

export default searchCompanionsSlice

export const { searchCompanions } = searchCompanionsSlice.actions
