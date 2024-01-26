import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

export default function Navbar() {
  const auth = useAuth();

  return (
    <div className="navbar">
      <ul>
        <li>{auth.token && <Link to="/shop">Shop</Link>}</li>
        <li>{auth.token && <Link to="/profile">Profile</Link>}</li>
        <li>{auth.token && <Link to="/tickets">Tickets</Link>}</li>
        <li>{auth.token && <Link to="/cart">Cart</Link>}</li>
        <li>{auth.token && <Link to="/">Logout</Link>}</li>
        <li>{!auth.token && <Link to="/register">Register</Link>}</li>
        <li>{!auth.token && <Link to="/login">Login</Link>}</li>
      </ul>
    </div>
  );
}
