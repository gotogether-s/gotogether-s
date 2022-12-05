import { createSlice } from '@reduxjs/toolkit'

const displayModalWindowSlice = createSlice({
  name: 'displayModalWindowSlice',
  initialState: { isOpen: false },
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    },
  },
})

export default displayModalWindowSlice

export const { openModal, closeModal } = displayModalWindowSlice.actions
