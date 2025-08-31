import { Theme as EmotionTheme } from "@emotion/react";

export type DefaultTheme = EmotionTheme & {
  primary?: "#3eb370";
  text?: "#333333";
  status?: {
    error: "#ca3434";
  };
};
