import type { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  /** Lucide icon component rendered at the top of the card */
  icon: LucideIcon;
  /** Card heading */
  title: string;
  /** Short supporting description */
  description: string;
  /** Optional extra class names */
  className?: string;
}
