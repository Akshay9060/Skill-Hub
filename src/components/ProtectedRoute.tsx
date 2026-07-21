import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireRole?: string; // optional, if not provided, just check authentication
}

function ProtectedRoute({ children, requireRole }: ProtectedRouteProps) {
  const token = localStorage.getItem('authToken');
  const role = localStorage.getItem('userRole');
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireRole && role !== requireRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;