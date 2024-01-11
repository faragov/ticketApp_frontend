import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Login() {
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

  function validate() {
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
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="email">Email</label>
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          id="email"
          name="email"
          type="text"
          value={user.email}
          onChange={handleChange}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="password">Password</label>
        <FontAwesomeIcon icon={faLock} />
        <input
          id="password"
          name="password"
          type="text"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        <Link to="./Landing">
          <p>{`If you don't have an account, click here to register.`}</p>
        </Link>
      </p>
    </div>
  );
}
