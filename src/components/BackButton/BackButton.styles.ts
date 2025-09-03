import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const buttonStyle: Interpolation<DefaultTheme> = () => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  background: "none",
  border: "none",
  cursor: "pointer",
});
