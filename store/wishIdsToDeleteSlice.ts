import { createSlice } from '@reduxjs/toolkit'

const wishIdsToDeleteSlice = createSlice({
  name: 'wishIdsToDeleteSlice',
  initialState: [],
  reducers: {
    addWishIdsToDelete: (state, action) => {
      const wishIdsToDelete = action.payload
      state.push(wishIdsToDelete)
    },
    removeWishIdsToDelete: (state, action) => {
      const wishIdsToDelete = action.payload
      const index = state.findIndex((element) => element === wishIdsToDelete)
      state.splice(index, 1)
    },
  },
})

export default wishIdsToDeleteSlice

export const { addWishIdsToDelete, removeWishIdsToDelete } =
  wishIdsToDeleteSlice.actions
