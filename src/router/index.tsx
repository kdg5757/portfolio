import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Home = lazy(() => import("~/pages/Home"));
const Error = lazy(() => import("~/pages/Error"));

export const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "*",
    element: <Error />,
    index: true,
  },
];
