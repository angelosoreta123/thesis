import React from "react";
import "./Mydeficientsubj.css";

const Mydeficientsubj = ({ selectedSubjects, removeSubject, className }) => {
  return (
    <div className={`defsubjwrapper ${className}`}>
      {selectedSubjects &&
        selectedSubjects.map((subject, index) => (
          <div key={index} className="subject">
            <div className="defsubjectcode">{subject.code}</div>
            <div className="defsubjectinfo">
              <h3>{subject.name}</h3>
            </div>
            <div className="addremove">
              <button id="finishbtn">Finished</button>
              <button
                onClick={() => removeSubject(subject.code, subject.name)}
                id="removebtn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Mydeficientsubj;
