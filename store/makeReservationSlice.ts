import { createSlice } from '@reduxjs/toolkit'

const makeReservationSlice = createSlice({
  name: 'makeReservationSlice',
  initialState: {
    product_id: 1,
    reservationDto: {
      totalReservationPeople: 0,
      totalBasicPrice: 0,
      firstSelectOption: '',
      totalFirstSelectOptionCount: 0,
      totalFirstSelectOptionPrice: 0,
      secondSelectOption: '',
      totalSecondSelectOptionCount: 0,
      totalSecondSelectOptionPrice: 0,
      thirdSelectOption: '',
      totalThirdSelectOptionCount: 0,
      totalThirdSelectOptionPrice: 0,
      totalPrice: 0,
      duration: '',
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
    createReservationPersonList: (state) => {
      state.reservationPersonListDto.push({
        name: '',
        phoneNumber: '',
        role: false,
      })
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

export const { createReservationPersonList, updateReservationPersonInfo } =
  makeReservationSlice.actions
