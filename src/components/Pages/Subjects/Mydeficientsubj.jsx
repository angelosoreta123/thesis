import React, { useState } from "react";
import "./Mydeficientsubj.css";
import { IoClose } from "react-icons/io5";

const Mydeficientsubj = ({ selectedSubjects, removeSubject, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`defsubjwrapper ${className}`}>
      {selectedSubjects &&
        selectedSubjects.map((subject, index) => (
          <div
            key={index}
            className="subject"
            onClick={() => removeSubject(subject.code, subject.name)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="defsubjectcode">
              {hoveredIndex === index ? (
                <IoClose className="closesign" />
              ) : (
                subject.code
              )}
            </div>
            <div className="defsubjectinfo">
              <h3>{subject.name}</h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Mydeficientsubj;
