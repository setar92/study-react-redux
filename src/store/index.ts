import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { authReducer as auth, event } from './root-reducer';

const rootReducer = combineReducers({
  auth,
  event,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
