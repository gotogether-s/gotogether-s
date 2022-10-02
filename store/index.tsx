import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import mainMenuSlice from './mainMenuSlice'
import categoryMenuSlice from './categoryMenuSlice'
import searchHistorySlice from './searchHistorySlice'
import surveyQnaLists from './surveyQnaListsSlice'
import detailToReservationSlice from './detailToReservationSlice'
import viewProductListSlice from './viewProductListSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

export const rootReducer = combineReducers({
  detailToReservation: detailToReservationSlice.reducer,
  viewProductList: viewProductListSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: {
    mainMenu: mainMenuSlice.reducer,
    categoryMenu: categoryMenuSlice.reducer,
    searchHistory: searchHistorySlice.reducer,
    surveyQnaLists: surveyQnaLists.reducer,
    persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store)
export default store
