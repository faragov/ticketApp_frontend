import { createContext, useState, useMemo, useContext } from "react";
import {
  getPendingPurchases,
  getPurchasedTickets,
  postPurchase,
  updatePurchase,
} from "../services/CartService";
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

  const getCartMap = (purchases) =>
    purchases.reduce((acc, curr) => {
      const { id: purchaseId, ticket } = curr;
      const { id: ticketId, name, price, type, duration } = ticket;

      if (!acc[ticketId]) {
        acc[ticketId] = [];
      }

      acc[ticketId].push({ purchaseId, name, price, type, duration });

      return acc;
    }, {});

  const getCartItems = (cartMap) =>
    Object.entries(cartMap).map(([ticketId, purchases]) => {
      const totalPrice = purchases.reduce(
        (total, { price }) => total + price,
        0,
      );
      const amount = purchases.length;

      const { name, type, duration } = purchases[0];

      return {
        ticketId,
        name,
        price: totalPrice / amount,
        totalPrice,
        amount,
        type,
        duration,
        purchases: purchases.map(({ purchaseId }) => purchaseId),
      };
    });

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
