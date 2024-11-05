import { createBrowserRouter } from 'react-router-dom';

// import App from './App.tsx';
import Product from '../pages/Product.tsx';
import Pricing from '../pages/Pricing.tsx';
import Homepage from '../pages/Homepage.tsx';
import ErrorPage from '../pages/ErrorPage.tsx';
import NotFoundPage from '../pages/NotFoundPage.tsx';
import AppPage from '../pages/AppPage.tsx';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Homepage />,
      errorElement: <ErrorPage />,
      children: [],
    },
    { path: 'product',
      element: <Product />,
    },
    { path: 'pricing',
      element: <Pricing />,
    },
    {
      path: 'app',
      element: <AppPage />,
    },
    { path: '*',
      element: <NotFoundPage />,
    },
  ],
);
