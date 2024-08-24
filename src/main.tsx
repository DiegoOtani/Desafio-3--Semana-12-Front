import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/index.tsx'
import Home from './pages/Home/index.tsx'
import Tour from './pages/Tour/index.tsx'
import TourDetails from './pages/TourDetails/index.tsx'

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
        path: '/tour/:details',
        element: <TourDetails />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
