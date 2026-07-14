/* ==========================
   Imports
========================== */

import type { InputHTMLAttributes, ReactNode } from "react";

/* ==========================
   Sizes
========================== */

export type CheckboxSize = "sm" | "md" | "lg";

/* ==========================
   Props
========================== */

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> {
  /**
   * Label displayed beside the checkbox
   */
  label?: ReactNode;

  /**
   * Helper text displayed below the checkbox
   */
  helperText?: string;

  /**
   * Error message displayed below the checkbox
   */
  error?: string;

  /**
   * Checkbox size
   */
  size?: CheckboxSize;

  /**
   * Makes the component take full width
   */
  fullWidth?: boolean;

  /**
   * Shows the checkbox in an indeterminate state
   */
  indeterminate?: boolean;

  /**
   * Additional wrapper classes
   */
  wrapperClassName?: string;

  /**
   * Additional container classes
   */
  containerClassName?: string;
}
