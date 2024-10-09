import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Detail from './pages/Detail'
import ContactUs from './pages/ContactUs'
import Pages404 from './pages/404'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Layout>
          <Dashboard />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/detail/:id',
    element: (
      <PrivateRoute>
        <Layout>
          <Detail />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '/contact-us',
    element: (
      <PrivateRoute>
        <Layout>
          <ContactUs />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: (
      <PrivateRoute>
        <Layout>
          <Pages404 />
        </Layout>
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
