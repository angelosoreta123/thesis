import React from "react";
import "./Curriculum.css";
import Header from "../../Header/Header";
import Navbar from "../Navbar/Navbar";
import Recentsub from "../RecentSubj/Recentsub";
import Upcomingclass from "../UpcomingClass/Upcomingclass";

const Curriculum = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <h1>Welcome, TUPM-2X-XXXX! </h1>
      <div className="container">
        <div className="cardC">
          <h2 className="curricSY">S.Y. 20XX - 20XX</h2>
          <div className="curricButn">
            <button className="firstBtn">
              <h2>First Year</h2>
            </button>
            <button className="secondBtn">
              <h2>Second Year</h2>
            </button>
            <button className="thirdBtn">
              <h2>Third Year</h2>
            </button>
            <button className="fourthBtn">
              <h2>Fourth Year</h2>
            </button>
          </div>
        </div>
        <div className="cardD">
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

export default Curriculum;
