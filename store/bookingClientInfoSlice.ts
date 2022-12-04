import { createSlice } from '@reduxjs/toolkit'

const bookingClientInfoSlice = createSlice({
  name: 'bookingClientInfoSlice',
  initialState: {
    name: '',
    phone: '',
  },
  reducers: {
    updateBookingClientInfo: (state, action) => {
      if (action.payload.name || action.payload.name === '') {
        state.name = action.payload.name
      }
      if (action.payload.phone || action.payload.phone === '') {
        state.phone = action.payload.phone
      }
    },
  },
})

export default bookingClientInfoSlice

export const { updateBookingClientInfo } = bookingClientInfoSlice.actions
