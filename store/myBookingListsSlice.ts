import { createSlice } from '@reduxjs/toolkit'

const myBookingListsSlice = createSlice({
  name: 'myBookingListsSlice',
  initialState: [],
  reducers: {
    addMyBookingList: (state, action) => {
      state.splice(0, state.length)
      const myBookingLists = action.payload
      myBookingLists.map((list) => state.push(list))
    },
    removeMyBookingList: (state, action) => {
      const index = action.payload
      state.splice(index, 1)
    },
  },
})

export default myBookingListsSlice

export const { addMyBookingList, removeMyBookingList } =
  myBookingListsSlice.actions
