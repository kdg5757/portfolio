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

export const gridStyle: Interpolation<DefaultTheme> = {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "minmax(240px, 1fr)",
  gap: "1rem",
  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(2, minmax(240px, 1fr))",
  },
};
