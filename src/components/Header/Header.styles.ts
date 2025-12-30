import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const wrapperStyle: Interpolation<DefaultTheme> = (theme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "40px",
  position: "sticky",
  top: 0,
  background: theme.white,
  zIndex: 10,
});

export const centerStyle: Interpolation<DefaultTheme> = {
  flex: "0 1 100%",
  fontWeight: "bold",
  textAlign: "center",
};

export const sideStyle: Interpolation<DefaultTheme> = {
  flex: "0 0 40px",
};
