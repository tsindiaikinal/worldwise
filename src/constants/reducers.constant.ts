import { DEFAULT_VALUE_CITY } from './city.constant';

export const INITIAL_STATE_CITIES = {
  cities: [],
  currentCity: DEFAULT_VALUE_CITY,
  isLoading: false,
  error: '',
};

export const INITIAL_STATE_AUTH = {
  user: {
    name: '',
    avatar: '',
    email: '',
    password: '',
  },
  isAuthenticated: false,
  error: '',
};
