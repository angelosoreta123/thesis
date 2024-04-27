import React from "react";
import "./Dashboard.css";
import Header from "./../../components/Header/Header";
import Navbar from "./../../components/Navbar/Navbar";
import Recentsub from "../../components/RecentSubj/Recentsub";
import Upcomingclass from "../../components/UpcomingClass/Upcomingclass";
import Learningprog from "../../components/LearningProgress/Learningprog";
import Deficientsub from "../../components/DeficientSubj/Deficientsub";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  if (!str) {
    return ""; // Return an empty string if input is falsy
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Dashboard() {
  const { user } = useContext(UserContext);

  const getFirstString = (fullName) => {
    if (!fullName) return "";
    const parts = fullName.split(" ");
    return parts[0];
  };

  // Get the first name and capitalize the first letter
  const firstName = capitalizeFirstLetter(
    getFirstString(user ? user.name : "")
  );

  return (
    <div>
      <Header />
      <Navbar />
      {!!user && <h1>Welcome, {firstName}! </h1>}
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
