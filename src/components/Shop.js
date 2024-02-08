import { useEffect, useState } from "react";
import TicketsMap from "./TicketsMap";
import { useShop } from "../context/ShopContext";

function BuyDetail({ id, showField, setShowField }) {
  const { setSelectedTicketId, sendToCart } = useShop();

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
    <>
      {!showField && (
        <button
          className="buy-ticket"
          type="button"
          onClick={() => {
            handleSelect(id);
            setShowField(true);
          }}
        >
          Buy
        </button>
      )}
      {showField && (
        <div className="buy-detail">
          <div className="buy-detail-amount">
            <button type="button" onClick={decreaseTicketAmount}>
              -
            </button>
            <div className="amount-display">{amount}</div>
            <button type="button" onClick={increaseTicketAmount}>
              +
            </button>
          </div>
          <button className="buy-add-to-cart" type="button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      )}
    </>
  );
}

export default function Shop() {
  const { tickets, fetchTickets } = useShop();

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <>
      <h1>Tickets</h1>
      <TicketsMap tickets={tickets} actionElement={<BuyDetail />} />
    </>
  );
}
