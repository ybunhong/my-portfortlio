import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Home from "../pages/home";
import Experiences from "../pages/experiences";
import Contact from "../pages/contact";
import AboutMe from "../pages/aboutMe";

export const mainRoute = [
  {
    element: (
      <>
        <Suspense fallback={<div>Loading</div>}></Suspense>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "experiences",
        element: <Experiences />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "aboutme",
        element: <AboutMe />,
      },
      {
        path: "500",
        element: <div>500 Error Page</div>,
      },
      {
        path: "404",
        element: <div>404 Not Found Page</div>,
      },
    ],
  },
];
