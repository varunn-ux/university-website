/* ==========================
   Imports
========================== */

import type { InputHTMLAttributes, ReactNode } from "react";

/* ==========================
   Sizes
========================== */

export type RadioSize = "sm" | "md" | "lg";

/* ==========================
   Props
========================== */

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /**
   * Label displayed beside the radio button
   */
  label?: ReactNode;

  /**
   * Helper text displayed below the radio button
   */
  helperText?: string;

  /**
   * Error message displayed below the radio button
   */
  error?: string;

  /**
   * Radio button size
   */
  size?: RadioSize;

  /**
   * Makes the component take full width
   */
  fullWidth?: boolean;

  /**
   * Additional wrapper classes
   */
  wrapperClassName?: string;

  /**
   * Additional container classes
   */
  containerClassName?: string;
}
