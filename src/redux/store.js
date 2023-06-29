// Import necessary libraries and functions from Redux and Redux Persist
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactReducer';
import filterReducer from './filterReducer';

// Configuration for Redux Persist
const persistConfig = {
  key: 'root', // Key for the persisted state in storage
  storage, // Storage mechanism (e.g., local storage, AsyncStorage)
  version: 1, // Version number for potential migrations
};

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// Create a persisted reducer using the root reducer and persist config
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Set the root reducer to the persisted reducer
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for non-serializable data in actions
    }),
  devTools: process.env.NODE_ENV === 'development', // Enable Redux DevTools in development mode
});

// Create a persistor to persist and rehydrate the Redux store
export const persistor = persistStore(store);
