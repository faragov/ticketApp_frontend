export default function Ticket({ type, usability, price, description }) {
  return (
    <ul className="ticket-description">
      <li>
        <p>{type}</p>
        <p>{description} </p>
        <p>{price} Ft</p>
        <p>{usability}</p>
      </li>
      <button type="button">Add to cart</button>
    </ul>
  );
}
