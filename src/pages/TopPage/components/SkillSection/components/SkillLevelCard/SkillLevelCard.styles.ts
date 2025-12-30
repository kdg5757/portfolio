import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const cardStyle: Interpolation<DefaultTheme> = (theme) => ({
  padding: "1rem",
  width: "100%",
  background: theme.white,
  border: `1px solid ${theme.gray?.line}`,
  borderRadius: "1rem",
});

export const titleContainerStyle: Interpolation<DefaultTheme> = {
  marginBottom: "0.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
};

export const titleStyle: Interpolation<DefaultTheme> = {
  fontSize: "1.25rem",
  fontWeight: 600,
};

export const percentStyle: Interpolation<DefaultTheme> = (theme) => ({
  color: theme.primary,
  fontSize: "1rem",
  fontWeight: 600,
});

export const barTrackStyle: Interpolation<DefaultTheme> = (theme) => ({
  width: "100%",
  height: "8px",
  borderRadius: "999px",
  background: theme.gray?.line,
  overflow: "hidden",
});

export const barFillStyle =
  (percent: number): Interpolation<DefaultTheme> =>
  (theme) => ({
    width: `${percent}%`,
    height: "100%",
    borderRadius: "999px",
    background: theme.primary,
    transition: "width 0.3s ease",
  });
