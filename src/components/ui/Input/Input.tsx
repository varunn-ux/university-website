/* ==========================
   Imports
========================== */

import { forwardRef, useId } from "react";

import { cn } from "@/lib/utils";

import {
  baseStyles,
  errorTextStyles,
  helperTextStyles,
  inputContainerStyles,
  inputSizes,
  inputVariants,
  labelStyles,
  leftIconStyles,
  rightIconStyles,
  wrapperStyles,
} from "./input.styles";

import type { InputProps } from "./Input.types";

/* ==========================
   Component
========================== */

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      variant = "default",
      size = "md",
      fullWidth = true,
      leftIcon,
      rightIcon,
      wrapperClassName,
      containerClassName,
      className,
      id,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();

    const inputId = id ?? generatedId;

    const helperTextId = helperText ? `${inputId}-helper` : undefined;

    const errorId = error ? `${inputId}-error` : undefined;

    const describedBy = [helperTextId, errorId].filter(Boolean).join(" ");

    return (
      <div className={cn(wrapperStyles, fullWidth && "w-full", wrapperClassName)}>
        {label && (
          <label htmlFor={inputId} className={labelStyles}>
            {label}
            {required && <span className="ml-1 text-[var(--color-error)]">*</span>}
          </label>
        )}

        <div className={cn(inputContainerStyles, containerClassName)}>
          {leftIcon && <span className={leftIconStyles}>{leftIcon}</span>}

          <input
            ref={ref}
            id={inputId}
            type={props.type ?? "text"}
            aria-invalid={Boolean(error)}
            aria-required={required}
            aria-describedby={describedBy || undefined}
            className={cn(
              baseStyles,
              inputVariants[variant],
              inputSizes[size],
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error &&
                "border-[var(--color-error)] focus-visible:border-[var(--color-error)] focus-visible:ring-[var(--color-error)]",
              className
            )}
            {...props}
          />

          {rightIcon && <span className={rightIconStyles}>{rightIcon}</span>}
        </div>

        {helperText && !error && (
          <p id={helperTextId} className={helperTextStyles}>
            {helperText}
          </p>
        )}

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

Input.displayName = "Input";
