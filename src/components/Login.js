import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { loginUser } from "../services/AuthService";
import { useAuth } from "../hooks/AuthContext";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      loginUser(user)
        .forbidden(() => {
          // TODO: manage error
        })
        .json((json) => {
          login(json.token);
        });
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email <FontAwesomeIcon icon={faEnvelope} />
          <input
            id="email"
            name="email"
            type="text"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password <FontAwesomeIcon icon={faLock} />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="check">
          Show Password
          <input
            id="check"
            type="checkbox"
            value={user.password}
            onChange={() => setShowPassword((prev) => !prev)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>
        <Link to="/register" className="link">
          If you don&apos;t have an account, click here to register.
        </Link>
      </p>
    </div>
  );
}
