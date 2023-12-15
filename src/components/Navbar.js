import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/tickets">Tickets</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
