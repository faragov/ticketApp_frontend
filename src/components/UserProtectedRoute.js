import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

export default function UserProtectedRoute() {
  const { token, role } = useAuth();

  if (!token && role !== "USER") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
