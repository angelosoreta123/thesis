import React from "react";
import "./Semester.css";
import Header from "../../Header/Header";
import Recentsub from "../../RecentSubj/Recentsub";
import Upcomingclass from "../../UpcomingClass/Upcomingclass";
import Navbar from "../../Navbar/Navbar";

const Semester = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <h1>Welcome, TUPM-2X-XXXX! </h1>
      <div className="container">
        <div className="cardA">
          <h2 className="semSY">S.Y. 20XX - 20XX</h2>
          <div className="semContainer">
            <div className="firstSem">First Sem</div>
            <div className="secondSem">Second Sem</div>
          </div>
        </div>
        <div className="cardB">
          <div className="right-sideSub">
            <div className="upper-partSub">
              <Recentsub />
            </div>
            <div className="lower-partSub">
              <Upcomingclass />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Semester;
