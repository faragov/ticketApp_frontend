import { useEffect } from "react";
import TicketsMap from "./TicketsMap";
import { useShop } from "../context/ShopContext";

export default function Shop() {
  const { tickets, fetchTickets } = useShop();

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <>
      <h1>Tickets</h1>
      <TicketsMap tickets={tickets} />
    </>
  );
}
