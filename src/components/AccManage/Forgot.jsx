import React from "react";
import Header from "../Header/Header";
import "./AccManage.css";

const Forgot = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Logic nung submission
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          {" "}
          <h1>Forgot Password</h1>
          <p className="center-text">Enter your email address</p>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bxs-user"></i>
          </div>
          <button type="submit" className="btn">
            Continue
          </button>
          <div className="register-link">
            <p>Already have an account? Login </p>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
