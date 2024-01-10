export default function Ticket({ type, usability, price }) {
  return (
    <ul className="ticket-description">
      <li>
        <p>{type}</p>
        <p>{usability} </p>
        <p>{price} Ft</p>
        <p>{usability}</p>
      </li>
      <button type="button">Add to cart</button>
    </ul>
  );
}
