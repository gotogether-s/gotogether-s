import { createSlice } from '@reduxjs/toolkit'

type reservationInfo = {
  productId: number
  productName: string
  airport: string
  productOptionList: string
  basicPrice: number
  thumbnail: string
}

const initialState: reservationInfo = {
  productId: 0,
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
      state.productId = action.payload.productId
      state.productName = action.payload.productName
      state.airport = action.payload.airport
      state.productOptionList = action.payload.productOptionList
      state.basicPrice = action.payload.basicPrice
      state.thumbnail = action.payload.thumbnail
    },
    reset: (state) => {
      state = {
        productId: 0,
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
