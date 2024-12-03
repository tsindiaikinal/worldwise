import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Product from './pages/Product/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage/Homepage';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AppPage from './pages/AppPage/AppPage';
import Login from './pages/Login/Login';
import City from './components/City/City';
import CountryItem from './components/CountryItem/CountryItem';
import Form from './components/Form/Form';
import CityList from './components/CityList/CityList';
import CountryList from './components/CountryList/CountryList';
import { CitiesProvider } from './context/cities/CitiesProvider';
import { AuthProvider } from './context/auth/AuthProvider';
import ProtectedRoute from './components/ProtectedRoure/ProtectedRoute';

function Root() {

  return (
    <AuthProvider>
      <CitiesProvider>
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
              element={
                <ProtectedRoute>
                  <AppPage />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element='👋 Add your first city by clicking on a city on the map'
              />
              <Route
                path='cities'
                element={
                  <CityList />}
              />
              <Route
                index
                path='cities/:id'
                element={<City />}
              />
              <Route
                path='countries'
                element={<CountryList />}
              />
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
      </CitiesProvider>
    </AuthProvider>
  );
}

export default Root;
