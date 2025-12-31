import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const sectionStyle: Interpolation<DefaultTheme> = (theme) => ({
  padding: "32px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  background: theme.gray?.bg,
});

export const descriptionStyle: Interpolation<DefaultTheme> = {
  textAlign: "center",
};

export const buttonContainerStyle: Interpolation<DefaultTheme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.5rem",
};

export const buttonStyle: Interpolation<DefaultTheme> = {
  padding: "0.75rem 2rem !important",
  fontSize: "1rem",
};
