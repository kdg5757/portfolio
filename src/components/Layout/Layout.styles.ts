import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const wrapperStyle: Interpolation<DefaultTheme> = (theme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100svh",
  background: theme.white,
});
