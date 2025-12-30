import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const sectionStyle: Interpolation<DefaultTheme> = {
  padding: "32px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "2rem",
  width: "100%",
};

export const descriptionStyle: Interpolation<DefaultTheme> = {
  textAlign: "center",
};

export const buttonStyle: Interpolation<DefaultTheme> = {
  padding: "0.75rem 2rem !important",
  fontSize: "1rem",
};
