import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/**
 * Text size variants.
 */
export type TextSize =
  | "xs"
  | "sm"
  | "md"
  | "lg";

/**
 * Text color variants.
 */
export type TextColor =
  | "default"
  | "muted"
  | "primary"
  | "secondary";

/**
 * Font weight variants.
 */
export type TextWeight =
  | "normal"
  | "medium"
  | "semibold"
  | "bold";

/**
 * Text alignment.
 */
export type TextAlign =
  | "left"
  | "center"
  | "right";

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Text content.
   */
  children: ReactNode;

  /**
   * Font size.
   * @default "md"
   */
  size?: TextSize;

  /**
   * Text color.
   * @default "default"
   */
  color?: TextColor;

  /**
   * Font weight.
   * @default "normal"
   */
  weight?: TextWeight;

  /**
   * Text alignment.
   * @default "left"
   */
  align?: TextAlign;
}