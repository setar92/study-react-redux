import { createSlice } from '@reduxjs/toolkit';

import { CalendarState, User } from '../../common/types';

const initialState: CalendarState = {
  isAuth: false,
  isLoading: false,
  error: '',
  user: {} as User,
};

const { reducer, actions } = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      console.log('setIsAuth');
      const { isAuth } = action.payload;
      console.log(isAuth, 'hjk');
      state.isAuth = isAuth;
    },
    setIsLoading: (state, action) => {
      console.log('setIsLoading');
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
    setError: (state, action) => {
      console.log('setError');
      const { error } = action.payload;
      state.error = error;
    },
    setUser: (state, action) => {
      console.log('setUser');
      const { user } = action.payload;
      state.user = user;
    },
  },
  extraReducers: {},
});

export { reducer };
export const { setIsAuth, setIsLoading, setError, setUser } = actions;
