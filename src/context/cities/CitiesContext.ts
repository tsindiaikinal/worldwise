import { createContext } from 'react';
import { ICitiesContext } from '../../interfaces/city.interface';
import { DEFAULT_VALUE_CITY } from '../../constants/city.constant';

const defaultValue = {
  cities: [],
  currentCity: DEFAULT_VALUE_CITY,
  getCity: () => {},
  postNewCity: () => {},
  deleteCity: () => {},
  isLoading: false,
  error: '',
};

export const CitiesContext = createContext<ICitiesContext>(defaultValue);
