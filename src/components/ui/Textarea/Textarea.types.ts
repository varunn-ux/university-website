/* ==========================
   Imports
========================== */

import type { ReactNode, TextareaHTMLAttributes } from "react";

/* ==========================
   Variants
========================== */

export type TextareaVariant = "default" | "filled" | "outline";

export type TextareaSize = "sm" | "md" | "lg";

export type TextareaResize = "none" | "vertical" | "horizontal" | "both";

/* ==========================
   Props
========================== */

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Label displayed above the textarea
   */
  label?: string;

  /**
   * Helper text displayed below the textarea
   */
  helperText?: string;

  /**
   * Error message displayed below the textarea
   */
  error?: string;

  /**
   * Textarea visual style
   */
  variant?: TextareaVariant;

  /**
   * Textarea size
   */
  size?: TextareaSize;

  /**
   * Resize behavior
   */
  resize?: TextareaResize;

  /**
   * Makes textarea take full width
   */
  fullWidth?: boolean;

  /**
   * Additional wrapper classes
   */
  wrapperClassName?: string;

  /**
   * Additional textarea container classes
   */
  containerClassName?: string;

  /**
   * Optional custom content
   * (future-proof for counters, badges, etc.)
   */
  children?: ReactNode;
}
