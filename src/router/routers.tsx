import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes";

const PhoneNumberPage = lazy(() => import("~/pages/PhoneNumberPage"));
const ErrorPage = lazy(() => import("~/pages/ErrorPage"));

const routes = (
  <Routes>
    <Route>
      <Route
        path={ROUTES.PHONE_NUMBER_INPUT_PAGE}
        element={<PhoneNumberPage />}
      />
    </Route>
    <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />
  </Routes>
);

export const PageRouter: React.FC = () => (
  <BrowserRouter>{routes}</BrowserRouter>
);
