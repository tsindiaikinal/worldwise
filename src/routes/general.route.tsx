import { createBrowserRouter } from 'react-router-dom';

// import App from './App.tsx';
import Product from '../pages/Product/Product.tsx';
import Pricing from '../pages/Pricing.tsx';
import ErrorPage from '../pages/ErrorPage.tsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.tsx';
import AppPage from '../pages/AppPage/AppPage.tsx';
import Login from '../pages/Login/Login.tsx';
import City from '../components/City/City.tsx';
import CountryItem from '../components/CountryItem/CountryItem.tsx';
import Form from '../components/Form/Form.tsx';
import Root from '../Root.tsx';
import { getCity } from '../services/apiFetcher.service.ts';
import { BASE_URL } from '../constants/api.constant.ts';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [],
    },
    { path: 'product',
      element: <Product />,
    },
    { path: 'pricing',
      element: <Pricing />,
    },
    { path: 'login',
      element: <Login />,
    },
    {
      path: 'app',
      element: <AppPage />,
      children: [
        { index: true,
          element: '👋 Add your first city by clicking on a city on the map',
        },
        {
          path: 'city',
          element: <City />,
          loader: async () => await getCity(`${BASE_URL}/cities`),
        },
        {
          path: 'country',
          element: <CountryItem country={undefined} />,
        },
        {
          path: 'form',
          element: <Form />,
        },
      ],
    },
    { path: '*',
      element: <NotFoundPage />,
    },
  ],
);
