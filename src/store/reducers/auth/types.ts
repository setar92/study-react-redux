import { User } from '../../../common/types';

interface AuthState {
  isAuth: boolean;
  user: User;
  isLoading: boolean;
  error: string;
}

export enum AuthActionsEnum {
  SET_AUTH = 'SET_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_AUTH',
}

interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}

interface SetErrorAction {
  type: AuthActionsEnum.SET_ERROR;
  payload: string;
}

interface SetIsLoadingAction {
  type: AuthActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

interface SetUserAction {
  type: AuthActionsEnum.SET_USER;
  payload: User;
}

export type {
  AuthState,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
};
export type AuthAction =
  | SetAuthAction
  | SetErrorAction
  | SetIsLoadingAction
  | SetUserAction;
