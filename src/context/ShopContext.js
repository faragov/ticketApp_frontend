import { createContext, useState, useMemo, useContext } from "react";
// eslint-disable-next-line
import wretch from "wretch";
import postPurchase from "../services/CartService";
import { useAuth } from "../hooks/AuthContext";

const ShopContext = createContext();

function ShopProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState(0);
  // set the amount when the ticket is being selected
const [amount, setAmount] = useState(1);
const { token } = useAuth();

  const triggerEvent = (id) => {
    console.log(`hello from shop: ${id}`);
  };

  const buy = () => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === selectedTicketId
          ? { ...ticket, quantity: (ticket.quantity || 0) + 1 }
          : ticket
      )
    );
  };

  const add = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const remove = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  const sendToCart = () => {
    postPurchase(token).json((jsonData) => {
      setTickets(jsonData.products);
    });
    console.log(`send: ${selectedTicketId}`);
  };

  const value = useMemo(
    () => ({
      tickets,
      triggerEvent,
      sendToCart,
      setSelectedTicketId,
      setTickets,
      amount,
      buy,
      add,
      remove
    }),
    [tickets, selectedTicketId, amount],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export const useShop = () => useContext(ShopContext);
export default ShopProvider;
