import React, { useState } from "react";
import "./Mydeficientsubj.css";

const Mydeficientsubj = ({
  selectedSubjects,
  removeSubject,
  finishedSubject,
  className,
}) => {
  const handleRemoveSubject = (code, name) => {
    const confirmRemove = window.confirm("Are you sure you want to remove it?");
    if (confirmRemove) {
      removeSubject(code, name);
    }
  };

  const handleFinishedSubject = (code, name) => {
    const confirmFinished = window.confirm(
      "Are you sure you are finished with this subject?"
    );
    if (confirmFinished) {
      finishedSubject(code, name);
    }
  };

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
              <button
                onClick={() =>
                  handleFinishedSubject(subject.code, subject.name)
                }
                id="finishbtn"
              >
                Finished
              </button>
              <button
                onClick={() => handleRemoveSubject(subject.code, subject.name)}
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
