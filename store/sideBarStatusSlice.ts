import { createSlice } from '@reduxjs/toolkit'

const sideBarStatusSlice = createSlice({
  name: 'sideBarStatusSlice',
  initialState: { sideBarOpen: false },
  reducers: {
    click: (state) => {
      state.sideBarOpen = !state.sideBarOpen
    },
    close: (state) => {
      state.sideBarOpen = false
    },
  },
})

export default sideBarStatusSlice

export const { click, close } = sideBarStatusSlice.actions
