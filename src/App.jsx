import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { 
  About,
  Cart,
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
    element: <HomeLayout/>,
    errorElement: <Error />
  },
  {
    path:'/login',
    element: <Login/>,
    errorElement: <Error />
  },
  {
    path:'/register',
    element: <Register/>,
    errorElement: <Error />
  },
])

export const App = () => {
  return <RouterProvider router={router} />;
};
