import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { token, userRole, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar">
      {token && (
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/tickets">Tickets</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            {userRole === "ADMIN" && (
              <>
                <li>
                  <Link to="/admin/profile">Admin Profile</Link>
                </li>
                <li>
                  <Link to="/admin/product">Admin Products</Link>
                </li>
                <li>
                  <Link to="/admin/news">Admin News</Link>
                </li>
              </>
            )}

            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      )}
      {!token && (
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
