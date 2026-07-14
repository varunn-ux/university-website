import Image from "next/image";
import { cn } from "@/lib/utils";
import { robotMascotStyles as styles } from "./robot-mascot.styles";
import type { RobotMascotProps } from "./RobotMascot.types";

/**
 * RobotMascot
 * Decorative illustration displayed alongside the features grid.
 * Hidden on mobile/tablet to keep the layout clean; visible from `lg` up.
 *
 * NOTE: `src` defaults to a placeholder image (picsum.photos) since the
 * original mascot artwork asset was not provided. Replace `src` with the
 * real asset path (e.g. "/images/robot-mascot.png") when available.
 */
export function RobotMascot({
  src = "https://picsum.photos/seed/robot-mascot/500/650",
  alt = "AI robot mascot illustration",
  className,
}: RobotMascotProps) {
  return (
    <div className={cn(styles.wrapper, className)}>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={650}
        className={styles.image}
        priority
      />
    </div>
  );
}
