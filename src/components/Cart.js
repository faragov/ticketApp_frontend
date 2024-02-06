import { useEffect } from "react";
import { useShop } from "../context/ShopContext";
import "./Cart.css";

export default function Cart() {
  const { pendingPurchases, fetchPurchases, buy, setPendingPurchases } =
    useShop();

  useEffect(() => {
    fetchPurchases();
  }, []);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {pendingPurchases.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="table-container">
            <table className="item-table">
              <tbody>
                {pendingPurchases.map((item) => (
                  <tr className="item-row" key={item.ticketId}>
                    <td className="item-cell">
                      <p>{item.name}</p>
                    </td>
                    <td className="item-cell">
                      <p>Price: {item.price}</p>
                    </td>
                    <td className="item-cell">
                      <p>Quantity: {item.amount}</p>
                    </td>
                    <td className="item-cell">
                      <p>{item.totalPrice}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr id="summary-row">
                  <td colSpan="3">{}</td>
                  <td id="total-price-cell">
                    {pendingPurchases.reduce(
                      (total, item) => total + item.price * item.amount,
                      0,
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <button
            type="button"
            onClick={() => {
              buy();
              setPendingPurchases([]);
            }}
          >
            Finish
          </button>
        </>
      )}
    </div>
  );
}
