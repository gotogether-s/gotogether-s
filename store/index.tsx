import { configureStore } from '@reduxjs/toolkit'
import mainMenuSlice from './mainMenuSlice'
import categoryMenuSlice from './categoryMenuSlice'
import searchHistorySlice from './searchHistorySlice'

const store = configureStore({
  reducer: {
    mainMenu: mainMenuSlice.reducer,
    categoryMenu: categoryMenuSlice.reducer,
    searchHistory: searchHistorySlice.reducer,
  },
})

export default store
