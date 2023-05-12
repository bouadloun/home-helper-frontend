// src/pages/SignupPage.js

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import authService from "./../services/auth.service";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  console.log("Raivochka");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    authService
      .signup(requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="AuthPage">
      <h1 className="auth-title">Sign Up</h1>

      <form className="auth-form" onSubmit={handleSignupSubmit}>
        <input
          className="auth-input"
          type="text"
          name="name"
          value={name}
          placeholder="Username"
          onChange={handleName}
        />

        <input
          className="auth-input"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleEmail}
        />

        <input
          className="auth-input"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handlePassword}
        />

        <button className="auth-button" type="submit">
          Sign Up
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p className="auth-text">Already have account?</p>
      <Link className="auth-link" to={"/login"}>
        {" "}
        Login
      </Link>
    </div>
  );
}

export default SignupPage;
