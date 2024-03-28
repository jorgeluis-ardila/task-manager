import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth, useGlobalStore } from 'providers/context';
import { Loading } from 'core';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isLoading } = useGlobalStore();
  const { isLogged } = useAuth();

  if (isLoading) return <Loading />;
  if (!isLogged) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export { ProtectedRoute };
