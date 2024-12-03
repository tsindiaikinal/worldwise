import { createContext } from 'react';
import { IAuthContext } from '../../interfaces/auth.interface';

const defaultValue = {
  user: {
    name: '',
    avatar: '',
    email: '',
    password: '',
  },
  isAuthenticated: false,
  error: '',
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<IAuthContext>(defaultValue);
