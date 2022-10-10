import { createAsyncThunk } from '@reduxjs/toolkit';

import * as userService from '../../api/user-service';
import { IEvent } from '../../common/types';

const fetchGuests = createAsyncThunk('fetch/guests', async () => {
  const guests = await userService.getUsers();
  return guests;
});

const addEvent = createAsyncThunk('add/event', async (event: IEvent) => {
  try {
    const savedEvents = localStorage.getItem('events') || '[]';
    const events = JSON.parse(savedEvents) as IEvent[];
    if (savedEvents) {
      events.push(event);
      localStorage.setItem('events', JSON.stringify(events));
    }
    return events;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error saving event. Error message: ${error.message}`);
    }
  }
});

const fetchEvents = createAsyncThunk(
  'fetch/event',
  async (username: string) => {
    try {
      const savedEvents = localStorage.getItem('events') || '[]';
      const events = JSON.parse(savedEvents) as IEvent[];
      const currentUserEvents = events.filter(
        (user) => user.author === username || user.guest === username,
      );
      return currentUserEvents;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `Error fetching events. Error message: ${error.message}`,
        );
      }
    }
  },
);

export { fetchGuests, addEvent, fetchEvents };
