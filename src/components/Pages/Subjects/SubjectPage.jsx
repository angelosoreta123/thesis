import React, { useState } from "react";
import Subjects from "./Subjects";
import Mydeficientsubj from "./Mydeficientsubj";
import all_subject from "../../../assets/Subjectlist";
import "./Subjects.css";

const SubjectPage = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleSubjectClick = (subjectCode, name) => {
    if (
      !selectedSubjects.some(
        (subject) => subject.code === subjectCode && subject.name === name
      )
    ) {
      setSelectedSubjects([
        ...selectedSubjects,
        { code: subjectCode, name: name },
      ]);
    }
  };

  return (
    <>
      <Mydeficientsubj selectedSubjects={selectedSubjects} />
      <div>
        <h1>Subjects</h1>
        <div className="subjectwrapper">
          {all_subject.map((subject, index) => (
            <Subjects
              key={index}
              name={subject.name}
              subjectcode={subject.subject_code}
              onClick={handleSubjectClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SubjectPage;
