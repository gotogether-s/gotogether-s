import { createSlice } from '@reduxjs/toolkit'

type reservationInfo = {
  productName: string
  airport: string
  productOptionList: string
  basicPrice: number
  thumbnail: string
}

const initialState: reservationInfo = {
  productName: '',
  airport: '',
  productOptionList: '',
  basicPrice: 0,
  thumbnail: '',
}

const reservationDetailSlice = createSlice({
  name: 'reservationSlice',
  initialState,
  reducers: {
    reservation: (state, action) => {
      state.productName = action.payload.productName
      state.airport = action.payload.airport
      state.productOptionList = action.payload.productOptionList
      state.basicPrice = action.payload.basicPrice
      state.thumbnail = action.payload.thumbnail
    },
    reset: (state) => {
      state = {
        productName: '',
        airport: '',
        productOptionList: '',
        basicPrice: 0,
        thumbnail: '',
      }
    },
  },
})

export default reservationDetailSlice

export const { reservation, reset } = reservationDetailSlice.actions
