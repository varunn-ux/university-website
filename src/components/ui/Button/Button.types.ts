import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

export type ButtonSize =
  | "sm"
  | "md"
  | "lg";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button content
   */
  children: ReactNode;

  /**
   * Visual style
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Button size
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Loading state
   */
  isLoading?: boolean;

  /**
   * Optional left icon
   */
  leftIcon?: ReactNode;

  /**
   * Optional right icon
   */
  rightIcon?: ReactNode;

  /**
   * Full width button
   */
  fullWidth?: boolean;
}