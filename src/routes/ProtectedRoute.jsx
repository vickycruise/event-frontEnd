import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../providers/UserContext.jsx"; // Hook for accessing user data

const ProtectedRoute = ({ children, requireAdmin }) => {
  const { user, isAdmin } = useUser();

  if (!user) {
    // If user is not logged in, redirect to sign-in
    return <Navigate to="/authentication/sign-in" replace />;
  }

  if (requireAdmin && !isAdmin) {
    // If user is not an admin and admin access is required, redirect to unauthorized
    return <Navigate to="/unauthorized" replace />;
  }

  return children; // Render children if all conditions pass
};

export default ProtectedRoute;
