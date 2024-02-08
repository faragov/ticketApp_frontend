import React from "react";
import Ticket from "./Ticket";
import "./TicketMap.css";

function TicketsMap({ tickets, actionElement, parent }) {
  return (
    <div className={parent === "purchased" ? "" : "ticket-grid"}>
      {tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          id={ticket.id}
          type={ticket.type}
          description={ticket.description}
          usability={ticket.usability}
          price={ticket.price}
          actionElement={actionElement}
        />
      ))}
    </div>
  );
}

export default TicketsMap;
