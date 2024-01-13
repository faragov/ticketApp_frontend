import wretch from "wretch";
import { useState, useEffect } from "react";
import Ticket from "./Ticket";

export default function Shop() {
  // !!!! delete the following comment if the setTicket is used !!!!
  // eslint-disable-next-line no-unused-vars
  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    wretch("http://localhost:4000/tickets")
      .get()
      .json((json) => {
        setTickets(json);
      });
  }, []);

  const ticketMap = tickets
    ? tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          type={ticket.name}
          description={ticket.description}
          usability={ticket.duration}
          price={ticket.price}
        />
      ))
    : null;

  return (
    <>
      <header>Ticket & passes</header>
      <button type="button">Tickets</button>
      <button type="button">Passes</button>
      <div>{ticketMap}</div>
    </>
  );
}
