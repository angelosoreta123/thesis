import React from "react";
import "././Dashboard.css";
import Navbar from "../../Navbar/Navbar";
import Header from "../../Header/Header";
import Recentsub from "../../RecentSubj/Recentsub";
import Upcomingclass from "../../UpcomingClass/Upcomingclass";
import Learningprog from "../../LearningProgress/Learningprog";
import Deficientsub from "../../DeficientSubj/Deficientsub";

function Dashboard() {
  return (
    <div>
      <Header />
      <Navbar />
      <h1>Welcome, TUPM-2X-XXXX! </h1>
      <div className="container">
        <div className="card card1">
          <Learningprog />
        </div>
        <div className="card card2">
          <Recentsub />
        </div>
        <div className="card card3">
          <Deficientsub />
        </div>
        <div className="card card4">
          <Upcomingclass />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
