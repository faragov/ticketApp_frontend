import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

// eslint-disable-next-line import/prefer-default-export
export function ProtectedRoute({ children }) {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
}
