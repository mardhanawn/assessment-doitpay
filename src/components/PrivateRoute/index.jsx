import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({ children }) {
  const location = useLocation()
  const isAuthenticated = !!localStorage.getItem('username')

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (isAuthenticated && location.pathname === '/login') {
    return <Navigate to="/dashboard" replace />
  }

  return children
}

export default PrivateRoute
