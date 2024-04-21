import React, { useEffect, useState } from "react";
import "./Subjects.css";

const Subjects = (props) => {
  // Function to generate a random color in hexadecimal format
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  // State to store the background color for the subject code
  const [bgColor, setBgColor] = useState(() => {
    // Check if the color is stored in local storage
    const storedColor = localStorage.getItem(
      `subjectColor-${props.subjectcode}`
    );
    return storedColor || getRandomColor(); // If not stored, generate a random color
  });

  // Save the color to local storage when it changes
  useEffect(() => {
    localStorage.setItem(`subjectColor-${props.subjectcode}`, bgColor);
  }, [bgColor, props.subjectcode]);

  return (
    <div>
      <div className="subject">
        <div className="subjectcode" style={{ backgroundColor: bgColor }}>
          {props.subjectcode}
        </div>
        <div className="subjectinfo">
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
