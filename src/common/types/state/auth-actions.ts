import { User } from '../user';

interface SetAuthAction {
  type: string;
  payload: boolean;
}

interface SetUserAction {
  type: string;
  payload: User;
}

interface SetErrorAction {
  type: string;
  payload: string;
}

interface SetLoadingAction {
  type: string;
  payload: boolean;
}

export type { SetAuthAction, SetUserAction, SetErrorAction, SetLoadingAction };
