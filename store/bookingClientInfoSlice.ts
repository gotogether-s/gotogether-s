import { createSlice } from '@reduxjs/toolkit'

const bookingClientInfoSlice = createSlice({
  name: 'bookingClientInfoSlice',
  initialState: {
    name: '',
    phoneNumber: '',
  },
  reducers: {
    updateBookingClientInfo: (state, action) => {
      const { name, phoneNumber } = action.payload
      if (name || name === '') {
        state.name = name
      }
      if (phoneNumber || phoneNumber === '') {
        state.phoneNumber = phoneNumber
      }
    },
  },
})

export default bookingClientInfoSlice

export const { updateBookingClientInfo } = bookingClientInfoSlice.actions
