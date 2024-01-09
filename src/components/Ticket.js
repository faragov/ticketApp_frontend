// eslint-disable-next-line react/prop-types
export default function Ticket({ type, usability, price }) {
  return (
    <ul className="shop-list">
      <li>
        <p>{type}</p>
        <p>You can use this ticket for {usability} hour</p>
        <p>{price} Ft</p>
        <p>{usability} h</p>
      </li>
    </ul>
  );
}
