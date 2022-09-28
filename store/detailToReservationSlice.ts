import { createSlice } from '@reduxjs/toolkit'

const detailToReservationSlice = createSlice({
  name: 'detailToReservationSlice',
  initialState: {
    departure: '',
    etc1: '',
    etc2: '',
    etc3: '',
  },
  reducers: {
    info: (state, action) => {
      state.departure = action.payload.departure
      state.etc1 = action.payload.etc1
      state.etc2 = action.payload.etc2
      state.etc3 = action.payload.etc3
    },
    reset: (state) => {
      state = {
        departure: '',
        etc1: '',
        etc2: '',
        etc3: '',
      }
    },
  },
})

export default detailToReservationSlice

export const { info, reset } = detailToReservationSlice.actions
