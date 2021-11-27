import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsApi } from './contacts/contactsSlice'
import storage from 'redux-persist/lib/storage'
import filterReducer from './contacts/contacts-reducers'
import logger from 'redux-logger'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
  contactsApi.middleware,
]

const persistConfig = {
  key: 'filter',
  version: 1,
  storage,
  whitelist: ['filter'],
}

const persistedFilterReducer = persistReducer(persistConfig, filterReducer)

//RTK Query -> API Reference -> Generated API Slices -> API Slices: Redux Integration
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: persistedFilterReducer,
    // filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
