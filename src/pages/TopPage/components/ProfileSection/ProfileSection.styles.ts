import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const titleStyle: Interpolation<DefaultTheme> = () => ({
  margin: 0,
  fontSize: "32px",
});

export const descriptionStyle: Interpolation<DefaultTheme> = () => ({
  margin: 0,
  fontSize: "16px",
  textAlign: "center",
});

export const buttonAreaStyle: Interpolation<DefaultTheme> = () => ({
  display: "flex",
  gap: "16px",
  alignItems: "center",
  justifyContent: "center",
});
