import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminNews from "./components/AdminNews";
import AdminProduct from "./components/AdminProduct";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";
import UserProtectedRoute from "./components/UserProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import Ticket from "./components/Ticket";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<PageNotFound />} />

        {/* userProtected routes */}
        <Route element={<UserProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tickets" element={<Ticket />} />
        </Route>

        {/* adminProtected routes */}
        <Route path="/admin" element={<AdminProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<AdminNews />} />
          <Route path="/product" element={<AdminProduct />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
