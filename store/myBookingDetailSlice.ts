import { createSlice } from '@reduxjs/toolkit'

const myBookingDetailSlice = createSlice({
  name: 'myBookingDetailSlice',
  initialState: {},
  reducers: {
    addMyBookingDetail: (state, action) => {
      return { ...action.payload }
    },
  },
})

export default myBookingDetailSlice

export const { addMyBookingDetail } = myBookingDetailSlice.actions
