import { createContext, useState, useMemo, useContext } from "react";
// eslint-disable-next-line
import wretch from "wretch";

const ShopContext = createContext();

function ShopProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState(0);
  // set the amount when the ticket is being selected
  // const [amount, setAmount] = useState(1);

  const triggerEvent = (id) => {
    console.log(`hello from shop: ${id}`);
  };

  const sendToCart = () => {
    console.log(`send: ${selectedTicketId}`);
  };

  const value = useMemo(
    () => ({
      tickets,
      triggerEvent,
      sendToCart,
      setSelectedTicketId,
      setTickets,
    }),
    [tickets, selectedTicketId],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export const useShop = () => useContext(ShopContext);
export default ShopProvider;
