import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Tickets from "./components/Tickets";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Navbar>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
