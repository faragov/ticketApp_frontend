import { useState } from "react";
import Ticket from "./Ticket";

export default function Shop() {
  const [ticket] = useState([
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
  ]);

  const ticketType = ticket.map((tickets) => (
    <Ticket
      type={tickets.description}
      usability={tickets.duration}
      price={tickets.price}
    />
  ));

  return (
    <>
      <header>Ticket & passes</header>
      <button type="button">Tickets</button>
      <button type="button">Passes</button>
      <div>{ticketType}</div>
    </>
  );
}
