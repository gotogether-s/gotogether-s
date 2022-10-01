import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  name: string
  api: string
}

const initialState: initialStateType = {
  name: '',
  api: '',
}

const viewProductListSlice = createSlice({
  name: 'viewProductListSlice',
  initialState,
  reducers: {
    view: (state, action) => {
      state.name = action.payload.name
      state.api = action.payload.api
    },
  },
})

export default viewProductListSlice

export const { view } = viewProductListSlice.actions
