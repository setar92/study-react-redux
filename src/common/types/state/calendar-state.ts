import { User } from '../index';

interface CalendarState {
  isAuth: boolean;
  user?: User;
  isLoading: boolean;
  error: string;
}

export type { CalendarState };
