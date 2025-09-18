import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const iconStyle: Interpolation<DefaultTheme> = (theme) => ({
  margin: "0 auto",
  display: "flex",
  width: "96px",
  height: "96px",
  alignItems: "center",
  justifyContent: "center",
  color: theme.white,
  background: theme.primary,
  borderRadius: "96px",
  fontSize: "24px",
  fontWeight: 600,
  boxShadow:
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
});
