import React from "react";
import Header from "../../Header/Header";
import Navbar from "../../Navbar/Navbar";
import SubjectPage from "./SubjectPage";

const Subjectstab = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <h1>Subject List </h1>
      <SubjectPage />
    </div>
  );
};

export default Subjectstab;
