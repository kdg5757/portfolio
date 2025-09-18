import { Theme as EmotionTheme } from "@emotion/react";

export type DefaultTheme = EmotionTheme & {
  primary?: "#22c55e";
  text?: "#333333";
  white?: "#ffffff";
  black?: "#111111";
  button?: {
    press: "#16a34a";
    disabled: "#9CA3AF";
  };
  status?: {
    error: "#ca3434";
  };
  gray?: {
    line: "#e0e0e0";
    bg: "#f8f8f8";
  };
};
