import React from "react";
import { createRoot } from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ContextProvider } from "../context/ContextProvider";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Semester from "./pages/Semester/Semester";
import Curriculum from "./pages/Curriculum/Curriculum";
import Profilepage from "./pages/MyProfile/Profilepage";
import Login from "./pages/AccManage/Login";
import Register from "./pages/AccManage/Register";
import Forgot from "./pages/AccManage/Forgot";
import Subjectstab from "./pages/Subjects/Subjectstab";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/Dashboard" />,
      },
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
    ],
  },

  {
    path: "/",
    element: <GuestLayout />,
    children: [
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
    ],
  },
]);

// Render the Main component within React.StrictMode using createRoot
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
