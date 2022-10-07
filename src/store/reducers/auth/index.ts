import { User } from '../../../common/types';
import { AuthAction, AuthState, AuthActionsEnum } from './types';

const initialState: AuthState = {
  isAuth: false,
  user: {} as User,
  isLoading: false,
  error: '',
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };
    case AuthActionsEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case AuthActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case AuthActionsEnum.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export { authReducer };
