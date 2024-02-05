import api from "../adapters/securedApi";

const resource = "/products";

export default function getAllTickets(token) {
  return api.get(`${resource}`, token);
}
