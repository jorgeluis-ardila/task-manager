import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'providers/context';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isLogged } = useAuth();

  if (!isLogged) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

export { ProtectedRoute };
