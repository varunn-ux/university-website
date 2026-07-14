import { cn } from "@/lib/utils";
import { featureCardStyles as styles } from "./feature-card.styles";
import type { FeatureCardProps } from "./FeatureCard.types";

/**
 * FeatureCard
 * Displays a single feature/benefit with an icon, title and description.
 * Used inside FeaturesSection's grid.
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} strokeWidth={2} aria-hidden="true" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
