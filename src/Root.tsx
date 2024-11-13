import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product/Product.tsx';
import Pricing from './pages/Pricing.tsx';
import Homepage from './pages/Homepage/Homepage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import AppPage from './pages/AppPage/AppPage.tsx';
import Login from './pages/Login/Login.tsx';
import City from './components/City/City.tsx';
import CountryItem from './components/CountryItem/CountryItem.tsx';
import Form from './components/Form/Form.tsx';
import { apiFetcher } from './services/apiFetcher.service.ts';
import { BASE_URL } from './constants/api.constant.ts';
import { useEffect, useState } from 'react';
import { ICity } from './interfaces/city.interface.ts';
import CityList from './components/CityList/CityList.tsx';

function Root() {
  const [cities, setCities] = useState<ICity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => () => {
    async function getCities() {
      try {
        setIsLoading(true);
        const result = await apiFetcher(`${BASE_URL}/cities`);
        setCities(result);

      } catch (result) {
        // eslint-disable-next-line no-console
        console.error(result);
      } finally {
        setIsLoading(false);
      }
    }
    getCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Homepage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='product'
          element={<Product /> }
        />
        <Route
          path='pricing'
          element={<Pricing />}
        />
        <Route
          path='login'
          element={<Login />}
        />
        <Route
          path='app'
          element={<AppPage />}
        >
          <Route
            index
            element='👋 Add your first city by clicking on a city on the map'
          />
          <Route
            path='cities'
            element={
              <CityList
                cities={cities}
                isLoading={isLoading}
              />}
          >
            <Route
              index
              path='city'
              element={
                <City
                  city={cities[2]}
                  isLoading={isLoading}
                />}
            />

          </Route>
          <Route
            path='country'
            element={<CountryItem country={undefined} />}
          />
          <Route
            path='form'
            element={<Form />}
          />
        </Route>
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
