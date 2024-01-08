import Ticket from "./Ticket";

export default function Shop() {
  return (
    <>
      <p>Ticket & passes</p>
      <button type="button">Tickets</button>
      <button type="button">Passes</button>
      <div className="tickets">
        <Ticket type="One day ticket" usability={24} price={900} />
        <Ticket type="Two day ticket" usability={48} price={1800} />
      </div>
    </>
  );
}
