import React, { useState, useEffect } from "react";
import { finishCart } from "../services/AuthService";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  function handleFinishClick() {
    finishCart(cartItems)
      .then((response) => response.json())
      .then(() => {
        localStorage.setItem("cart", JSON.stringify([]));
        setCartItems([]);
      });
  }

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
          <button type="button" onClick={handleFinishClick}>
            Finish
          </button>
        </div>
      )}
    </div>
  );
};
