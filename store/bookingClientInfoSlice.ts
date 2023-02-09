import { createSlice } from '@reduxjs/toolkit'

type bookingClientInfoState = {
  name: string
  phoneNumber: string
}

const initialState: bookingClientInfoState = {
  name: '',
  phoneNumber: '',
}

const bookingClientInfoSlice = createSlice({
  name: 'bookingClientInfoSlice',
  initialState: initialState,
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
    resetBookingClientInfo: () => initialState,
  },
})

export default bookingClientInfoSlice

export const { updateBookingClientInfo, resetBookingClientInfo } =
  bookingClientInfoSlice.actions
