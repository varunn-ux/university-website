/* ==========================
   Imports
========================== */

import { forwardRef, useId } from "react";

import { cn } from "@/lib/utils";

import {
  baseStyles,
  errorTextStyles,
  helperTextStyles,
  labelStyles,
  textareaContainerStyles,
  textareaResize,
  textareaSizes,
  textareaVariants,
  wrapperStyles,
} from "./textarea.styles";

import type { TextareaProps } from "./Textarea.types";

/* ==========================
   Component
========================== */

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      variant = "default",
      size = "md",
      resize = "vertical",
      fullWidth = true,
      wrapperClassName,
      containerClassName,
      className,
      id,
      required,
      rows = 5,
      ...props
    },
    ref
  ) => {
    /* ==========================
       Accessibility IDs
    ========================== */

    // Generate a unique ID if none is provided.
    const generatedId = useId();

    // Use custom ID or generated ID.
    const textareaId = id ?? generatedId;

    // Helper text ID.
    const helperTextId = helperText ? `${textareaId}-helper` : undefined;

    // Error message ID.
    const errorId = error ? `${textareaId}-error` : undefined;

    // Connect helper/error text with textarea.
    const describedBy = [helperTextId, errorId].filter(Boolean).join(" ");

    /* ==========================
       Render
    ========================== */

    return (
      <div className={cn(wrapperStyles, fullWidth && "w-full", wrapperClassName)}>
        {/* ---------- Label ---------- */}

        {label && (
          <label htmlFor={textareaId} className={labelStyles}>
            {label}

            {required && <span className="ml-1 text-[var(--color-error)]">*</span>}
          </label>
        )}

        {/* ---------- Textarea Container ---------- */}

        <div className={cn(textareaContainerStyles, containerClassName)}>
          <textarea
            ref={ref}
            id={textareaId}
            rows={rows}
            aria-invalid={Boolean(error)}
            aria-required={required}
            aria-describedby={describedBy || undefined}
            className={cn(
              baseStyles,
              textareaVariants[variant],
              textareaSizes[size],
              textareaResize[resize],

              error &&
                "border-[var(--color-error)] focus-visible:border-[var(--color-error)] focus-visible:ring-[var(--color-error)]",

              className
            )}
            {...props}
          />
        </div>

        {/* ---------- Helper Text ---------- */}

        {helperText && !error && (
          <p id={helperTextId} className={helperTextStyles}>
            {helperText}
          </p>
        )}

        {/* ---------- Error Message ---------- */}

        {error && (
          <p id={errorId} className={errorTextStyles}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

/* ==========================
   Display Name
========================== */

Textarea.displayName = "Textarea";
