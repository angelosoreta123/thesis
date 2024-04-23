import React, { useState } from "react";
import Subjects from "./Subjects";
import Mydeficientsubj from "./Mydeficientsubj";
import all_subject from "../../../assets/Subjectlist";
import "./Subjects.css";

const SubjectPage = () => {
  const [selectedSubjects, setSelectedSubjects] = useState(
    JSON.parse(localStorage.getItem("selectedSubjects")) || []
  );

  const updateLocalStorage = (subjects) => {
    localStorage.setItem("selectedSubjects", JSON.stringify(subjects));
  };

  const handleSubjectClick = (subjectCode, name) => {
    const updatedSubjects = [
      ...selectedSubjects,
      { code: subjectCode, name: name },
    ];
    setSelectedSubjects(updatedSubjects);
    updateLocalStorage(updatedSubjects);
  };

  const removeSubject = (subjectCode, name) => {
    const updatedSubjects = selectedSubjects.filter(
      (subject) => !(subject.code === subjectCode && subject.name === name)
    );
    setSelectedSubjects(updatedSubjects);
    updateLocalStorage(updatedSubjects);
  };

  const filteredSubjects = all_subject.filter(
    (subject) =>
      !selectedSubjects.some(
        (selectedSubject) =>
          selectedSubject.code === subject.subject_code &&
          selectedSubject.name === subject.name
      )
  );

  return (
    <>
      <Mydeficientsubj
        selectedSubjects={selectedSubjects}
        removeSubject={removeSubject}
      />
      <div>
        <h1>Subjects</h1>
        <div className="subjectwrapper">
          {filteredSubjects.map((subject, index) => (
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
