import React from "react";
import Subjects from "./Subjects";
import all_subject from "../../../assets/Subjectlist";
import "./Subjects.css";

const SubjectPage = () => {
  console.log(all_subject);
  return (
    <div className="subjectwrapper">
      {all_subject.map((subject, index) => {
        return (
          <Subjects
            key={index}
            name={subject.name}
            subjectcode={subject.subject_code}
          />
        );
      })}
    </div>
  );
};

export default SubjectPage;
