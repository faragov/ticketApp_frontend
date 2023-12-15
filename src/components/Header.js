import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header">
      <div>
        <Link to="/">Home</Link>
      </div>
      <Navbar />
    </div>
  );
}
