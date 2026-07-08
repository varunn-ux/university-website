/* ==========================
   Imports
========================== */

import { forwardRef, useId } from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  baseStyles,
  errorTextStyles,
  helperTextStyles,
  iconStyles,
  labelStyles,
  selectContainerStyles,
  selectSizes,
  selectVariants,
  wrapperStyles,
} from "./select.styles";

import type { SelectProps } from "./Select.types";

/* ==========================
   Component
========================== */

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      placeholder,
      variant = "default",
      size = "md",
      fullWidth = true,
      wrapperClassName,
      containerClassName,
      className,
      id,
      required,
      children,
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
    const selectId = id ?? generatedId;

    // Helper text ID.
    const helperTextId = helperText ? `${selectId}-helper` : undefined;

    // Error message ID.
    const errorId = error ? `${selectId}-error` : undefined;

    // Connect helper/error text with select.
    const describedBy = [helperTextId, errorId].filter(Boolean).join(" ");

    /* ==========================
       Render
    ========================== */

    return (
      <div className={cn(wrapperStyles, fullWidth && "w-full", wrapperClassName)}>
        {/* ---------- Label ---------- */}

        {label && (
          <label htmlFor={selectId} className={labelStyles}>
            {label}

            {required && <span className="ml-1 text-[var(--color-error)]">*</span>}
          </label>
        )}

        {/* ---------- Select Container ---------- */}

        <div className={cn(selectContainerStyles, containerClassName)}>
          <select
            ref={ref}
            id={selectId}
            aria-invalid={Boolean(error)}
            aria-required={required}
            aria-describedby={describedBy || undefined}
            className={cn(
              baseStyles,
              selectVariants[variant],
              selectSizes[size],

              error &&
                "border-[var(--color-error)] focus-visible:border-[var(--color-error)] focus-visible:ring-[var(--color-error)]",

              className
            )}
            {...props}
          >
            {/* Placeholder Option */}

            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}

            {children}
          </select>

          {/* Dropdown Icon */}

          <ChevronDown size={18} className={iconStyles} aria-hidden="true" />
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

Select.displayName = "Select";
