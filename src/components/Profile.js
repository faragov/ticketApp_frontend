import { useState, useEffect } from "react";
// eslint-disable-next-line
import wretch from "wretch";

import TicketsMap from "./TicketsMap";

export default function Profile() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    wretch("http://localhost:4000/tickets")
      .get()
      .json((jsonData) => {
        setTickets(jsonData);
      });
  }, []);

  const triggerEvent = (id) => {
    console.log(`hello from profile ${id}`);
  };

  return (
    <>
      <TicketsMap tickets={tickets} triggerEvent={triggerEvent} />
      <div>hi</div>
    </>
  );
}
