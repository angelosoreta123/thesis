import React, { useState } from "react";
import Header from "./../../components/Header/Header";
import "./AccManage.css";
import axios from "axios";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/forgot-password", {
        email,
      });
      if (response.status === 200) {
        setSuccessMsg("Password reset email sent. Please check your inbox.");
        setErrMsg("");
      } else {
        setErrMsg("Password reset failed. Please try again later.");
        setSuccessMsg("");
      }
    } catch (err) {
      console.error("Password reset error:", err);
      setErrMsg("Password reset failed. Please try again later.");
      setSuccessMsg("");
    }
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        {errMsg && <p className="errmsg">{errMsg}</p>}
        {successMsg && <p className="success-msg">{successMsg}</p>}
        <form onSubmit={handleSubmit}>
          <h1>Forgot Password</h1>
          <p className="center-text">Enter your email address</p>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>
          <button type="submit" className="btn">
            Continue
          </button>
          <div className="login-link">
            <p>
              Already have an account?{" "}
              <a href="/Login">
                <span>Login</span>
              </a>{" "}
            </p>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
