import { createSlice } from '@reduxjs/toolkit'

const bookingClientInfoSlice = createSlice({
  name: 'bookingClientInfoSlice',
  initialState: {
    name: '',
    phone: '',
  },
  reducers: {
    updateBookingClientInfo: (state, action) => {
      const { name, phone } = action.payload
      if (name || name === '') {
        state.name = name
      }
      if (phone || phone === '') {
        state.phone = phone
      }
    },
  },
})

export default bookingClientInfoSlice

export const { updateBookingClientInfo } = bookingClientInfoSlice.actions
