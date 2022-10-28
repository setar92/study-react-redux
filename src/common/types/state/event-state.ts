import { IEvent } from '../event';
import { User } from '../user';

interface EventState {
  guests: User[];
  events: IEvent[];
}

export type { EventState };
