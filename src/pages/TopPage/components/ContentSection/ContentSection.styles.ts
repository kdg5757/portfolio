import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const sectionStyle: Interpolation<DefaultTheme> = () => ({
  padding: "32px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
});
