import React from "react";
import "./Mydeficientsubj.css";

const Mydeficientsubj = ({ selectedSubjects }) => {
  // Check if selectedSubjects is undefined or empty
  if (!selectedSubjects || selectedSubjects.length === 0) {
    return <div className="nodeftext">No deficient subjects selected</div>;
  }

  return (
    <div className="defsubjwrapper">
      <div className="iconcontainer">
        <h2>My Deficient Subjects:</h2>
        <ul>
          {selectedSubjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mydeficientsubj;
