import { createSlice } from '@reduxjs/toolkit'

const bookingAndLikesNumberSlice = createSlice({
  name: 'bookingAndLikesNumberSlice',
  initialState: { theNumberOfBooking: 0, theNumberOfLikes: 0 },
  reducers: {
    updateTheNumberOfBooking: (state, action) => {
      state.theNumberOfBooking = action.payload
    },
    updateTheNumberOfLikes: (state, action) => {
      state.theNumberOfLikes = action.payload
    },
  },
})

export default bookingAndLikesNumberSlice

export const { updateTheNumberOfBooking, updateTheNumberOfLikes } =
  bookingAndLikesNumberSlice.actions
