
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(`authenicated:${isAuthenticated}`)

  if (!isAuthenticated && !localStorage.getItem('token')) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;

