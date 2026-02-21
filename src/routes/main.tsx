import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Home from "../pages/home";
import Experiences from "../pages/experiences";
import Contact from "../pages/contact";
import AboutMe from "../pages/aboutMe";
import Error500 from "../pages/error/Error500";
import NotFound from "../pages/error/NotFound";
import Loading from "../components/Loading";

export const mainRoute = [
  {
    element: (
      <>
        <Suspense fallback={<Loading />}></Suspense>
        <Outlet />
      </>
    ),
    errorElement: <Error500 />,
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
        path: "loading",
        element: <Loading />,
      },
      {
        path: "500",
        element: <Error500 />,
      },
      {
        path: "404",
        element: <NotFound />,
      },
    ],
  },
];
