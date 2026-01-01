import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router"; // or "react-router-dom"
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Introduction from "./pages/Introduction";
import Education from "./pages/Education";
import Vision from "./pages/Vision";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import ProjectLayout from "./layout/ProjectLayout";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // The wrapper
      children: [
        {
          index: true, // This is the default child for "/"
          element: <Home />,
        },
        {
          path: "about-me",
          element: <Introduction />,
        },
        {
          path: "vision",
          element: <Vision />,
        },
        {
          path: "education",
          element: <Education />,
        },
        {
          path: "skill",
          element: <Skill />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "project",
          element: <ProjectLayout />,
          children: [
            {
              index: true,
              element: <Project />,
            },
            {
              path: ":id",
              element: <ProjectDetail />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
