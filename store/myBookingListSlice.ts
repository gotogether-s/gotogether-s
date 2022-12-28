import { createSlice } from '@reduxjs/toolkit'

const myBookingListSlice = createSlice({
  name: 'myBookingListSlice',
  initialState: [],
  reducers: {
    addMyBookingList: (state, action) => {
      console.log(action.payload)
      const myBookingLists = action.payload
      myBookingLists.map((list) => state.push(list))
    },
    removeMyBookingList: (state, action) => {},
  },
})

export default myBookingListSlice

export const { addMyBookingList, removeMyBookingList } =
  myBookingListSlice.actions
