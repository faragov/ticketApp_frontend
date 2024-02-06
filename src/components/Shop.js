// eslint-disable-next-line
import wretch from "wretch";
import { useEffect } from "react";
import TicketsMap from "./TicketsMap";
import { useShop } from "../context/ShopContext";

export default function Shop() {
  // const [tickets, setTickets] = useState([]);

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

/*
<button type="button" onClick={() => buy(selectedTickets)}>
        Buy
      </button>
      {selectedTickets && (
        <div>
          {selectedTickets}
          <button type="button" onClick={() => add}>
            +
          </button>
          <button type="button" onClick={() => remove}>
            -
          </button>
          <button type="button" onClick={() => sendToCart}>
            Add to Cart
          </button>
        </div>
      )}

*/
