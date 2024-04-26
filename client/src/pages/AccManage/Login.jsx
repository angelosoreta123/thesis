import React, { useState } from "react";
import Header from "./../../components/Header/Header";
import "./AccManage.css";
import axios from "axios";

const LOGIN_URL = "api/Login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, {
        email,
        password,
      });
      if (response.status === 200) {
        console.log("Login successful");
      } else {
        setErrMsg("Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.response && err.response.status === 401) {
        setErrMsg("Invalid email or password");
      } else {
        setErrMsg("Login failed. Please try again later.");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        {errMsg && <p className="errmsg ">{errMsg}</p>}
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/Forgot">
              <span>Forgot Password?</span>
            </a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="/Register">
                <span>Register</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
