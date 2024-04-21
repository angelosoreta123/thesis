import React from "react";
import "././Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Header from "../../Header/Header";
import SemPic from "../../../assets/SemPic.jpg";
import Recentsub from "../RecentSubj/Recentsub";
import Upcomingclass from "../UpcomingClass/Upcomingclass";
import Deficientsub from "../DeficientSubj/Deficientsub";

function Dashboard() {
  return (
    <div>
      <Header />
      <Navbar />
      <h1>Welcome, TUPM-2X-XXXX! </h1>
      <div className="container">
        <div className="card card1">
          <div className="card1upper">
            <h2>Learning Progress</h2>
            <div className="thislastSem">
              <h3>This Semester</h3>
              <h3>Last Semester</h3>
            </div>
          </div>
          <div className="semPic">
            <img id="imgSem" src={SemPic} alt="" />
          </div>
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
