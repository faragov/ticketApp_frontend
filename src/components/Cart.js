import React, { useState, useEffect } from "react";
import getAllTickets from "../services/ShopService";
import postPurchase from "../services/CartService";
import { useAuth } from "../hooks/AuthContext";

export default function Cart() {
  const [selectedTickets, setSelectedTickets] = useState({});

  const { token } = useAuth();

  useEffect(() => {
    getAllTickets(token).json((jsonData) => {
      setSelectedTickets(jsonData.products);
    });
  }, []);

  function handleFinishClick() {
     postPurchase(token).json((jsonData) => {
      setSelectedTickets(jsonData.products);
    });
     // .then((response) => response.json())
     // .then(() => {
      // localStorage.setItem("cart", JSON.stringify([]));
      // setCartItems([]);
     // });
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {selectedTickets.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {selectedTickets.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
          <p>
            Total:{" "}
            {selectedTickets.reduce(
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
