import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { CalendarState, User } from '../../common/types';

const initialState: CalendarState = {
  isAuth: false,
  isLoading: false,
  error: '',
  user: {} as User,
};

const loginUser = createAsyncThunk('check/isAuth', async (_: User) => {
  const response = await axios.get<User[]>('users.json');
  const mockUsers = response.data;
  return mockUsers;
});

const { reducer, actions } = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      const { isAuth } = action.payload;
      state.isAuth = isAuth;
    },
    setIsLoading: (state, action) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
    setError: (state, action) => {
      const { error } = action.payload;
      state.error = error;
    },
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
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
        state.isAuth = true;
        state.user = currentUser;
      }
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state, _) => {
      state.error = 'Error while logging in';
    });
  },
});

export { reducer, loginUser };
export const { setIsAuth, setIsLoading, setError, setUser } = actions;
