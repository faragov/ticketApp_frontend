import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import { finishCart } from "../services/AuthService";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleFinishClick = () => {
    finishCart(cartItems).json(json);
    localStorage.setItem("cart", JSON.stringify([]));
    setCartItems([]);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
          <p>
            Total:{" "}
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0,
            )}
          </p>
          <button onClick={handleFinishClick}>Finish</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
