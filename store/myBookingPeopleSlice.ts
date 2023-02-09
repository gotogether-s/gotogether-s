import { createSlice } from '@reduxjs/toolkit'

const myBookingPeopleSlice = createSlice({
  name: 'myBookingPeopleSlice',
  initialState: [],
  reducers: {
    addMyBookingPeople: (state, action) => {
      return [...action.payload]
    },
  },
})

export default myBookingPeopleSlice

export const { addMyBookingPeople } = myBookingPeopleSlice.actions
