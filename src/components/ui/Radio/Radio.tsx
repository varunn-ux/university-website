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
  radioContainerStyles,
  radioSizes,
  wrapperStyles,
} from "./radio.styles";

import type { RadioProps } from "./Radio.types";

/* ==========================
   Component
========================== */

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      helperText,
      error,
      size = "md",
      fullWidth = true,
      wrapperClassName,
      containerClassName,
      className,
      id,
      required,
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
    const radioId = id ?? generatedId;

    // Helper text ID.
    const helperTextId = helperText ? `${radioId}-helper` : undefined;

    // Error message ID.
    const errorId = error ? `${radioId}-error` : undefined;

    // Connect helper/error text with radio.
    const describedBy = [helperTextId, errorId].filter(Boolean).join(" ");

    /* ==========================
       Render
    ========================== */

    return (
      <div className={cn(wrapperStyles, fullWidth && "w-full", wrapperClassName)}>
        <div className={cn(radioContainerStyles, containerClassName)}>
          {/* ---------- Radio ---------- */}

          <input
            ref={ref}
            id={radioId}
            type="radio"
            aria-invalid={Boolean(error)}
            aria-required={required}
            aria-describedby={describedBy || undefined}
            className={cn(
              baseStyles,
              radioSizes[size],

              error && "border-[var(--color-error)] focus-visible:ring-[var(--color-error)]",

              className
            )}
            {...props}
          />

          {/* ---------- Label ---------- */}

          {label && (
            <label htmlFor={radioId} className={labelStyles}>
              {label}

              {required && <span className="ml-1 text-[var(--color-error)]">*</span>}
            </label>
          )}
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

Radio.displayName = "Radio";
