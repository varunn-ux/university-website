export interface ThemeColors {
  primary: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;

  background: string;
  surface: string;

  foreground: string;
  muted: string;

  border: string;

  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface ThemeTypography {
  fontFamily: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface ThemeRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface ThemeShadow {
  sm: string;
  md: string;
  lg: string;
}

export interface ThemeBreakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  radius: ThemeRadius;
  shadow: ThemeShadow;
  breakpoints: ThemeBreakpoints;
}