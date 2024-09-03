import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Tour from "../pages/Tour";
import TourDetails from "../pages/TourDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element:<App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/tour',
        element: <Tour />
      },
      {
        path: '/tour/:id',
        element: <TourDetails />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  }
]);

export default router;