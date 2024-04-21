import React from "react";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div>
      <nav className="navBar">
        <ul className="left-side">
          <li className={pathname === "/" ? "active" : ""}>
            <a href="/">Dashboard</a>
            {pathname === "/" && <hr />}
          </li>
          <li className={pathname === "/Subjects" ? "active" : ""}>
            <a href="/Subjects">Subjects</a>
            {pathname === "/Subjects" && <hr />}
          </li>
          <li className={pathname === "/Semester" ? "active" : ""}>
            <a href="/Semester">Semester</a>
            {pathname === "/Semester" && <hr />}
          </li>
          <li className={pathname === "/Curriculum" ? "active" : ""}>
            <a href="/Curriculum">Curriculum</a>
            {pathname === "/Curriculum" && <hr />}
          </li>
        </ul>
        <ul className="right-side">
          <li className={pathname === "/MyProfile" ? "active" : ""}>
            <a href="/MyProfile">My Profile</a>
            {pathname === "/MyProfile" && <hr />}
          </li>
          <li className={pathname === "/Login" ? "active" : ""}>
            <a href="/Login">Logout</a>
            {pathname === "/Login" && <hr />}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
