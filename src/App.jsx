import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { 
  About,
  Bookings,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Orders,
  Products,
  Login,
  Register,
  SingleProduct,
  } from './pages'

import { ErrorElement } from './components';

// loaders
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLadoer } from './pages/SingleProduct'
import { loader as PorudctsLoader } from './pages/Products'
// actions

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: PorudctsLoader
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLadoer
      },
      {
        path: 'bookings',
        element: <Bookings />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'orders',
        element: <Orders />
      },
    ],
  },
  {
    path:'/login',
    element: <Login/>,
    errorElement: <Error />
  },
  {
    path:'/register',
    element: <Register />,
    errorElement: <Error />
  },
])

export const App = () => {
  return <RouterProvider router={router} />;
};
