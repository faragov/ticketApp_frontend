import { useState } from "react";
import Ticket from "./Ticket";

const initialTickets = [
  {
    id: 1,
    name: "One day ticket",
    price: 900,
    duration: "24 h",
    description: "You can use this ticket for 24 hour",
    type: "ticket",
  },
  {
    id: 2,
    name: "Two day ticket",
    price: 1800,
    duration: "48 h",
    description: "You can use this ticket for 48 hour",
    type: "ticket",
  },
  {
    id: 3,
    name: "15 day pass",
    price: 6300,
    duration: "Two-day pass",
    description: "You can use this pass for 15 days",
    type: "pass",
  },
  {
    id: 4,
    name: "30 day pass",
    price: 9500,
    duration: "24 h",
    description: "You can use this pass for 15 days",
    type: "pass",
  },
];

export default function Shop() {
  // !!!! delete the following comment if the setTicket is used !!!!
  // eslint-disable-next-line no-unused-vars
  const [tickets, setTickets] = useState(initialTickets);

  const ticketMap = tickets.map((ticket) => (
    <Ticket
      key={ticket.id}
      type={ticket.name}
      description={ticket.description}
      usability={ticket.duration}
      price={ticket.price}
    />
  ));

  return (
    <>
      <header>Ticket & passes</header>
      <button type="button">Tickets</button>
      <button type="button">Passes</button>
      <div>{ticketMap}</div>
    </>
  );
}
