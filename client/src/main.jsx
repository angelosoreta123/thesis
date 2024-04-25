import React from "react";
import ReactDOM from "react-dom/client";
import "./../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Semester from "./pages/Semester/Semester";
import Curriculum from "./pages/Curriculum/Curriculum";
import MyProfile from "./pages/MyProfile/MyProfile";
import Login from "./pages/AccManage/Login";
import Register from "./pages/AccManage/Register";
import Forgot from "./pages/AccManage/Forgot";
import Subjectstab from "./pages/Subjects/Subjectstab";

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
