import React, { useState, useEffect } from "react";
import Subjects from "./Subjects";
import Mydeficientsubj from "./Mydeficientsubj";
import all_subject from "../../assets/Subjectlist";
import "./Subjects.css";

const SubjectPage = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [finishedSubjects, setFinishedSubjects] = useState([]);

  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem("selectedSubjects"));
    const storedFinishedSubjects = JSON.parse(
      localStorage.getItem("finishedSubjects")
    );
    if (storedSubjects) {
      setSelectedSubjects(storedSubjects);
    }
    if (storedFinishedSubjects) {
      setFinishedSubjects(storedFinishedSubjects);
    }
  }, []);

  const updateLocalStorage = (selected, finished) => {
    localStorage.setItem("selectedSubjects", JSON.stringify(selected));
    localStorage.setItem("finishedSubjects", JSON.stringify(finished));
  };

  const handleSubjectClick = (subjectCode, name) => {
    if (
      !selectedSubjects.some(
        (subject) => subject.code === subjectCode && subject.name === name
      ) &&
      !finishedSubjects.some(
        (subject) => subject.code === subjectCode && subject.name === name
      )
    ) {
      const updatedSubjects = [
        ...selectedSubjects,
        { code: subjectCode, name: name },
      ];
      setSelectedSubjects(updatedSubjects);
      updateLocalStorage(updatedSubjects, finishedSubjects);
    }
  };

  const removeSubject = (subjectCode, name) => {
    const updatedSubjects = selectedSubjects.filter(
      (subject) => !(subject.code === subjectCode && subject.name === name)
    );
    setSelectedSubjects(updatedSubjects);
    updateLocalStorage(updatedSubjects, finishedSubjects);
  };

  const handleRemoveFinishedSubject = (subjectCode, name) => {
    const updatedFinishedSubjects = finishedSubjects.filter(
      (subject) => !(subject.code === subjectCode && subject.name === name)
    );
    setFinishedSubjects(updatedFinishedSubjects);
    updateLocalStorage(selectedSubjects, updatedFinishedSubjects);
  };

  const finishedSubject = (code, name) => {
    const subjectToMove = selectedSubjects.find(
      (subject) => subject.code === code && subject.name === name
    );
    if (subjectToMove) {
      const updatedFinishedSubjects = [...finishedSubjects, subjectToMove];
      setFinishedSubjects(updatedFinishedSubjects);
      const updatedSelectedSubjects = selectedSubjects.filter(
        (subject) => !(subject.code === code && subject.name === name)
      );
      setSelectedSubjects(updatedSelectedSubjects);
      updateLocalStorage(updatedSelectedSubjects, updatedFinishedSubjects);
    }
  };

  const isSubjectSelected = (subjectCode, name) => {
    return (
      selectedSubjects.some(
        (subject) => subject.code === subjectCode && subject.name === name
      ) ||
      finishedSubjects.some(
        (subject) => subject.code === subjectCode && subject.name === name
      )
    );
  };

  const filteredSubjects = all_subject.filter(
    (subject) => !isSubjectSelected(subject.subject_code, subject.name)
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
        {finishedSubjects.length === 0 ? <h2>No Finished Subject</h2> : null}
        {finishedSubjects.map((subject, index) => (
          <div key={index} className="subject">
            <div className="finishsubjectcode">{subject.code}</div>
            <div className="finishsubjectinfo">
              <h3>{subject.name}</h3>
            </div>
            <button
              onClick={() =>
                handleRemoveFinishedSubject(subject.code, subject.name)
              }
              id="finishremovebtn"
            >
              Remove
            </button>
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
              onClick={() =>
                handleSubjectClick(subject.subject_code, subject.name)
              }
              disabled={isSubjectSelected(subject.subject_code, subject.name)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SubjectPage;
