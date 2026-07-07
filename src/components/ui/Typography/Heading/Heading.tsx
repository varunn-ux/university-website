import { cn } from "@/lib/utils";

import {
  baseStyles,
  headingAlignments,
  headingColors,
  headingLevels,
  headingWeights,
} from "./heading.styles";

import type { HeadingProps } from "./Heading.types";

export function Heading({
  children,
  level = 1,
  align = "left",
  color = "default",
  weight = "bold",
  className,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        baseStyles,
        headingLevels[level],
        headingAlignments[align],
        headingColors[color],
        headingWeights[weight],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}