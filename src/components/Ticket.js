import "./Ticket.css";

export default function Ticket({ type, usability, price, description }) {
  return (
    <div className="ticket-card">
      <p>{type}</p>
      <p>{description} </p>
      <p>{price} Ft</p>
      <p>{usability}</p>
    </div>
  );
}
