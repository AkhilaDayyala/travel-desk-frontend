import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element, roles }) => {
  const { auth } = useAuth();
  const userRole = auth.userRole;

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!roles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default PrivateRoute;
