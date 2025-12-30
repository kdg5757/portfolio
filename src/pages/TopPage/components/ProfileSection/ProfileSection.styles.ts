import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const descriptionStyle: Interpolation<DefaultTheme> = {
  textAlign: "center",
};

export const buttonAreaStyle: Interpolation<DefaultTheme> = {
  display: "flex",
  gap: "16px",
  alignItems: "center",
  justifyContent: "center",
};

export const buttonStyle: Interpolation<DefaultTheme> = {
  padding: "0.5rem 1rem !important",
  fontSize: "1rem",
};
