import { IEvent, User } from '..';

interface SetGuestsAction {
  type: string;
  payload: User[];
}

interface SetIventsAction {
  type: string;
  payload: IEvent[];
}

export type { SetGuestsAction, SetIventsAction };
