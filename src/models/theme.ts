import { Theme as EmotionTheme } from "@emotion/react";

export type DefaultTheme = EmotionTheme & {
  primary?: "#3eb370";
  text?: "#333333";
  white?: "#ffffff";
  black?: "#000000";
  status?: {
    error: "#ca3434";
  };
  gray?: {
    line: "#e0e0e0";
    bg: "#f8f8f8";
  };
};
