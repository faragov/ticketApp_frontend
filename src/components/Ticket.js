export default function Ticket({ type, usability, price, description }) {
  return (
    <ul className="ticket-description">
      <li>
        <p>{type}</p>
        <p>{description} </p>
        <p>{price} Ft</p>
        <p>{usability}</p>
      </li>

    </ul>
  );
}

/*
export default function Ticket({ ticket }) {
  return (
    <div key={ticket.id}>
      <div>
        <p>{ticket.type}</p>
        <p>{ticket.usability}</p>
        <p>{ticket.price}</p>
        <p>{ticket.description}</p>
      </div>
    </div>
  );
}
*/
