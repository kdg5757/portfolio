import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Home = lazy(() => import("~/pages/Home"));
const ErrorPage = lazy(() => import("~/pages/ErrorPage"));

export const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "*",
    element: <ErrorPage />,
    index: true,
  },
];
