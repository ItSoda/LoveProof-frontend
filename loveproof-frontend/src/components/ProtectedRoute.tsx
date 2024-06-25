import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    jwtDecode(token);
  } catch (error) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedRoute;
