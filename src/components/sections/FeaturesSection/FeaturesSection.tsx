import {
  LayoutGrid,
  Share2,
  Bell,
  UserRound,
  Users,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { RobotMascot } from "@/components/ui/RobotMascot";
import { featuresSectionStyles as styles } from "./features-section.styles";
import type { FeatureItem, FeaturesSectionProps } from "./FeaturesSection.types";

/**
 * Default feature data matching the source design.
 * Icons are substituted with the closest Lucide equivalents since the
 * original custom icon artwork was not provided.
 */
const defaultFeatures: FeatureItem[] = [
  {
    id: "adaptive-learning-tools",
    icon: LayoutGrid,
    title: "Adaptive Learning Tools",
    description:
      "Personalized learning paths that adjust to each student's pace, strengths, and goals.",
  },
  {
    id: "intelligent-tutoring-system",
    icon: Share2,
    title: "Intelligent Tutoring System",
    description:
      "Seamless AI-powered support that offers access to study materials and concept clarity.",
  },
  {
    id: "virtual-assistance",
    icon: Bell,
    title: "24/7 Virtual Assistance",
    description:
      "Always-on help for queries, resources, and academic support—anytime, anywhere.",
  },
  {
    id: "virtual-mentorship",
    icon: UserRound,
    title: "Virtual Mentorship",
    description:
      "Connect with industry experts, AI tutors and mentors and develop an edge in the industry.",
  },
  {
    id: "encourages-innovation",
    icon: Users,
    title: "Encourages innovation",
    description:
      "A lot gets taken care of by the AI so that you can focus on creativity and innovation.",
  },
  {
    id: "placements-assistance",
    icon: Award,
    title: "Placements Assistance",
    description:
      "End-to-end support—from resume building to mock interviews and job connections.",
  },
];

/**
 * FeaturesSection
 * Two-column layout: decorative robot mascot on the left, a responsive
 * 2xN grid of FeatureCard items on the right.
 */
export function FeaturesSection({
  features = defaultFeatures,
  className,
}: FeaturesSectionProps) {
  return (
    <section className={cn(styles.section, className)}>
      <div className={styles.container}>
        <RobotMascot />

        <div className={styles.grid}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
