import { Button } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

export default function HomePage() {
  return (
    <main className="container mx-auto py-16 space-y-10">
      {/* ==========================
          Heading Component Demo
      ========================== */}

      <section className="space-y-4">
        <Heading level={1}>
          Welcome to LNCT University
        </Heading>

        <Heading level={2}>
          Admissions Open 2026
        </Heading>

        <Heading level={3} color="primary">
          Excellence in Education
        </Heading>

        <Heading
          level={4}
          align="center"
          color="secondary"
        >
          Center Aligned Heading
        </Heading>

        <Heading
          level={5}
          weight="medium"
        >
          Medium Weight Heading
        </Heading>

        <Heading
          level={6}
          className="uppercase"
        >
          Small Heading
        </Heading>
      </section>

      {/* ==========================
          Text Component Demo
      ========================== */}

      <section className="space-y-3">
        <Text>
          LNCT University is committed to providing
          world-class education, innovation, research,
          and outstanding placement opportunities.
        </Text>

        <Text color="primary">
          This is primary colored text.
        </Text>

        <Text align="center">
          This text is center aligned.
        </Text>

        <Text weight="semibold">
          This is semibold text.
        </Text>
      </section>

      {/* ==========================
          Button Component Demo
      ========================== */}

      <section className="flex flex-wrap gap-4">
        <Button>
          Primary Button
        </Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="outline">
          Outline
        </Button>

        <Button variant="ghost">
          Ghost
        </Button>

        <Button size="sm">
          Small
        </Button>

        <Button size="md">
          Medium
        </Button>

        <Button size="lg">
          Large
        </Button>

        <Button isLoading>
          Loading...
        </Button>

        <Button fullWidth>
          Full Width Button
        </Button>
      </section>
    </main>
  );
}