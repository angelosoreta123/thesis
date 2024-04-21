import React from "react";
import SemPic from "../../assets/SemPic.jpg";
import "./Learningprog.css";

const Learningprog = () => {
  return (
    <div>
      <div className="card1upper">
        <h2>Learning Progress</h2>
        <div className="thislastSem">
          <h3>This Semester</h3>
          <h3>Last Semester</h3>
        </div>
      </div>
      <div className="semPic">
        <img id="imgSem" src={SemPic} alt="" />
      </div>
    </div>
  );
};

export default Learningprog;
