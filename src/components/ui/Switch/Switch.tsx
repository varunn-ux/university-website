/* ==========================
   Imports
========================== */

import { forwardRef, useId } from "react";

import { cn } from "@/lib/utils";

import {
  errorTextStyles,
  helperTextStyles,
  inputStyles,
  labelStyles,
  switchContainerStyles,
  switchSizes,
  thumbBaseStyles,
  trackBaseStyles,
  wrapperStyles,
} from "./switch.styles";

import type { SwitchProps } from "./Switch.types";

/* ==========================
   Component
========================== */

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
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
    const switchId = id ?? generatedId;

    // Helper text ID.
    const helperTextId = helperText ? `${switchId}-helper` : undefined;

    // Error message ID.
    const errorId = error ? `${switchId}-error` : undefined;

    // Connect helper/error text with switch.
    const describedBy = [helperTextId, errorId].filter(Boolean).join(" ");

    /* ==========================
       Render
    ========================== */

    return (
      <div className={cn(wrapperStyles, fullWidth && "w-full", wrapperClassName)}>
        <label
          htmlFor={switchId}
          className={cn(switchContainerStyles, "cursor-pointer", containerClassName)}
        >
          {/* ---------- Hidden Input ---------- */}

          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            role="switch"
            aria-invalid={Boolean(error)}
            aria-required={required}
            aria-describedby={describedBy || undefined}
            className={cn(inputStyles, className)}
            {...props}
          />

          {/* ---------- Track ---------- */}

          <span
            className={cn(
              trackBaseStyles,
              switchSizes[size].track,
              error && "ring-1 ring-[var(--color-error)]"
            )}
          >
            {/* ---------- Thumb ---------- */}

            <span className={cn(thumbBaseStyles, switchSizes[size].thumb)} />
          </span>

          {/* ---------- Label ---------- */}

          {label && (
            <span className={labelStyles}>
              {label}

              {required && <span className="ml-1 text-[var(--color-error)]">*</span>}
            </span>
          )}
        </label>

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

Switch.displayName = "Switch";
