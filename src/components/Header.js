import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <Navbar />
    </div>
  );
}

/*

<div className="header">
      <div>
        <Link to="/">Home</Link>
      </div>
    <div className="navbar">
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
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>


*/
