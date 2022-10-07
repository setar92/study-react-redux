import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// import { AppDispatch } from '..';
import { CalendarState, User } from '../../common/types';

const initialState: CalendarState = {
  isAuth: false,
  isLoading: false,
  error: '',
  user: {} as User,
};

// type AsyncThunkConfig = {
//   state: CalendarState;
//   dispatch: AppDispatch;
// };

const loginUser = createAsyncThunk('check/isAuth', async (user: User) => {
  const users = await axios.get('users.json');
  console.log(users);
  console.log(user, 'password');
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
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log('extraReduxer', state, action.type);
    });
  },
});

export { reducer, loginUser };
export const { setIsAuth, setIsLoading, setError, setUser } = actions;
