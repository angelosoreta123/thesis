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
          <li className={pathname === "/Dashboard" ? "active" : ""}>
            <a href="/Dashboard">Dashboard</a>
            {pathname === "/Dashboard" && <hr />}
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
          <li className={pathname === "/Profilepage" ? "active" : ""}>
            <a href="/Profilepage">My Profile</a>
            {pathname === "/Profilepage" && <hr />}
          </li>
          <li className={pathname === "/Logout" ? "active" : ""}>
            <a href="/Logout">Logout</a>
            {pathname === "/Logout" && <hr />}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
