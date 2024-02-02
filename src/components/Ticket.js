import { useState } from "react";
import { useShop } from "../context/ShopContext";
import "./Ticket.css";

export default function Ticket({
  parent,
  id,
  type,
  usability,
  price,
  description,
}) {
  const { setSelectedTicketId, sendToCart } = useShop();

  const [showBuyField, setShowBuyField] = useState(false);

  function handleSelect(selectedId) {
    setSelectedTicketId(selectedId);
  }

  return (
    <div className="ticket-card">
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
        Trigger
      </button>
      {parent === "shop" && showBuyField && (
        <button
          type="button"
          onClick={() => {
            sendToCart();
            setShowBuyField(false);
          }}
        >
          Do something else
        </button>
      )}
    </div>
  );
}
