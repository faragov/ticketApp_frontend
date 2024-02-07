import api from "../adapters/securedApi";

const resource = "api/purchases";

function getPendingPurchases(token) {
  return api.get(`${resource}?status=PENDING`, token);
}

function getPurchasedTickets(token, status) {
  return api.get(`${resource}?status=${status}`, token);
}

function postPurchase(token, body) {
  return api.post(`${resource}`, token, body);
}

function updatePurchase(token, body) {
  return api.put(`${resource}`, token, body);
}

export {
  getPendingPurchases,
  getPurchasedTickets,
  postPurchase,
  updatePurchase,
};
