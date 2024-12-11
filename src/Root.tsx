import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CitiesProvider } from './context/cities/CitiesProvider';
import { AuthProvider } from './context/auth/AuthProvider';
import ProtectedRoute from './components/ProtectedRoure/ProtectedRoute';
import City from './components/City/City';
import CountryItem from './components/CountryItem/CountryItem';
import Form from './components/Form/Form';
import CityList from './components/CityList/CityList';
import CountryList from './components/CountryList/CountryList';
import SpinnerFullPage from './components/SpinnerFullPage/SpinnerFullPage';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const Product = lazy(() => import('./pages/Product/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const AppPage = lazy(() => import('./pages/AppPage/AppPage'));
const Login = lazy(() => import('./pages/Login/Login'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function Root() {

  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
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
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default Root;
