export const AUTH_FLOW_ROUTES = {
  ACCOUNT_PHONE_NUMBER_PAGE: "auth/account-phone-number",
  ACCOUNT_PASSWORD_PAGE: "auth/account-password",
  ACCOUNT_OTP_PAGE: "auth/account-otp",
  ACCOUNT_LOGIN_SUCCESS_PAGE: "auth/account-login-success",
  ACCOUNT_LOGIN_FAILURE_PAGE: "auth/account-login-failure",
};

export const ROUTES = {
  TOP_PAGE: "top",
  ERROR_PAGE: "*",
  ...AUTH_FLOW_ROUTES,
} as const;
