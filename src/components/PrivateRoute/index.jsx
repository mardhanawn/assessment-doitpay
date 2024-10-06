import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem('username')

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
