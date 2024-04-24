import React, { useRef, useState, useEffect } from "react";
import Header from "../Header/Header";
import "./AccManage.css";

const Register = () => {
  const [birthdateType, setBirthdateType] = useState("text");

  const handleBirthdateFocus = () => {
    setBirthdateType("date");
  };

  const handleBirthdateBlur = () => {
    setBirthdateType("text");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic nung submission
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Create Your Account</h1>
          <div className="input-box">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-box">
            <input
              placeholder="Birthdate"
              type={birthdateType}
              onFocus={handleBirthdateFocus}
              onBlur={handleBirthdateBlur}
              id="birthday"
              required
            />
            <span id="birthdate-error" className="error-message">
              Invalid birthdate
            </span>
          </div>
          <button type="submit" className="btn">
            Sign Up
          </button>
          <div className="login-link">
            <p>
              Already have an account? <span>Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
