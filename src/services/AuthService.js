import api from "../adapters/api";

const resource = "auth";

function loginUser(user) {
  return api.post(`${resource}/login`, user);
}

function registerUser(user) {
  return api.post(`${resource}/register`, user);
}

export { loginUser, registerUser };
