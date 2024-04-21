import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Subjects from "./components/Pages/Subjects/Subjects";
import Semester from "./components/Pages/Semester/Semester";
import Curriculum from "./components/Pages/Curriculum/Curriculum";
import MyProfile from "./components/Pages/MyProfile/MyProfile";
import Login from "./components/AccManage/Login";
import Register from "./components/AccManage/Register";
import Forgot from "./components/AccManage/Forgot";
import Subjectstab from "./components/Pages/Subjects/Subjectstab";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },

  {
    path: "/Subjects",
    element: <Subjectstab />,
  },

  {
    path: "/Semester",
    element: <Semester />,
  },

  {
    path: "/Curriculum",
    element: <Curriculum />,
  },

  {
    path: "/MyProfile",
    element: <MyProfile />,
  },

  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/Register",
    element: <Register />,
  },

  {
    path: "/Forgot",
    element: <Forgot />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
