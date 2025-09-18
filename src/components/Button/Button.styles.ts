import { Interpolation } from "@emotion/react";

import { DefaultTheme } from "~/models";

export const buttonStyle: Interpolation<DefaultTheme> = (theme) => ({
  fontWeight: 600,
  cursor: "pointer",
  "&.ant-btn-color-primary": {
    background: theme.primary,
    "&:hover, &:active": {
      background: `${theme.button?.press} !important`,
    },
    "&:disabled": {
      color: `${theme.white} !important`,
      background: `${theme.button?.disabled} !important`,
      border: "none",
    },
  },
  "&.ant-btn-dashed": {
    color: theme.primary,
    background: theme.white,
    border: `1px solid ${theme.primary}`,
    "&:hover, &:active": {
      color: `${theme.button?.press} !important`,
      background: theme.white,
      border: `1px solid ${theme.button?.press} !important`,
    },
    "&:disabled": {
      color: `${theme.button?.disabled} !important`,
      background: `${theme.white} !important`,
      border: `1px solid ${theme.button?.disabled} !important`,
    },
  },
  "&.ant-btn-text": {
    color: theme.primary,
    background: theme.white,
    "&:hover, &:active": {
      color: `${theme.button?.press} !important`,
      background: `${theme.white} !important`,
    },
    "&:disabled": {
      color: `${theme.button?.disabled} !important`,
    },
  },
});
