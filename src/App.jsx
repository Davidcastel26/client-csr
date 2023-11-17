import { RouterProvider, createBrowserRouter } from "react-router-dom"

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
  } from "./pages"

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />
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
