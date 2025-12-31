import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const sectionStyle: Interpolation<DefaultTheme> = (theme) => ({
  padding: "32px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  background: theme.gray?.bg,
});

export const titleStyle: Interpolation<DefaultTheme> = {
  marginBottom: "2rem",
};

export const columnStyle: Interpolation<DefaultTheme> = {
  padding: "1.5rem",
};

export const columnTitleStyle: Interpolation<DefaultTheme> = {
  marginBottom: "1rem",
  fontSize: "1.5rem",
};

export const listStyle: Interpolation<DefaultTheme> = {
  padding: "0 0 0 1.5rem",
  li: {
    marginBottom: "1rem",
    fontSize: "1rem",
    "&:last-of-type": {
      marginBottom: 0,
    },
  },
};
