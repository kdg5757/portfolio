import { Interpolation } from "@emotion/react";
import { DefaultTheme } from "~/models";

export const areaStyle: Interpolation<DefaultTheme> = () => ({
  display: "flex",
});

export const inputStyle: Interpolation<DefaultTheme> = (theme) => ({
  color: theme?.text,
  borderRadius: "5px 0 0 5px",
});

export const buttonStyle: Interpolation<DefaultTheme> = () => ({
  borderRadius: "0 5px 5px 0",
});

export const cautionStyle: Interpolation<DefaultTheme> = (theme) => ({
  color: theme?.status?.error,
  fontSize: "12px",
});
