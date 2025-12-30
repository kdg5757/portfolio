import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const columnStyle: Interpolation<DefaultTheme> = (theme) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  background: theme.white,
  border: `1px solid ${theme.gray?.line}`,
  borderRadius: "0.5rem",
});
