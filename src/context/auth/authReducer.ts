import { INITIAL_STATE_AUTH } from '../../constants/reducers.constant';
import { IAuthAction } from '../../interfaces/actions.interface';
import { IAuthState } from '../../interfaces/states.interface';

export function authReducer(state: IAuthState, action: IAuthAction): IAuthState {
  switch (action.type) {
  case 'login':

    return { ...state, isAuthenticated: true, user: action.payload };

  case 'logout':

    return { ...state, isAuthenticated: false, user: INITIAL_STATE_AUTH.user };

  case 'c':

    return { ...state };

  case 'rejected':

    return { ...state, error: action.payload };

  case 'e':

    return { ...state };

  default:
    throw new Error('Unknown action!');
    ;
  }
}
