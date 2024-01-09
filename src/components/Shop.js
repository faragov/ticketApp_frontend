import { useState } from "react";
import Ticket from "./Ticket";

export default function Shop() {
  const [ticket, setticket] = useState(0);

  function handleClick() {
    setticket(ticket + 1);
  }

  return (
    <>
      <p>Ticket & passes</p>
      <button type="button">Tickets</button>
      <button type="button">Passes</button>
      <div className="tickets">
        <Ticket type="One day ticket" usability={24} price={900} />
        <button type="button" onClick={handleClick}>
          Add to cart
        </button>

        <Ticket type="Two day ticket" usability={48} price={1800} />
        <button type="button" onClick={handleClick}>
          Add to cart
        </button>
      </div>
    </>
  );
}
