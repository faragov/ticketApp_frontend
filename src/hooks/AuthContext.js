import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useLocalStorage } from "./UseLocalStorage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useLocalStorage("token", null);
  const navigate = useNavigate();

  const login = (newToken) => {
    setToken(newToken);
    const decodedToken = jwtDecode(newToken);
    const userRole = decodedToken.role;
    navigate(userRole === "ADMIN" ? "/admin/profile" : "/profile");
  };

  const logout = () => {
    setToken(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      token,
      login,
      logout,
    }),
    [token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
