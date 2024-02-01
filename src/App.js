import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";

import ProtectedLayout from "./components/ProtectedLayout";
import HomeLayout from "./components/HomeLayout";

function App() {
  const userRole = localStorage.getItem("userRole");

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route
            path="/login"
            element={userRole ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/register"
            element={userRole ? <Navigate to="/" replace /> : <Register />}
          />
        </Route>

        <Route path="/" element={<ProtectedLayout />}>
          <Route
            path="/profile"
            element={
              userRole === "ADMIN" ? (
                <Navigate to="/admin/profile" replace />
              ) : (
                <Profile />
              )
            }
          />
          <Route
            path="/shop"
            element={
              userRole === "ADMIN" ? (
                <Navigate to="/admin/products" replace />
              ) : (
                <Shop />
              )
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route
          path="/admin/profile"
          element={
            userRole === "ADMIN" ? <Profile /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/admin/products"
          element={
            userRole === "ADMIN" ? <Shop /> : <Navigate to="/" replace />
          }
        />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
