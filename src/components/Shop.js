// eslint-disable-next-line
import wretch from "wretch";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { useShop } from "../context/ShopContext";
import getAllTickets from "../services/ShopService";
import { useAuth } from "../hooks/AuthContext";
import { add, remove, buy } from "lodash";
import ShopContext from "../context/ShopContext";

export default function Shop() {
  // const [tickets, setTickets] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [countDown, setCountDown] = useState(3);

  const { tickets, setTickets } = useShop();
  const { token } = useAuth();

  useEffect(() => {
    getAllTickets(token).json((jsonData) => {
      setTickets(jsonData.products);
    });
  }, []);

  return (
    <ShopContext>
          <button type="button" onClick={() => buy(selectedTickets)}>
            Buy
          </button>
          {selectedTickets && (
            <div>
              {selectedTickets}
              <button type="button" onClick={() => add}>
                +
              </button>
              <button
                type="button"
                onClick={() => remove}
              >
                -
              </button>
              <button
                type="button"
                onClick={() => sendToCart}
              >
                Add to Cart
              </button>
            </div>
          )}
          <Modal isOpen={success} hasCloseBtn={false}>
            <p>{statusMessage}</p>
            <p>You will be redirected in {countDown} seconds!</p>
          </Modal>
        </ShopContext>
  );
}
