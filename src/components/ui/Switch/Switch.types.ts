/* ==========================
   Imports
========================== */

import type { InputHTMLAttributes, ReactNode } from "react";

/* ==========================
   Sizes
========================== */

export type SwitchSize = "sm" | "md" | "lg";

/* ==========================
   Props
========================== */

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /**
   * Label displayed beside the switch.
   */
  label?: ReactNode;

  /**
   * Helper text displayed below the switch.
   */
  helperText?: string;

  /**
   * Error message displayed below the switch.
   */
  error?: string;

  /**
   * Switch size.
   */
  size?: SwitchSize;

  /**
   * Makes the component take full width.
   */
  fullWidth?: boolean;

  /**
   * Additional wrapper classes.
   */
  wrapperClassName?: string;

  /**
   * Additional container classes.
   */
  containerClassName?: string;
}
