"use client";

/* ==========================
   Imports
========================== */

import { forwardRef, useEffect, useId, useRef } from "react";

import { cn } from "@/lib/utils";

import {
  baseStyles,
  checkboxContainerStyles,
  checkboxSizes,
  errorTextStyles,
  helperTextStyles,
  labelStyles,
  wrapperStyles,
} from "./checkbox.styles";

import type { CheckboxProps } from "./Checkbox.types";

/* ==========================
   Component
========================== */

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      helperText,
      error,
      size = "md",
      fullWidth = true,
      indeterminate = false,
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
    const checkboxId = id ?? generatedId;

    // Helper text ID.
    const helperTextId = helperText ? `${checkboxId}-helper` : undefined;

    // Error message ID.
    const errorId = error ? `${checkboxId}-error` : undefined;

    // Connect helper/error text with checkbox.
    const describedBy = [helperTextId, errorId].filter(Boolean).join(" ");

    /* ==========================
       Indeterminate Support
    ========================== */

    const internalRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    /* ==========================
       Render
    ========================== */

    return (
      <div className={cn(wrapperStyles, fullWidth && "w-full", wrapperClassName)}>
        <div className={cn(checkboxContainerStyles, containerClassName)}>
          {/* ---------- Checkbox ---------- */}

          <input
            ref={(node) => {
              internalRef.current = node;

              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            id={checkboxId}
            type="checkbox"
            aria-invalid={Boolean(error)}
            aria-required={required}
            aria-describedby={describedBy || undefined}
            className={cn(
              baseStyles,
              checkboxSizes[size],
              error && "border-[var(--color-error)] focus-visible:ring-[var(--color-error)]",
              className
            )}
            {...props}
          />

          {/* ---------- Label ---------- */}

          {label && (
            <label htmlFor={checkboxId} className={labelStyles}>
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

Checkbox.displayName = "Checkbox";
