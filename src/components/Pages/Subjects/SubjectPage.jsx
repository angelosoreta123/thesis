import React, { useState, useEffect } from "react";
import Subjects from "./Subjects";
import Mydeficientsubj from "./Mydeficientsubj";
import all_subject from "../../../assets/Subjectlist";
import "./Subjects.css";

const SubjectPage = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [finishedSubjects, setFinishedSubjects] = useState([]);

  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem("selectedSubjects"));
    if (storedSubjects) {
      setSelectedSubjects(storedSubjects);
    }
  }, []);

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

  const finishedSubject = (code, name) => {
    const subjectToMove = selectedSubjects.find(
      (subject) => subject.code === code && subject.name === name
    );
    if (subjectToMove) {
      const updatedFinishedSubjects = [...finishedSubjects, subjectToMove];
      setFinishedSubjects(updatedFinishedSubjects);
      removeSubject(code, name);
    }
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
        finishedSubject={finishedSubject}
      />
      <h1>Finished Subjects</h1>
      <div className="finishedsubjwrapper">
        {finishedSubjects.map((subject, index) => (
          <div key={index} className="subject">
            <div className="finishsubjectcode">{subject.code}</div>
            <div className="finishsubjectinfo">
              <h3>{subject.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1>Subjects</h1> <br />
        <h5>(Click a subject to add in My Deficient Subjects)</h5>
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
