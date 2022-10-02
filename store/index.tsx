import { configureStore } from '@reduxjs/toolkit'
import mainMenuSlice from './mainMenuSlice'
import categoryMenuSlice from './categoryMenuSlice'
import searchHistorySlice from './searchHistorySlice'
import surveyQnaLists from './surveyQnaListsSlice'
import detailToReservationSlice from './detailToReservationSlice'
import viewProductListSlice from './viewProductListSlice'

const store = configureStore({
  reducer: {
    mainMenu: mainMenuSlice.reducer,
    categoryMenu: categoryMenuSlice.reducer,
    searchHistory: searchHistorySlice.reducer,
    surveyQnaLists: surveyQnaLists.reducer,
    detailToReservation: detailToReservationSlice.reducer,
    viewProductList: viewProductListSlice.reducer,
  },
})

export default store
