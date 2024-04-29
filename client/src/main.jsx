import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Semester from "./pages/Semester/Semester";
import Curriculum from "./pages/Curriculum/Curriculum";
import Profilepage from "./pages/MyProfile/Profilepage";
import Login from "./pages/AccManage/Login";
import Register from "./pages/AccManage/Register";
import Forgot from "./pages/AccManage/Forgot";
import Subjectstab from "./pages/Subjects/Subjectstab";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/Dashboard",
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
    path: "/Profilepage",
    element: <Profilepage />,
  },
  {
    path: "/",
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

// Render the Main component within React.StrictMode using createRoot
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
