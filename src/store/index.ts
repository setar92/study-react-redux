import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { usersApi } from './queries/users';
import { auth } from './root-reducer';

const rootReducer = combineReducers({
  auth,
  [usersApi.reducerPath]: usersApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
