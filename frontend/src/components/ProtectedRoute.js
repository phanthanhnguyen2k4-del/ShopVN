import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute - Wrapper for routes that require authentication or specific roles
 */
const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isLoggedIn, user } = useAuth();

  // Check if user is logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has required role
  if (requiredRole) {
    if (Array.isArray(requiredRole)) {
      if (!requiredRole.includes(user?.role)) {
        return <Navigate to="/" replace />;
      }
    } else {
      if (user?.role !== requiredRole) {
        return <Navigate to="/" replace />;
      }
    }
  }

  return children;
};

export default ProtectedRoute;
