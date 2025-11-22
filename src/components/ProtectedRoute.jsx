import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loader from './ui/Loader';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;
  return <Outlet />;
  // return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;