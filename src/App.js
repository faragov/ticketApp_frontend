import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Tickets from "./components/Tickets";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
