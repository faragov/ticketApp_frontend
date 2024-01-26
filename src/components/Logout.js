import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

export default function Logout() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div>
      <button type="submit" onChange={handleLogout}>
        Logout
      </button>
    </div>
  );
}
