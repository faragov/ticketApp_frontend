import api from "../adapters/securedApi";

const resource = "api/purchases";

function getPendingPurchases(token) {
  return api.get(`${resource}`, token);
}

function postPurchase(token, body) {
  return api.post(`${resource}`, token, body);
}

function updatePurchase(token, body) {
  return api.put(`${resource}`, token, body);
}

export { getPendingPurchases, postPurchase, updatePurchase };
