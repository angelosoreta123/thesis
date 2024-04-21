import React from "react";
import "./Subjects.css";

const Subjects = (props) => {
  console.log(props.units);
  return (
    <div>
      <div className="subject">
        <div className="subjectcode">{props.subjectcode}</div>
        <div className="subjectinfo">
          <h3>{props.name}</h3>
          <h4>{props.units}</h4>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
