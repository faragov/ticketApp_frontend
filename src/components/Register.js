import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// eslint-disable-next-line
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const isConatinsUppercase = /(?=.*[A-Z])/;
// eslint-disable-next-line no-useless-escape
const isConatinsSpecialChar = /(?=(?:.*[.,:;\-\$]){2})/;
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
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessageColor, setEmailMessageColor] = useState("red");
  const [passwordMessageColor, setPasswordMessageColor] = useState("red");

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const handleCheckEmail = (event) => {
    const email = event.target.value;

    if (regexEmail.test(email)) {
      setCheckValidEmail(true);
      setEmailMessage("Email accepted.");
      setEmailMessageColor("green");
    } else {
      setCheckValidEmail(false);
      setEmailMessage("Email must be in good fomat.");
      setEmailMessageColor("red");
    }
  };

  const handleCheckPassword = (event) => {
    const password = event.target.value;

    if (
      isConatinsUppercase.test(password) &&
      isConatinsSpecialChar.test(password) &&
      isValidLength.test(password)
    ) {
      setCheckValidPassword(true);
      setPasswordMessage("Password accepted.");
      setPasswordMessageColor("green");
    } else {
      setCheckValidPassword(false);
      setPasswordMessage(
        "Password must be at least 8 Characters Long, contains one Uppercase,and two Special Characters.",
      );
      setPasswordMessageColor("red");
    }
  };

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
        <p style={{ color: emailMessageColor }}>{emailMessage}</p>
        <p style={{ color: passwordMessageColor }}>{passwordMessage}</p>
      </form>
      {/* Need to change to Login */}
      <p>Are you a member?</p>
      <p>
        <Link to="./Landing">Log in</Link>
      </p>
    </div>
  );
}
