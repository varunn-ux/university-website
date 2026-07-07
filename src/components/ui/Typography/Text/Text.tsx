import { cn } from "@/lib/utils";

import {
  baseStyles,
  textAlignments,
  textColors,
  textSizes,
  textWeights,
} from "./text.styles";

import type { TextProps } from "./Text.types";

export function Text({
  children,
  size = "md",
  color = "default",
  weight = "normal",
  align = "left",
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        baseStyles,
        textSizes[size],
        textColors[color],
        textWeights[weight],
        textAlignments[align],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}