import { createSlice } from '@reduxjs/toolkit'

const likedItemsSlice = createSlice({
  name: 'likedItemsSlice',
  initialState: [],
  reducers: {
    addLikedItems: (state, action) => {
      return [...action.payload]
    },
    removeLikedItem: (state, action) => {
      const index = action.payload
      state.splice(index, 1)
    },
    findAndRemoveLikedItem: (state, action) => {
      const likedItemsToDelete = action.payload
      Array.from(Array(state.length).keys())
        .reverse()
        .forEach(
          (index) =>
            likedItemsToDelete.some(
              (wish_id) => wish_id === state[index].wish_id,
            ) && state.splice(index, 1),
        )
    },
  },
})

export default likedItemsSlice

export const { addLikedItems, removeLikedItem, findAndRemoveLikedItem } =
  likedItemsSlice.actions
