import { useEffect } from "react";
import { useShop } from "../context/ShopContext";
import TicketsMap from "./TicketsMap";

export default function PurchasedTickets() {
  const { fetchBoughtTickets, purchasedTickets } = useShop();

  useEffect(() => {
    fetchBoughtTickets();
  }, []);

  return (
    <>
      <h1>Purchased Tickets</h1>
      <TicketsMap
        tickets={purchasedTickets}
        actionElement={<div />}
        parent="purchased"
      />
    </>
  );
}
