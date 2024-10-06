import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './pages/Login/index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'
import ContactUs from './pages/ContactUs/index.jsx'
import Pages404 from './pages/404/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
  {
    path: '*',
    element: <Pages404 />,
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
