import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Ticket({ type, usability, price }) {
  const [ticket, setTicket] = useState(0);

  function handleClick() {
    setTicket(ticket + 1);
  }

  return (
    <ul className="shop-list">
      <li>
        <p>{type}</p>
        <p>You can use this ticket for {usability} hour</p>
        <p>{price} Ft</p>
        <p>{usability} h</p>
        <button type="button" onClick={handleClick}>
          Add to cart
        </button>
      </li>
    </ul>
  );
}
