import type { Theme } from "@/types/theme";
export const THEME: Theme = {
  colors: {
    primary: "#8B3A8F",
    primaryHover: "#742F77",

    secondary: "#F68B1F",
    secondaryHover: "#DF7512",

    background: "#FFFFFF",
    surface: "#F8FAFC",

    foreground: "#1F2937",
    muted: "#6B7280",

    border: "#E5E7EB",

    success: "#16A34A",
    warning: "#D97706",
    error: "#DC2626",
    info: "#2563EB",
  },

  typography: {
    fontFamily: "Roboto Flex",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "64px",
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },

  shadow: {
    sm: "0 2px 6px rgb(0 0 0 / 0.08)",
    md: "0 8px 24px rgb(0 0 0 / 0.1)",
    lg: "0 16px 40px rgb(0 0 0 / 0.12)",
  },

  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  },
};