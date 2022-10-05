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
import searchAgesSlice from './searchAgesSlice'
import searchCompanionsSlice from './searchCompanionsSlice'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { persistStore, persistReducer } from 'redux-persist'

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null)
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: any) {
      return Promise.resolve()
    },
  }
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

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
    searchAges: searchAgesSlice.reducer,
    searchCompanions: searchCompanionsSlice.reducer,
    persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store)
export default store
