import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const cardStyle: Interpolation<DefaultTheme> = {
  borderRadius: "1rem",
  overflow: "hidden",
};

export const imageStyle: Interpolation<DefaultTheme> = {
  display: "block",
  width: "100%",
  height: "12rem",
  objectFit: "cover",
};

export const contentStyle: Interpolation<DefaultTheme> = {
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

export const titleStyle: Interpolation<DefaultTheme> = {
  fontSize: "1.5rem",
};

export const fieldStyle: Interpolation<DefaultTheme> = (theme) => ({
  color: theme.primary,
});

export const descriptionStyle: Interpolation<DefaultTheme> = {
  fontSize: "1rem",
};

export const smallTitleStyle: Interpolation<DefaultTheme> = {
  fontSize: "1rem",
};

export const listStyle: Interpolation<DefaultTheme> = {
  padding: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  listStyle: "none",
};

export const technologyStyle: Interpolation<DefaultTheme> = (theme) => ({
  padding: "0.25rem 0.75rem 0.35rem",
  background: theme.gray?.bg,
  border: `1px solid ${theme.gray?.line}`,
  borderRadius: "3rem",
});

export const featureStyle: Interpolation<DefaultTheme> = (theme) => ({
  padding: "0.25rem 0.75rem 0.35rem",
  color: theme.primaryScale?.[900],
  background: theme.primaryScale?.[100],
  border: `1px solid ${theme.primaryScale?.[300]}`,
  borderRadius: "4px",
});
