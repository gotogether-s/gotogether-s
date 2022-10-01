import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  departure: string
  etc1: string | null
  etc2: string | null
  etc3: string | null
}

const initialState: initialStateType = {
  departure: '',
  etc1: '',
  etc2: '',
  etc3: '',
}

const detailToReservationSlice = createSlice({
  name: 'detailToReservationSlice',
  initialState,
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
