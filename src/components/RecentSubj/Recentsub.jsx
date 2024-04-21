import React from "react";
import "./Recentsub.css";

const Recentsub = () => {
  // Function to extract initials from a string
  const getInitials = (name) => {
    return name
      .split(" ") // Split the name into words
      .map((word) => word.charAt(0)) // Get the first character of each word
      .join(""); // Join the initials into a single string
  };

  return (
    <div>
      <div className="card2upper">
        <h2>Recent Subjects</h2>
        <i className="bx bx-dots-horizontal-rounded"></i>
      </div>
      <div className="recentsubContainer">
        <div className="recentsubIcon">
          {/* Replace each SubIcon with initials */}
          <div className="subicon1">
            <div className="subIcons">{getInitials("Subject Name")}</div>
          </div>
          <div className="subicon2">
            <div className="subIcons">{getInitials("Subject Name")}</div>
          </div>
          <div className="subicon3">
            <div className="subIcons">{getInitials("Subject Name")}</div>
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
                  <i className="bx bxs-check-circle">Finished</i>
                </h3>
              </div>
            </div>
          </div>
          <div className="subcontainer2">
            <div className="recsubname2">
              <h1>Subject Name</h1>
            </div>
            <div className="subdetails1">
              <div className="subunits1">
                <h3>3 units</h3>
              </div>
              <div className="substatus1">
                <h3>
                  {" "}
                  <i className="bx bxs-check-circle">Finished</i>
                </h3>
              </div>
            </div>
          </div>
          <div className="subcontainer3">
            <div className="recsubname3">
              <h1>Subject Name</h1>
            </div>
            <div className="subdetails1">
              <div className="subunits1">
                <h3>3 units</h3>
              </div>
              <div className="substatus1">
                <h3>
                  {" "}
                  <i className="bx bxs-check-circle">Finished</i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recentsub;
