import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const headerStyle: Interpolation<DefaultTheme> = {
  marginBottom: "auto",
};

export const contentStyle: Interpolation<DefaultTheme> = {
  width: "100%",
  justifyContent: "flex-start",
};

export const footerStyle: Interpolation<DefaultTheme> = (theme) => ({
  background: theme.gray?.bg,
});
