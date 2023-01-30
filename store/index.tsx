import { requestApi } from '@api/requestApi'
import { configureStore } from '@reduxjs/toolkit'
import bookingAndLikesNumber from './bookingAndLikesNumberSlice'
import bookingClientInfo from './bookingClientInfoSlice'
import categoryMenu from './categoryMenuSlice'
import displayModalWindow from './displayModalWindowSlice'
import likedItems from './likedItemsSlice'
import makeReservation from './makeReservationSlice'
import myBookingDetail from './myBookingDetailSlice'
import myBookingLists from './myBookingListsSlice'
import myBookingPeople from './myBookingPeopleSlice'
import reservationDetail from './reservationDetailSlice'
import searchHistory from './searchHistorySlice'
import sideBarStatus from './sideBarStatusSlice'
import surveyQnaLists from './surveyQnaListsSlice'
import wishIdsToDelete from './wishIdsToDeleteSlice'

const store = configureStore({
  reducer: {
    categoryMenu: categoryMenu.reducer,
    searchHistory: searchHistory.reducer,
    surveyQnaLists: surveyQnaLists.reducer,
    sideBarStatus: sideBarStatus.reducer,
    [requestApi.reducerPath]: requestApi.reducer,
    reservationDetail: reservationDetail.reducer,
    bookingClientInfo: bookingClientInfo.reducer,
    makeReservation: makeReservation.reducer,
    displayModalWindow: displayModalWindow.reducer,
    likedItems: likedItems.reducer,
    wishIdsToDelete: wishIdsToDelete.reducer,
    myBookingLists: myBookingLists.reducer,
    myBookingDetail: myBookingDetail.reducer,
    myBookingPeople: myBookingPeople.reducer,
    bookingAndLikesNumber: bookingAndLikesNumber.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(requestApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export default store
