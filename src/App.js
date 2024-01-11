import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Tickets from "./components/Tickets";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
