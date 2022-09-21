import { configureStore } from '@reduxjs/toolkit'
import mainMenuSlice from './mainMenuSlice'
import categoryMenuSlice from './categoryMenuSlice'

const store = configureStore({
  reducer: {
    mainMenu: mainMenuSlice.reducer,
    categoryMenu: categoryMenuSlice.reducer,
  },
})

export default store
