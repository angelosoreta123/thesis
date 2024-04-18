import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navBar">
        <ul className="left-side">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/Subjects">Subjects</Link>
          </li>
          <li>
            <Link to="/Semester">Semester</Link>
          </li>
          <li>
            <Link to="/Curriculum">Curriculum</Link>
          </li>
        </ul>
        <ul className="right-side">
          <li>
            <Link to="/MyProfile">My Profile</Link>
          </li>
          <li>
            <Link to="/Logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
