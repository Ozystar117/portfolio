import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { SECTION_IDS } from "@/lib/nav";

export function Testimonials() {
  return (
    <SectionReveal id={SECTION_IDS.testimonials} className="bg-muted/25 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="Testimonials" title="What teammates say" />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.author} className="border-border/80 overflow-hidden bg-card/70">
              <CardContent className="space-y-4 p-4 sm:p-5">
                <a href={t.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    width={1200}
                    height={420}
                    className="border-border w-full rounded-lg border"
                  />
                </a>
                <p className="text-sm">
                  <Link
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
                  >
                    Recommendation from {t.title}
                    <ExternalLink className="size-3.5" />
                  </Link>
                  <span className="text-muted-foreground mt-1 block text-xs">{t.author}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
