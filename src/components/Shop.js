// eslint-disable-next-line
import wretch from "wretch";
import { useState, useEffect } from "react";
import TicketsMap from "./TicketsMap";
import Modal from "./Modal";

export default function Shop() {
  // !!!! delete the following comment if the setTicket is used !!!!
  // eslint-disable-next-line no-unused-vars
  const [tickets, setTickets] = useState(null);
  const [selectedTickets, setSelectedTickets] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [countDown, setCountDown] = useState(3);

  useEffect(() => {
    wretch("http://localhost:4000/tickets")
      .get()
      .json((json) => {
        setTickets(json);
      });
  }, []);

  const handleBuyClick = (selectedTicket) => {
    setSelectedTickets((prevSelected) => ({
      ...prevSelected,
      [selectedTicket.id]: 1,
    }));
  };

  const handleAddClick = (ticketId) => {
    setSelectedTickets((prevSelected) => ({
      ...prevSelected,
      [ticketId]: (prevSelected[ticketId] || 0) + 1,
    }));
  };

  const handleRemoveClick = (ticketId) => {
    setSelectedTickets((prevSelected) => {
      const updatedCount = (prevSelected[ticketId] || 0) - 1;
      const newSelected = { ...prevSelected };
      if (updatedCount > 0) {
        newSelected[ticketId] = updatedCount;
      } else {
        delete newSelected[ticketId];
      }
      return newSelected;
    });
  };

  const handleAddToCartClick = (ticket) => {

    // API call add to cart
    
    const cartItem = {
      id: ticket.id,
      name: ticket.name,
      price: ticket.price,
      quantity: selectedTickets[ticket.id] || 1,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setStatusMessage("Ticket added to your cart!");
    setSuccess(true);
    setInterval(() => {
      setCountDown((c) => c - 1);
    }, 1000);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
      <TicketsMap tickets={tickets} />
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <button type="button" onClick={() => handleBuyClick(ticket)}>
            Buy
          </button>
          {selectedTickets[ticket.id] && (
            <div>
              {selectedTickets[ticket.id]}
              <button type="button" onClick={() => handleAddClick(ticket.id)}>
                +
              </button>
              <button
                type="button"
                onClick={() => handleRemoveClick(ticket.id)}
              >
                -
              </button>
              <button
                type="button"
                onClick={() => handleAddToCartClick(ticket)}
              >
                Add to Cart
              </button>
            </div>
          )}
          <Modal isOpen={success} hasCloseBtn={false}>
            <p>{statusMessage}</p>
            <p>You will be redirected in {countDown} seconds!</p>
          </Modal>
        </div>
      ))}
    </>
  );
}
