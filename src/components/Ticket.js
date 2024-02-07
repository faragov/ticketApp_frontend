import React, { useState } from "react";
import "./Ticket.css";

export default function Ticket({
  id,
  type,
  usability,
  price,
  description,
  actionElement,
}) {
  const [showField, setShowField] = useState(false);

  return (
    <div className="ticket-card" onMouseLeave={() => setShowField(false)}>
      <h3>{type}</h3>
      <p>{description} </p>
      <p>{price} Ft</p>
      <p>{usability}</p>
      {React.cloneElement(actionElement, { id, showField, setShowField })}
    </div>
  );
}
