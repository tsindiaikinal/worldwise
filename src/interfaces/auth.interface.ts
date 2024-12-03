import { IUser } from './user.interface';

/* eslint-disable no-unused-vars */
export interface IAuth {
  email: string
  password: string
}

// Context interfaces
export interface IAuthContext {
  user: IUser
  isAuthenticated: boolean
  error: string
  login: (email: string, password: string) => void
  logout: () => void
}
