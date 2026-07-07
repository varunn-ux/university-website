import type {
  HTMLAttributes,
  ReactNode,
} from "react";

/**
 * HTML heading elements.
 */
export type HeadingLevel =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6;

/**
 * Text alignment.
 */
export type HeadingAlign =
  | "left"
  | "center"
  | "right";

/**
 * Heading color variants.
 */
export type HeadingColor =
  | "default"
  | "primary"
  | "secondary";

/**
 * Font weight variants.
 */
export type HeadingWeight =
  | "medium"
  | "semibold"
  | "bold";

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Heading content.
   */
  children: ReactNode;

  /**
   * Semantic heading level.
   * @default 1
   */
  level?: HeadingLevel;

  /**
   * Text alignment.
   * @default "left"
   */
  align?: HeadingAlign;

  /**
   * Text color.
   * @default "default"
   */
  color?: HeadingColor;

  /**
   * Font weight.
   * @default "bold"
   */
  weight?: HeadingWeight;
}