/**
 * ==========================================================
 * Text Styles
 * ==========================================================
 *
 * Centralized style definitions for the Text component.
 * This file contains only visual style mappings.
 * ==========================================================
 */

/**
 * Base styles shared by every text element.
 */
export const baseStyles =
  "text-[var(--color-text-secondary)] leading-[var(--line-height-normal)]";

/**
 * Text sizes.
 *
 * Uses design tokens defined in theme.css.
 */
export const textSizes = {
  xs: "text-[length:var(--font-size-xs)]",

  sm: "text-[length:var(--font-size-sm)]",

  md: "text-[length:var(--font-size-base)]",

  lg: "text-[length:var(--font-size-lg)]",
} as const;

/**
 * Font weights.
 */
export const textWeights = {
  normal: "font-normal",

  medium: "font-medium",

  semibold: "font-semibold",

  bold: "font-bold",
} as const;

/**
 * Text colors.
 */
export const textColors = {
  default: "text-[var(--color-text-secondary)]",

  muted: "text-[var(--color-text-muted)]",

  primary: "text-[var(--color-primary)]",

  secondary: "text-[var(--color-secondary)]",
} as const;

/**
 * Text alignment.
 */
export const textAlignments = {
  left: "text-left",

  center: "text-center",

  right: "text-right",
} as const;