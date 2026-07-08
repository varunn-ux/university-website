  /**
   * ==========================================================
   * Heading Styles
   * ==========================================================
   *
   * Centralized style definitions for the Heading component.
   * All typography styles are mapped here to keep rendering
   * logic separate from styling.
   * ==========================================================
   */

  /**
   * Base styles shared by every heading.
   */
  export const baseStyles =
    "tracking-tight text-[var(--color-text-primary)]";

  /**
   * Heading sizes.
   *
   * Uses design tokens defined in theme.css.
   */
  export const headingLevels = {
    1: "text-[length:var(--font-size-h1)] leading-[var(--line-height-tight)]",

    2: "text-[length:var(--font-size-h2)] leading-[var(--line-height-tight)]",

    3: "text-[length:var(--font-size-h3)] leading-[var(--line-height-snug)]",

    4: "text-[length:var(--font-size-h4)] leading-[var(--line-height-snug)]",

    5: "text-[length:var(--font-size-h5)] leading-[var(--line-height-normal)]",

    6: "text-[length:var(--font-size-h6)] leading-[var(--line-height-normal)]",
  } as const;

  /**
   * Font weights.
   */
  export const headingWeights = {
    medium: "font-medium",

    semibold: "font-semibold",

    bold: "font-bold",
  } as const;

  /**
   * Text colors.
   */
  export const headingColors = {
    default: "text-[var(--color-text-primary)]",

    primary: "text-[var(--color-primary)]",

    secondary: "text-[var(--color-secondary)]",
  } as const;

  /**
   * Text alignment.
   */
  export const headingAlignments = {
    left: "text-left",

    center: "text-center",

    right: "text-right",
  } as const;