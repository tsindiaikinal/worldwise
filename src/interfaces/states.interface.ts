import { ICity } from './city.interface';
import { IUser } from './user.interface';

//cities interface
export interface ICitiesState {
  cities: ICity[]
  currentCity: ICity
  isLoading: boolean
  error: string
}

export interface IAuthState {
  user: IUser
  isAuthenticated: boolean
  error: string
}
