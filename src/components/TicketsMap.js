import React from "react";
import Ticket from "./Ticket";

const TicketsMap = ({ tickets }) => {
  <>
    {tickets.map((ticket) => (
      <Ticket
        key={ticket.id}
        type={ticket.name}
        description={ticket.description}
        usability={ticket.duration}
        price={ticket.price}
      />
    ))}
  </>;
};
export default TicketsMap;
