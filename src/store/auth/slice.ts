import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as userService from '../../api/user-service';
import {
  CalendarState,
  User,
  SetAuthAction,
  SetUserAction,
  SetErrorAction,
  SetLoadingAction,
} from '../../common/types';

const initialState: CalendarState = {
  isAuth: false,
  isLoading: false,
  error: '',
  user: {} as User,
};

const loginUser = createAsyncThunk('check/isAuth', async (_: User) => {
  const mockUsers = await userService.getUsers();
  return mockUsers;
});

const { reducer, actions } = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setIsAuth: (state, action: SetAuthAction) => {
      const isAuth = action.payload;
      state.isAuth = isAuth;
    },
    setIsLoading: (state, action: SetLoadingAction) => {
      const isLoading = action.payload;
      state.isLoading = isLoading;
    },
    setError: (state, action: SetErrorAction) => {
      const error = action.payload;
      state.error = error;
    },
    setUser: (state, action: SetUserAction) => {
      const user = action.payload;
      state.user = user;
    },
    logout: (state) => {
      localStorage.removeItem('Auth');
      localStorage.removeItem('username');
      state.user = {} as User;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const user: User = action.meta.arg;
      const mockUsers = action.payload;
      const currentUser = mockUsers.find(
        (it) => it.username === user.username && it.password == user.password,
      );
      if (currentUser) {
        localStorage.setItem('Auth', 'true');
        localStorage.setItem('username', currentUser.username);
        state.isAuth = true;
        state.user = currentUser;
      } else {
        state.error = 'Not correct value';
      }
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state, _) => {
      state.error = 'Error while logging in';
    });
  },
});

export { reducer, loginUser };
export const { setIsAuth, setIsLoading, setError, setUser, logout } = actions;
