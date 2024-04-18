import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Main Contents/Dashboard/Dashboard";
import Subjects from "./components/Main Contents/Subjects/Subjects";
import Semester from "./components/Main Contents/Semester/Semester";
import Curriculum from "./components/Main Contents/Curriculum/Curriculum";
import MyProfile from "./components/Main Contents/MyProfile/MyProfile";
import Logout from "./components/Main Contents/Logout/Logout";
import Login from "./components/AccManage/Login";
import Register from "./components/AccManage/Register";
import Forgot from "./components/AccManage/Forgot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },

  {
    path: "/Subjects",
    element: <Subjects />,
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
    path: "/Logout",
    element: <Logout />,
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
