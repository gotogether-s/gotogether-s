import { configureStore } from '@reduxjs/toolkit'
import { requestApi } from '@api/requestApi'
import mainMenuSlice from './mainMenuSlice'
import categoryMenuSlice from './categoryMenuSlice'
import searchHistorySlice from './searchHistorySlice'
import surveyQnaLists from './surveyQnaListsSlice'

const store = configureStore({
  reducer: {
    mainMenu: mainMenuSlice.reducer,
    categoryMenu: categoryMenuSlice.reducer,
    searchHistory: searchHistorySlice.reducer,
    surveyQnaLists: surveyQnaLists.reducer,
    [requestApi.reducerPath]: requestApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(requestApi.middleware),
})

export default store
