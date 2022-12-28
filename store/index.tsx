import { configureStore } from '@reduxjs/toolkit'
import { requestApi } from '@api/requestApi'
import categoryMenu from './categoryMenuSlice'
import searchHistory from './searchHistorySlice'
import surveyQnaLists from './surveyQnaListsSlice'
import sideBarStatus from './sideBarStatusSlice'
import isLogin from './isLoginSlice'
import reservationDetail from './reservationDetailSlice'
import bookingClientInfo from './bookingClientInfoSlice'
import makeReservation from './makeReservationSlice'
import displayModalWindow from './displayModalWindowSlice'
import likedItems from './likedItemsSlice'
import wishIdsToDelete from './wishIdsToDeleteSlice'
import myBookingList from './myBookingListSlice'

const store = configureStore({
  reducer: {
    categoryMenu: categoryMenu.reducer,
    searchHistory: searchHistory.reducer,
    surveyQnaLists: surveyQnaLists.reducer,
    sideBarStatus: sideBarStatus.reducer,
    isLogin: isLogin.reducer,
    [requestApi.reducerPath]: requestApi.reducer,
    reservationDetail: reservationDetail.reducer,
    bookingClientInfo: bookingClientInfo.reducer,
    makeReservation: makeReservation.reducer,
    displayModalWindow: displayModalWindow.reducer,
    likedItems: likedItems.reducer,
    wishIdsToDelete: wishIdsToDelete.reducer,
    myBookingList: myBookingList.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(requestApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export default store
