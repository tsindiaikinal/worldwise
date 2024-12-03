import { ReactNode, useContext, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { INITIAL_STATE_AUTH } from '../../constants/reducers.constant';
import { authReducer } from './authReducer';
import { FAKE_USER } from '../../constants/user.constant';

interface IProps {
  children: ReactNode
}

function AuthProvider({ children }: IProps) {
  const [{ user, isAuthenticated, error }, dispatch] = useReducer(authReducer, INITIAL_STATE_AUTH);

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'login', payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider
      value= {
        { user, isAuthenticated, error, login, logout }
      }
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('AuthContext was used outside the CitiesProvider');
  }

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
