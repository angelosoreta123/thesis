import React, { useState } from "react";
import Subjects from "./Subjects";
import all_subject from "../../../assets/Subjectlist";
import "./Subjects.css";

const SubjectPage = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleSubjectClick = (subjectCode) => {
    setSelectedSubjects([...selectedSubjects, subjectCode]);
  };

  return (
    <div className="subjectwrapper">
      {all_subject.map((subject, index) => {
        return (
          <Subjects
            key={index}
            name={subject.name}
            subjectcode={subject.subject_code}
            onClick={handleSubjectClick} // Pass the function directly
          />
        );
      })}
    </div>
  );
};

export default SubjectPage;
