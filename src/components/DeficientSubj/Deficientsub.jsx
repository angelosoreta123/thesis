import React from "react";
import "./Deficientsub.css";
import Mydeficientsubj from "../Pages/Subjects/Mydeficientsubj";

const Deficientsub = () => {
  const storedSubjects =
    JSON.parse(localStorage.getItem("selectedSubjects")) || [];

  // Take only the first 5 subjects if the array length is greater than 5
  const displayedSubjects = storedSubjects.slice(0, 5);

  return (
    <div>
      <div className="card3upper">
        <h2>My Deficient Subjects</h2>
        <h3>See All</h3>
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
