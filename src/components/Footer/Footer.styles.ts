import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const wrapperStyle: Interpolation<DefaultTheme> = (theme) => ({
  padding: "16px 16px 32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  background: theme.white,
  borderTop: `1px solid ${theme.gray?.line}`,
});
