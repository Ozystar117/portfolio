import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/nav";

export function About() {
  return (
    <SectionReveal id={SECTION_IDS.about} className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title="Engineering with clarity at scale" />
        <Card className="border-border/80 bg-card/60 shadow-sm backdrop-blur">
          <CardContent className="p-6 sm:p-8">
            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              {profile.summary}
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionReveal>
  );
}
