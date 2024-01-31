import api from "../adapters/api";

const resource = "auth";

function loginUser(user) {
  return api.post(`${resource}/login`, user);
}

function registerUser(user) {
  return api.post(`${resource}/register`, user);
}
function finishCart(cartItems) {
  return api.post(`${resource}/cart`, cartItems);
}
export { loginUser, registerUser, finishCart };
