import api from "../adapters/securedApi";

const resource = "/purchases";

export default function postPurchase(token) {
  return api.post(`${resource}`, token);
}