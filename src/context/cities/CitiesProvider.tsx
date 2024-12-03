import { ReactNode, useContext, useEffect, useReducer } from 'react';
import { BASE_URL } from '../../constants/api.constant';
import { ICity } from '../../interfaces/city.interface';
import { apiFetcher } from '../../services/apiFetcher.service';
import { CitiesContext } from './CitiesContext';
import { citiesReducer } from './citiesReducer';
import { INITIAL_STATE_CITIES } from '../../constants/reducers.constant';

interface IProps {
  children: ReactNode
}

function CitiesProvider ({ children }: IProps) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(citiesReducer, INITIAL_STATE_CITIES);

  useEffect(() => () => {
    async function getCities() {
      dispatch({ type: 'loading' });
      try {
        const data = await apiFetcher(`${BASE_URL}/cities`);
        dispatch({ type: 'cities/loaded', payload: data });

      } catch (data) {

        dispatch({ type: 'rejected', payload: data });
        // eslint-disable-next-line no-console
        console.error(data);
      }
    }
    getCities();
  }, []);

  async function getCity(id: string | number): Promise<void> {
    dispatch({ type: 'loading' });
    try {
      const data = await apiFetcher(`${BASE_URL}/cities/${id}`);
      dispatch({ type: 'city/loaded', payload: data });

    } catch (data) {
      dispatch({ type: 'rejected', payload: data });
      // eslint-disable-next-line no-console
      console.error(data);
    }
  }

  async function postNewCity(newCity: ICity) {
    dispatch({ type: 'loading' });
    try {
      const data = await apiFetcher(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
      },
      );
      dispatch({ type: 'city/created', payload: data });

    } catch (data) {
      dispatch({ type: 'rejected', payload: data });
      // eslint-disable-next-line no-console
      console.error(data);
    }
  }

  async function deleteCity(id: string | number) {
    dispatch({ type: 'loading' });
    try {
      await apiFetcher(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE' },
      );

      dispatch({ type: 'city/deleted', payload: id });

    } catch (data) {
      dispatch({ type: 'rejected', payload: data });
      // eslint-disable-next-line no-console
      console.error(data);
    }
  }

  return (
    <CitiesContext.Provider
      value= {
        {
          cities,
          currentCity,
          getCity,
          postNewCity,
          deleteCity,
          isLoading,
          error,
        }
      }
    >
      {children}
    </CitiesContext.Provider>
  )
  ;
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined) {throw new Error('CitiesContext was used outside the CitiesProvider');}

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
