import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Shop from "./components/Shop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
