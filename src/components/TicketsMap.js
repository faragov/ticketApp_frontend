import React from "react";
import Ticket from "./Ticket";

function TicketsMap({ tickets }) {
  return (
    <>
      {tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          type={ticket.type}
          description={ticket.description}
          usability={ticket.usability}
          price={ticket.price}
        />
      ))}
    </>
  );
}

export default TicketsMap;
