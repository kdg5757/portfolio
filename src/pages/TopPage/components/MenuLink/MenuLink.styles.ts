import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const buttonStyle: Interpolation<DefaultTheme> = () => ({
  padding: "0 16px",
  display: "flex",
  width: "100%",
  minHeight: "40px",
  alignItems: "center",
  justifyContent: "flex-start",
  background: "none",
  border: "none",
});
