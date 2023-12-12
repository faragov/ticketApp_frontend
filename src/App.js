import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Tickets from "./components/Tickets";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;
