import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const sectionStyle: Interpolation<DefaultTheme> = {
  padding: "2rem 1rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
};
