import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as userService from '../../api/user-service';
import {
  EventState,
  SetGuestsAction,
  SetIventsAction,
} from '../../common/types';

const initialState: EventState = {
  guests: [],
  events: [],
};

const fetchGuests = createAsyncThunk('fetch/guests', async () => {
  const guests = await userService.getUsers();
  return guests;
});

const { reducer, actions } = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setGuests: (state, action: SetGuestsAction) => {
      const users = action.payload;
      state.guests = users;
    },
    setEvents: (state, action: SetIventsAction) => {
      const events = action.payload;
      state.events = events;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGuests.fulfilled, (state, action) => {
      state.guests = action.payload;
    });
  },
});

export { reducer, fetchGuests };
export const { setGuests, setEvents } = actions;
