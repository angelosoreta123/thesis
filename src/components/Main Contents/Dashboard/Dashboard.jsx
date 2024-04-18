import React from "react";
import "././Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Header from "../../Header/Header";
import SemPic from "../../../assets/SemPic.jpg";
import SubIcon from "../../../assets/subjIcon.jpg";

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
          <div className="card2upper">
            <h2>Recent Subjects</h2>
            <i class="bx bx-dots-horizontal-rounded"></i>
          </div>
          <div className="recentsubContainer">
            <div className="recentsubIcon">
              <div className="subicon1">
                <img id="subIcons" src={SubIcon} alt="" />
              </div>
              <div className="subicon2">
                <img id="subIcons" src={SubIcon} alt="" />
              </div>
              <div className="subicon3">
                <img id="subIcons" src={SubIcon} alt="" />
              </div>
            </div>
            <div className="recentsubName">
              <div className="subcontainer1">
                <div className="recsubname1">
                  <h1>Subject Name</h1>
                </div>
                <div className="subdetails1">
                  <div className="subunits1">
                    <h3>3 units</h3>
                  </div>
                  <div className="substatus1">
                    <h3>
                      {" "}
                      <i class="bx bxs-check-circle">Finished</i>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="subcontainer2">
                <div className="recsubname1">
                  <h1>Subject Name</h1>
                </div>
                <div className="subdetails1">
                  <div className="subunits1">
                    <h3>3 units</h3>
                  </div>
                  <div className="substatus1">
                    <h3>
                      {" "}
                      <i class="bx bxs-check-circle">Finished</i>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="subcontainer3">
                <div className="recsubname1">
                  <h1>Subject Name</h1>
                </div>
                <div className="subdetails1">
                  <div className="subunits1">
                    <h3>3 units</h3>
                  </div>
                  <div className="substatus1">
                    <h3>
                      {" "}
                      <i class="bx bxs-check-circle">Finished</i>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card card3">
          <div className="card3upper">
            <h2>My Deficient Subjects</h2>
            <h3>See All</h3>
          </div>
          <div className="card3lower">
            <div className="sub1"></div>
            <div className="sub2"></div>
            <div className="sub3"></div>
            <div className="sub4"></div>
            <div className="sub5"></div>
          </div>
          <div className="subjname">
            <div className="subname1">
              <h4>Subject Name</h4>
            </div>
            <div className="subname2">
              <h4>Subject Name</h4>
            </div>
            <div className="subname3">
              <h4>Subject Name</h4>
            </div>
            <div className="subname4">
              <h4>Subject Name</h4>
            </div>
            <div className="subname5">
              <h4>Subject Name</h4>
            </div>
          </div>
        </div>
        <div className="card card4">
          <div className="card4upper">
            <h2>Upcoming Class</h2>
            <i class="bx bx-dots-horizontal-rounded"></i>
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
                      <i class="bx bxs-circle">Online</i>
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
                      <i class="bx bxs-circle">Online</i>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="nextsubcontainer3">
                <h3>
                  {" "}
                  Show All <i class="bx bxs-down-arrow"></i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
