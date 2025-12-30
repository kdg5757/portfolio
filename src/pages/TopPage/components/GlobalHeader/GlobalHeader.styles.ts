import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const wrapperStyle: Interpolation<DefaultTheme> = (theme) => ({
  padding: "0 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "40px",
  position: "sticky",
  top: 0,
  background: theme.white,
  borderBottom: `1px solid ${theme.gray?.line}`,
  zIndex: 10,
});

export const buttonStyle: Interpolation<DefaultTheme> = () => ({
  padding: 0,
  display: "flex",
  flex: "0 0 40px",
  height: "40px",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
});

export const menuAreaStyle =
  (isOpen: boolean): Interpolation<DefaultTheme> =>
  () => ({
    display: isOpen ? "flex" : "none",
  });

export const menuAreaPositionStyle =
  (isMobile: boolean): Interpolation<DefaultTheme> =>
  (theme) => {
    if (!isMobile) {
      return {
        alignItems: "center",
        gap: "8px",
      };
    }

    return {
      flexDirection: "column",
      width: "100%",
      position: "absolute",
      top: "40px",
      right: 0,
      background: theme.white,
      boxShadow: `0 4px 6px ${theme.gray?.bg}`,
    };
  };
