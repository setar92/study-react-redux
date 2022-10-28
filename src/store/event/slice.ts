import { createSlice } from '@reduxjs/toolkit';

import { EventState, SetGuestsAction } from '../../common/types';
import { fetchGuests, addEvent, fetchEvents } from './event-thunks';

const initialState: EventState = {
  guests: [],
  events: [],
};

const { reducer, actions } = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setGuests: (state, action: SetGuestsAction) => {
      const users = action.payload;
      state.guests = users;
    },
    clearEvents: (state) => {
      state.events = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGuests.fulfilled, (state, action) => {
      state.guests = action.payload;
    });
    builder.addCase(addEvent.fulfilled, (state, action) => {
      if (action.payload) {
        state.events = action.payload;
      }
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      if (action.payload) {
        state.events = action.payload;
      }
    });
  },
});

export { reducer, fetchGuests, addEvent, fetchEvents };
export const { setGuests, clearEvents } = actions;
