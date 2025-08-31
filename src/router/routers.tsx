import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes";

const Home = lazy(() => import("~/pages/Home"));
const ErrorPage = lazy(() => import("~/pages/ErrorPage"));

const routes = (
  <Routes>
    <Route path={ROUTES.TOP_PAGE} element={<Home />} />
    <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />
  </Routes>
);

export const PageRouter: React.FC = () => (
  <BrowserRouter>{routes}</BrowserRouter>
);
