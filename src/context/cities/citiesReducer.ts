import { ICitiesAction } from '../../interfaces/actions.interface';
import { ICitiesState } from '../../interfaces/states.interface';

export function citiesReducer(state: ICitiesState, action: ICitiesAction): ICitiesState {
  switch (action.type) {
  case 'loading':

    return { ...state, isLoading: true };

  case 'cities/loaded':

    return { ...state, isLoading: false, cities: action.payload };

  case 'city/loaded':

    return { ...state, isLoading: false, currentCity: action.payload };

  case 'city/deleted':

    return { ...state, isLoading: false, cities: state.cities.filter(city => city.id !== action.payload) };

  case 'city/created':

    return { ...state, isLoading: false, cities: [...state.cities, action.payload] };

  case 'rejected':

    return { ...state, isLoading: false, error: action.payload };

  default:
    throw new Error('Unknown action!');
    ;
  }
}
