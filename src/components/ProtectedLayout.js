import React from "react";
import ProtectedRoute from "./ProtectedRoute";

export default function ProtectedLayout({ children }) {
  return (
    <div>
      <ProtectedRoute>{children}</ProtectedRoute>
    </div>
  );
}
