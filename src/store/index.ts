import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

interface CalendarState {
  info: number;
}

const initialState: CalendarState = {
  info: 0,
};

const { reducer, actions } = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.info = state.info++;
    },
  },
  extraReducers: {},
});

export const { increment } = actions;

const rootReducer = combineReducers({ reducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
