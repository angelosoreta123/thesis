import React from "react";
import "./Upcomingclass.css";
import SubIcon from "../../assets/subjIcon.jpg";

const Upcomingclass = () => {
  return (
    <div>
      <div className="card4upper">
        <h2>Upcoming Class</h2>
        <i className="bx bx-dots-horizontal-rounded"></i>
      </div>
      <div className="nextsubContainer">
        <div className="nextsubIcon">
          <div className="subicon1">
            <img id="subIcons" src={SubIcon} alt="" />
          </div>
          <div className="subicon2">
            <img id="subIcons" src={SubIcon} alt="" />
          </div>
        </div>
        <div className="nextsubName">
          <div className="subcontainer1">
            <div className="nextsubname1">
              <h1>Subject Name</h1>
            </div>
            <div className="subdetails1">
              <div className="subunits1">
                <h3>3 units</h3>
              </div>
              <div className="substatus1">
                <h3>
                  {" "}
                  <i className="bx bxs-circle">Online</i>
                </h3>
              </div>
            </div>
          </div>
          <div className="subcontainer2">
            <div className="nextsubname1">
              <h1>Subject Name</h1>
            </div>
            <div className="subdetails1">
              <div className="subunits1">
                <h3>3 units</h3>
              </div>
              <div className="substatus1">
                <h3>
                  {" "}
                  <i className="bx bxs-circle">Online</i>
                </h3>
              </div>
            </div>
          </div>
          <div className="nextsubcontainer3">
            <h3>
              {" "}
              Show All <i className="bx bxs-down-arrow"></i>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcomingclass;
