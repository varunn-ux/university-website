/* ==========================
   Imports
========================== */

import type { ReactNode, SelectHTMLAttributes } from "react";

/* ==========================
   Variants
========================== */

export type SelectVariant = "default" | "filled" | "outline";

export type SelectSize = "sm" | "md" | "lg";

/* ==========================
   Props
========================== */

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  /**
   * Label displayed above the select
   */
  label?: string;

  /**
   * Helper text displayed below the select
   */
  helperText?: string;

  /**
   * Error message displayed below the select
   */
  error?: string;

  /**
   * Placeholder option
   */
  placeholder?: string;

  /**
   * Select visual style
   */
  variant?: SelectVariant;

  /**
   * Select size
   */
  size?: SelectSize;

  /**
   * Makes select take full width
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

  /**
   * Select options
   */
  children?: ReactNode;
}
