import { IEvent, User } from '..';

interface SetGuestsAction {
  type: string;
  payload: User[];
}

interface addIventAction {
  type: string;
  payload: IEvent;
}

export type { SetGuestsAction, addIventAction };
