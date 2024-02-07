import { createContext, useState, useMemo, useContext } from "react";
import {
  getPendingPurchases,
  getPurchasedTickets,
  postPurchase,
  updatePurchase,
} from "../services/CartService";
import { getCartMap, getCartItems } from "../services/TicketConverter";
import { useAuth } from "../hooks/AuthContext";
import getAllTickets from "../services/ShopService";

const ShopContext = createContext();

function ShopProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState(0);
  const [pendingPurchases, setPendingPurchases] = useState([]);
  const [purchasedTickets, setPurchasedTickets] = useState([]);
  const { token } = useAuth();

  const fetchTickets = () =>
    getAllTickets(token).json((json) => setTickets(json.products));

  const getPurchaseIds = () =>
    pendingPurchases.flatMap((purchase) => purchase.purchases);

  const fetchPurchases = () =>
    getPendingPurchases(token).json((json) =>
      setPendingPurchases(getCartItems(getCartMap(json))),
    );

  const sendToCart = (id, amount) => {
    postPurchase(token, { productID: id, amount }).json((json) =>
      console.log(json),
    );
  };

  const buy = () => {
    updatePurchase(token, {
      status: "BOUGHT",
      purchaseIds: getPurchaseIds(),
    }).json(() => setPendingPurchases([]));
  };

  const fetchBoughtTickets = () => {
    getPurchasedTickets(token, "bought").json((json) =>
      setPurchasedTickets(json),
    );
  };

  const fetchActiveTickets = () => {
    getPurchasedTickets(token, "active").json((json) =>
      setPurchasedTickets(json),
    );
  };

  const fetchUsedTickets = () => {
    getPurchasedTickets(token, "used").json((json) =>
      setPurchasedTickets(json),
    );
  };

  const value = useMemo(
    () => ({
      tickets,
      pendingPurchases,
      purchasedTickets,
      fetchTickets,
      fetchPurchases,
      fetchBoughtTickets,
      fetchActiveTickets,
      fetchUsedTickets,
      sendToCart,
      setSelectedTicketId,
      setTickets,
      buy,
      setPendingPurchases,
    }),
    [tickets, pendingPurchases, selectedTicketId, purchasedTickets],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export const useShop = () => useContext(ShopContext);
export default ShopProvider;
