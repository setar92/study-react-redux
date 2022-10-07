import axios from 'axios';

import { AppDispatch } from '../..';
import { User } from '../../../common/types';
import {
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
  AuthActionsEnum,
} from './types';

const AuthActionCreators = {
  setUser: (user: User): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: isAuth,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  login:
    (username: string, password: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        const mockUsers = await axios.get('users.json');
        console.log(mockUsers);
        console.log(username, password);
      } catch (error) {
        if (error instanceof Error) {
          dispatch(
            AuthActionCreators.setError(
              `Error when trying to log in. Error message: ${error}`,
            ),
          );
        }
      }
    },
  // logout: () => async (dispatch: AppDispatch) => {
  //   try {
  //   } catch (error) {
  //   }
  // }
};

export { AuthActionCreators };
