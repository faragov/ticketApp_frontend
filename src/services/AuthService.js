import api from "../adapters/api";

const resource = "/auth"

 function login(user) {
    return api.post(`${resource}/login`,user) 
  }

  function register(user) {
    return api.post(`${resource}/register`,user)
  }
export default { login, register };
