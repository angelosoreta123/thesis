import React from "react";
import "./Mydeficientsubj.css";

const Mydeficientsubj = ({ selectedSubjects }) => {
  return (
    <div className="defsubjwrapper">
      {selectedSubjects &&
        selectedSubjects.map((subject, index) => (
          <div key={index} className="subject">
            <div className="defsubjectcode">{subject.code}</div>
            <div className="defsubjectinfo">
              <h3>{subject.name}</h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Mydeficientsubj;
