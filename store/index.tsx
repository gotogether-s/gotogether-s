import { configureStore } from '@reduxjs/toolkit'
import { requestApi } from '@api/requestApi'
import categoryMenuSlice from './categoryMenuSlice'
import searchHistorySlice from './searchHistorySlice'
import surveyQnaLists from './surveyQnaListsSlice'
import sideBarStatus from './sideBarStatusSlice'

const store = configureStore({
  reducer: {
    categoryMenu: categoryMenuSlice.reducer,
    searchHistory: searchHistorySlice.reducer,
    surveyQnaLists: surveyQnaLists.reducer,
    sideBarStatus: sideBarStatus.reducer,
    [requestApi.reducerPath]: requestApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(requestApi.middleware),
})

export default store
