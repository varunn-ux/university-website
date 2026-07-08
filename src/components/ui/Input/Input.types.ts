/* ==========================
   Imports
========================== */

import { InputHTMLAttributes, ReactNode } from "react";

/* ==========================
   Variants
========================== */

export type InputVariant = "default" | "filled" | "outline";

export type InputSize = "sm" | "md" | "lg";

/* ==========================
   Props
========================== */

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * Label displayed above the input
   */
  label?: string;

  /**
   * Helper text displayed below the input
   */
  helperText?: string;

  /**
   * Error message displayed below the input
   */
  error?: string;

  /**
   * Input visual style
   */
  variant?: InputVariant;

  /**
   * Input size
   */
  size?: InputSize;

  /**
   * Makes input take full width
   */
  fullWidth?: boolean;

  /**
   * Left icon
   */
  leftIcon?: ReactNode;

  /**
   * Right icon
   */
  rightIcon?: ReactNode;

  /**
   * Additional wrapper classes
   */
  wrapperClassName?: string;

  containerClassName?: string;
}
