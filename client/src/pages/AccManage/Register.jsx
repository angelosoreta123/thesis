import React, { useRef, useState } from "react";
import Header from "./../../components/Header/Header";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../context/ContextProvider";
import "./AccManage.css";

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const courseRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [errmsg, setErrMsg] = useState(null);
  const { setUser, setToken } = useStateContext();

  const registerUser = async (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      course: courseRef.current.value,
      password: passwordRef.current.value,
      confirm_password: confirmPasswordRef.current.value,
    };
    axiosClient
      .post("/Register", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrMsg(response.data.errors);
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        <form onSubmit={registerUser}>
          <h1>Create Your Account</h1>
          {errmsg && (
            <div className="errmsg">
              {Object.keys(errmsg).map((key) => (
                <p key={key}>{errmsg[key][0]}</p>
              ))}
            </div>
          )}

          <div className="reginput-box">
            <input
              type="text"
              placeholder="Full Name"
              ref={nameRef}
              autoComplete="off"
              required
            />
          </div>
          <div className="reginput-box">
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
              autoComplete="off"
              required
            />
          </div>
          <div className="reginput-box">
            <select ref={courseRef} required>
              <option value="" disabled>
                Select your Course
              </option>
              <option value="Bachelor of Science in Computer Science - STEM">
                Bachelor of Science in Computer Science - STEM
              </option>
              <option value="Bachelor of Science in Computer Science - NONSTEM">
                Bachelor of Science in Computer Science - NONSTEM
              </option>
              <option value="Bachelor of Science in Information Systems - STEM">
                Bachelor of Science in Information Systems - STEM
              </option>
              <option value="Bachelor of Science in Information Systems - NONSTEM">
                Bachelor of Science in Information Systems - NONSTEM
              </option>
              <option value="Bachelor of Science in Information Technology - STEM">
                Bachelor of Science in Information Technology - STEM
              </option>
              <option value="Bachelor of Science in Information Technology - NONSTEM">
                Bachelor of Science in Information Technology - NONSTEM
              </option>
            </select>
          </div>
          <div className="reginput-box">
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </div>
          <div className="reginput-box">
            <input
              type="password"
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
              required
            />
          </div>
          <button type="submit" className="regbtn">
            Sign Up
          </button>
          <div className="login-link">
            <p>
              Already have an account?{" "}
              <a href="/Login">
                <span>Login</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
