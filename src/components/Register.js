import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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

  // Email is already taken logic

  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!user.name || !user.email || !user.password) {
            alert("Name, email, and password are required.");
          } else if (user.password.length < 8) {
            alert("Password must be at least 8 characters.");
          } else {
            alert("Submitting!");
          }
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <FontAwesomeIcon icon={faUser} />
          <input
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <FontAwesomeIcon icon={faLock} />
          <input
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {/* Need to change to Login */}
      <p>
        Are you a member? <a href="./Landing">Log in</a>
      </p>
    </div>
  );
}
