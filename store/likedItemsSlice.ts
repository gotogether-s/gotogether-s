import { createSlice } from '@reduxjs/toolkit'

const likedItemsSlice = createSlice({
  name: 'likedItemsSlice',
  initialState: [],
  reducers: {
    add: (state, action) => {
      const likedItems = action.payload
      for (let likedItem of likedItems) {
        state.push(likedItem)
      }
    },
    remove: (state, action) => {
      const index = action.payload
      state.splice(index, 1)
    },
    findAndRemove: (state, action) => {
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

export const { add, remove, findAndRemove } = likedItemsSlice.actions
