import React from "react";
import Header from "../Header/Header";
import "./AccManage.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Logic nung submission
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
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
