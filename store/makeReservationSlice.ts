import { createSlice } from '@reduxjs/toolkit'

const makeReservationSlice = createSlice({
  name: 'makeReservationSlice',
  initialState: {
    product_id: '',
    reservationDto: {
      duration: '',
      firstSelectOption: '',
      secondSelectOption: '',
      thirdSelectOption: '',
      totalBasicPrice: 0,
      totalFirstSelectOptionCount: 0,
      totalFirstSelectOptionPrice: 0,
      totalPrice: 0,
      totalReservationPeople: 0,
      totalSecondSelectOptionCount: 0,
      totalSecondSelectOptionPrice: 0,
      totalThirdSelectOptionCount: 0,
      totalThirdSelectOptionPrice: 0,
    },
    reservationPersonListDto: [
      {
        name: '',
        phoneNumber: '',
        role: true,
      },
    ],
  },
  reducers: {
    updateReservationDetail: (state, action) => {
      const { product_id, reservationDto } = action.payload
      if (product_id) {
        state.product_id = product_id
      }
      if (reservationDto) {
        Object.keys(reservationDto).map((element) => {
          state.reservationDto[`${element}`] = reservationDto[`${element}`]
        })
      }
    },
    createReservationPersonList: (state) => {
      state.reservationPersonListDto.push({
        name: '',
        phoneNumber: '',
        role: false,
      })
    },
    deleteReservationPersonList: (state) => {
      state.reservationPersonListDto.pop()
    },
    updateReservationPersonInfo: (state, action) => {
      const { name, phoneNumber, index } = action.payload
      if (name || name === '') {
        state.reservationPersonListDto[index].name = name
      }
      if (phoneNumber || phoneNumber === '') {
        state.reservationPersonListDto[index].phoneNumber = phoneNumber
      }
    },
  },
})

export default makeReservationSlice

export const {
  updateReservationDetail,
  createReservationPersonList,
  deleteReservationPersonList,
  updateReservationPersonInfo,
} = makeReservationSlice.actions
