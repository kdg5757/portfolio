import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes";

const TopPage = lazy(() => import("~/pages/TopPage"));
const ErrorPage = lazy(() => import("~/pages/ErrorPage"));
const AccountPhoneNumberPage = lazy(
  () => import("~/pages/authFlow/AccountPhoneNumberPage"),
);
const AccountPhoneNumberOtpPage = lazy(
  () => import("~/pages/authFlow/AccountPhoneNumberOtpPage"),
);
const AccountPasswordPage = lazy(
  () => import("~/pages/authFlow/AccountPasswordPage"),
);

const routes = (
  <Routes>
    <Route path={ROUTES.TOP_PAGE} element={<TopPage />} />
    <Route>
      <Route
        path={ROUTES.ACCOUNT_PHONE_NUMBER_PAGE}
        element={<AccountPhoneNumberPage />}
      />
      <Route
        path={ROUTES.ACCOUNT_PASSWORD_PAGE}
        element={<AccountPasswordPage />}
      />
      <Route
        path={ROUTES.ACCOUNT_OTP_PAGE}
        element={<AccountPhoneNumberOtpPage />}
      />
    </Route>
    <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />
  </Routes>
);

export const PageRouter: React.FC = () => (
  <BrowserRouter>{routes}</BrowserRouter>
);
