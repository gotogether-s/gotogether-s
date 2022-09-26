import { createSlice } from '@reduxjs/toolkit'

const searchHistorySlice = createSlice({
  name: 'searchHistorySlice',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state, action) => {
      state.splice(action.payload, 1)
    },
  },
})

export default searchHistorySlice

export const { add, remove } = searchHistorySlice.actions
