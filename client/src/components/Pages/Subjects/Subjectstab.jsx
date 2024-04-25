import React from "react";
import Header from "../../Header/Header";
import Navbar from "../../Navbar/Navbar";
import SubjectPage from "./SubjectPage";
import Mydeficientsubj from "./Mydeficientsubj";

const Subjectstab = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <h1>My Deficient Subjects</h1>
      <Mydeficientsubj className="subjectsdefsub" />
      <SubjectPage />
    </div>
  );
};

export default Subjectstab;
