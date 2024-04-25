import React from "react";
import "./Deficientsub.css";
import Mydeficientsubj from "../Pages/Subjects/Mydeficientsubj";

const Deficientsub = () => {
  const storedSubjects =
    JSON.parse(localStorage.getItem("selectedSubjects")) || [];

  const displayedSubjects = storedSubjects.slice(0, 4);

  return (
    <div>
      <div className="card3upper">
        <h2>My Deficient Subjects</h2>
        <a href="/Subjects">
          <h3 id="seeall">See All</h3>
        </a>
      </div>
      <div className="card3lower">
        <Mydeficientsubj
          selectedSubjects={displayedSubjects}
          className="dashboarddefsubj"
        />
      </div>
    </div>
  );
};

export default Deficientsub;
