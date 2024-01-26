import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import register from "../services/AuthService" 

// eslint-disable-next-line
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const isContainsUppercase = /(?=.*[A-Z])/;
// eslint-disable-next-line no-useless-escape
const isContainsSpecialChar = /(?=(?:.*[.,:;\-\$]){2})/;
const isValidLength = /^.{8,}$/;

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheckEmail(event) {
    const email = event.target.value;

    if (regexEmail.test(email)) {
      setCheckValidEmail(true);
    } else {
      setCheckValidEmail(false);
    }
  }

  function handleCheckPassword(event) {
    const password = event.target.value;

    if (
      isContainsUppercase.test(password) &&
      isContainsSpecialChar.test(password) &&
      isValidLength.test(password)
    ) {
      setCheckValidPassword(true);
    } else {
      setCheckValidPassword(false);
    }
  }

  // + Email logic connect to backend

  function validate() {
    if (!user.name || !user.email || !user.password) {
      alert("Name, email, and password are required.");
      return false;
    }
    if (!checkValidEmail || !checkValidPassword) {
      alert("Not correct email or password.");
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    if (validate()) {
      e.preventDefault();
      try {
        register(user)
        .json(json => console.log(json));
        alert("Success!");
      } catch (err) {
        alert(err);
      }
    }
  };

  function showEmailMessage() {
    if (checkValidEmail) {
      return <p className="valid-text">Email accepted.</p>;
    }

    return <p className="invalid-text">Email must be in good fomat.</p>;
  }

  function showPasswordMessage() {
    if (checkValidPassword) {
      return <p className="valid-text">Password accepted.</p>;
    }

    return (
      <p className="invalid-text">
        Password must be at least 8 Characters Long, contains one Uppercase,and
        two Special Characters.
      </p>
    );
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
            placeholder="Username"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email <FontAwesomeIcon icon={faEnvelope} />
          <input
            id="email"
            name="email"
            value={user.email}
            type="text"
            placeholder="Email"
            onChange={(event) => {
              handleChange(event);
              handleCheckEmail(event);
            }}
          />
        </label>
        <label htmlFor="password">
          Password <FontAwesomeIcon icon={faLock} />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={(event) => {
              handleChange(event);
              handleCheckPassword(event);
            }}
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
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
        {user.email && showEmailMessage()}
        {user.password && showPasswordMessage()}
      </form>
      {/* Need to change to Login */}
      <p>Are you a member?</p>
      <p>
        <Link to="./Landing">Log in</Link>
      </p>
    </div>
  );
}
