import React from "react";
import Ticket from "./Ticket";
import "./TicketMap.css";

function TicketsMap({ tickets }) {
  return (
    <div className="ticket-grid">
      {tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          id={ticket.id}
          type={ticket.type}
          description={ticket.description}
          usability={ticket.usability}
          price={ticket.price}
        />
      ))}
    </div>
  );
}

export default TicketsMap;
