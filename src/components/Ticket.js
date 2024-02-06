import { useState } from "react";
import { useShop } from "../context/ShopContext";
import "./Ticket.css";

export default function Ticket({ id, type, usability, price, description }) {
  const { setSelectedTicketId, sendToCart } = useShop();

  const [showBuyField, setShowBuyField] = useState(false);
  const [amount, setAmount] = useState(1);

  function handleSelect(selectedId) {
    setSelectedTicketId(selectedId);
  }

  const increaseTicketAmount = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };

  const decreaseTicketAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const addToCart = () => {
    sendToCart(id, amount);
    setAmount(1);
  };

  return (
    <div className="ticket-card" onMouseLeave={() => setShowBuyField(false)}>
      <p>{type}</p>
      <p>{description} </p>
      <p>{price} Ft</p>
      <p>{usability}</p>
      <button
        type="button"
        onClick={() => {
          handleSelect(id);
          setShowBuyField(true);
        }}
      >
        Buy
      </button>
      {showBuyField && (
        <div>
          <button type="button" onClick={decreaseTicketAmount}>
            -
          </button>
          {amount}
          <button type="button" onClick={increaseTicketAmount}>
            +
          </button>
          <button type="button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}
