import { cn } from "@/lib/utils";

import {
  baseStyles,
  buttonSizes,
  buttonVariants,
} from "./button.styles";

import { ButtonProps } from "./Button.types";

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
  <button
  type={type}
  disabled={disabled || isLoading}
  aria-disabled={disabled || isLoading}
  aria-busy={isLoading}
  className={cn(
    baseStyles,
    buttonVariants[variant],
    buttonSizes[size],
    fullWidth && "w-full",
    className
  )}
  {...props}
>
  {isLoading && (
    <span
      className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
      aria-hidden="true"
    />
  )}

  {!isLoading && leftIcon && (
    <span className="flex items-center">
      {leftIcon}
    </span>
  )}

  <span className="inline-flex items-center">
    {children}
  </span>

  {!isLoading && rightIcon && (
    <span className="flex items-center">
      {rightIcon}
    </span>
  )}
</button>
  );
}