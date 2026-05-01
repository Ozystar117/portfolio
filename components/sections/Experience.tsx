import { ArrowRight, Building2 } from "lucide-react";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { experiences } from "@/data/experience";
import { SECTION_IDS } from "@/lib/nav";
import { cn } from "@/lib/utils";

/** Matches period accent (`text-primary`) so stacks read as first-class signals. */
const techBadgeClassName = cn(
  "border-primary/70 bg-primary/5 text-foreground h-auto min-h-7 rounded-full px-3 py-1 text-sm font-medium",
);

export function Experience() {
  return (
    <SectionReveal id={SECTION_IDS.experience} className="bg-muted/25 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped impact"
          description="Enterprise finance and energy—APIs, reliability, migrations, and leadership moments."
        />
        <div className="relative mx-auto max-w-3xl space-y-8">
          <div
            className="bg-border absolute top-2 bottom-2 left-[11px] hidden w-px sm:block"
            aria-hidden
          />
          {experiences.map((job) => (
            <Card
              key={`${job.company}-${job.period}`}
              className="border-border/80 bg-card/70 relative overflow-hidden shadow-sm"
            >
              <CardHeader className="space-y-3 pb-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-3">
                    <div className="border-border bg-background mt-1 hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border sm:flex">
                      <Building2 className="text-primary size-4" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold tracking-tight">
                        {job.company}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {job.role} · {job.location}
                      </p>
                      <p className="font-heading text-primary mt-1 text-xs tracking-wide uppercase">
                        {job.period}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-0">
                {job.bullets?.length ? (
                  <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
                    {job.bullets.map((b) => (
                      <li key={b.text}>{b.text}</li>
                    ))}
                  </ul>
                ) : null}
                {job.tech?.length ? (
                  <div className="flex flex-wrap gap-2.5">
                    {job.tech.map((t) => (
                      <Badge key={t} variant="outline" className={techBadgeClassName}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                ) : null}

                {job.subRoles?.map((sub) => (
                  <div
                    key={sub.title}
                    className="border-border/70 bg-muted/20 rounded-xl border p-4"
                  >
                    <p className="font-heading text-foreground text-sm font-semibold">
                      {sub.title}
                    </p>
                    <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                      {sub.bullets.map((b) => (
                        <li key={b.text}>{b.text}</li>
                      ))}
                    </ul>
                    {sub.tech?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2.5">
                        {sub.tech.map((t) => (
                          <Badge key={t} variant="outline" className={techBadgeClassName}>
                            {t}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="rounded-full">
            <a
              href={`#${SECTION_IDS.projects}`}
              className="inline-flex items-center gap-2"
            >
              See impact in detail
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </SectionReveal>
  );
}
