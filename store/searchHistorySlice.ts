import { createSlice } from '@reduxjs/toolkit'

const searchHistorySlice = createSlice({
  name: 'searchHistorySlice',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
      state.forEach((s) => console.log(s))
    },
  },
})

export default searchHistorySlice

export const { add } = searchHistorySlice.actions
