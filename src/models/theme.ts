import { Theme as EmotionTheme } from "@emotion/react";

export type DefaultTheme = EmotionTheme & {
  primary?: "#22c55e";
  primaryScale?: {
    100?: "#dcfce7";
    200?: "#bbf7d0";
    300?: "#86efac";
    400?: "#4ade80";
    500?: "#22c55e";
    600?: "#16a34a";
    700?: "#15803d";
    800?: "#166534";
    900?: "#14532d";
  };
  secondary?: "#c52288"; // 補色寄り
  accent?: "#f59e0b";
  text?: "#333333";
  white?: "#ffffff";
  black?: "#111111";
  button?: {
    press: "#16a34a";
    disabled: "#9CA3AF";
  };
  status?: {
    info?: "#2563eb";
    success?: "#16a34a";
    warning?: "#f59e0b";
    error: "#ca3434";
  };
  gray?: {
    line: "#e0e0e0";
    bg: "#f8f8f8";
    100?: "#f8f8f8";
    200?: "#e5e7eb";
    300?: "#d1d5db";
    500?: "#6b7280";
    700?: "#374151";
    900?: "#111111";
  };
};
