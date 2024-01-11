import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    name: "Username",
    email: "Email",
    password: "Password",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const [showPassword, setShowPassword] = useState(false);

  // + Email logic

  function validate() {
    if (!user.name || !user.email || !user.password) {
      alert("Name, email, and password are required.");
      return false;
    }
    if (user.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      alert("Submitting!");
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name <FontAwesomeIcon icon={faUser} />
          <input
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email <FontAwesomeIcon icon={faEnvelope} />
          <input
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password <FontAwesomeIcon icon={faLock} />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <label htmlFor="check">Show Password</label>
          <input
            id="check"
            type="checkbox"
            value={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {/* Need to change to Login */}
      <p>Are you a member?</p>
      <p>
        <Link to="./Landing">Log in</Link>
      </p>
    </div>
  );
}
