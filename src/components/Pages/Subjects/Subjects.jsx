import React, { useState } from "react";
import "./Subjects.css";
import { FaPlus } from "react-icons/fa6";

const Subjects = ({ name, subjectcode, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="subject" onClick={() => onClick(subjectcode, name)}>
        <div
          className="subjectcode"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <FaPlus className="addsign" /> : subjectcode}
        </div>
        <div className="subjectinfo">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
