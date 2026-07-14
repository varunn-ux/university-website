import type { LucideIcon } from "lucide-react";

export interface FeatureItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeaturesSectionProps {
  /** Optional override for the feature list; defaults to the built-in data */
  features?: FeatureItem[];
  /** Optional extra class names on the outer <section> */
  className?: string;
}
