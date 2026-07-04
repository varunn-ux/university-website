/**
 * ==========================================================
 * Button Styles
 * ==========================================================
 *
 * Centralized style definitions for the Button component.
 * Keeping styles separate makes the component easier to
 * maintain and scale.
 * ==========================================================
 */

export const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] disabled:pointer-events-none disabled:opacity-50";

export const buttonVariants = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",

  secondary:
    "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-hover)]",

  outline:
    "border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",

  ghost:
    "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-surface)]",
} as const;

export const buttonSizes = {
  sm: "h-9 px-3 text-sm",

  md: "h-11 px-5 text-base",

  lg: "h-12 px-6 text-lg",
} as const;