import { configureStore } from '@reduxjs/toolkit'
import categoryMenuSlice from './categoryMenuSlice'

const store = configureStore({
  reducer: {
    categoryMenu: categoryMenuSlice.reducer,
  },
})

export default store
