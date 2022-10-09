import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { authReducer as auth } from './root-reducer';

const rootReducer = combineReducers({
  auth,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
