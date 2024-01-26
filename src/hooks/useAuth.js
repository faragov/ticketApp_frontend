import { useEffect } from "react";
import AuthService from "../services/AuthService";


export const useAuth = () => {
  useEffect(() => {
    const username = "exampleUser";
    const password = "examplePassword";

    AuthService.login(username, password)
      .then((response) => {
        console.log("Login Response:", response);
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });

    const registerUsername = "newUser";
    const registerEmail = "newuser@example.com";
    const registerPassword = "newPassword";

    AuthService.register(registerUsername, registerEmail, registerPassword)
      .then((response) => {
        console.log("Register Response:", response);
      })
      .catch((error) => {
        console.error("Register Error:", error);
      });
  }, []);

  return AuthService;
};

export default useAuth;
