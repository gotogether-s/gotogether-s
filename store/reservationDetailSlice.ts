import { createSlice } from '@reduxjs/toolkit'

type reservationInfo = {
  productName: string
  airport: string
  productOptionList: string
  basicPrice: number
}

const initialState: reservationInfo = {
  productName: '',
  airport: '',
  productOptionList: '',
  basicPrice: 0,
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
    },
    reset: (state) => {
      state = {
        productName: '',
        airport: '',
        productOptionList: '',
        basicPrice: 0,
      }
    },
  },
})

export default reservationDetailSlice

export const { reservation, reset } = reservationDetailSlice.actions
