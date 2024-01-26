import {api} from "../adapters/api";
const resource = "/auth";

class AuthService {
  login(user) {
    return api.post(`${resource}/login`,user) 
  }

  register(user) {
    return api.post(`${resource}/register`,user)
  }
}
export default new AuthService();
