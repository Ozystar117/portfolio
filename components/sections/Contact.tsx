import { Mail, Share2 } from "lucide-react";
import Link from "next/link";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/nav";

export function Contact() {
  return (
    <SectionReveal id={SECTION_IDS.contact} className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something solid"
          description="I'm open to engineering roles, collaboration, and short consulting calls."
        />
        <Card className="border-border/80 bg-card/60 mx-auto max-w-xl shadow-sm">
          <CardContent className="flex flex-col gap-4 p-6 sm:p-8">
            <Button asChild size="lg" className="w-full justify-center gap-2 rounded-full">
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4" />
                Email {profile.email}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full justify-center gap-2 rounded-full"
            >
              <Link href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                <Share2 className="size-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </SectionReveal>
  );
}
