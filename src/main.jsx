import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import PrivateRoute from './components/PrivateRoute/index.jsx'
import Login from './pages/Login/index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'
import Detail from './pages/Detail/index.jsx'
import ContactUs from './pages/ContactUs/index.jsx'
import Pages404 from './pages/404/index.jsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: '/detail/:id',
    element: (
      <PrivateRoute>
        <Detail />
      </PrivateRoute>
    ),
  },
  {
    path: '/contact-us',
    element: (
      <PrivateRoute>
        <ContactUs />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: (
      <PrivateRoute>
        <Pages404 />
      </PrivateRoute>
    ),
  },
])

const queryClient = new QueryClient()

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
