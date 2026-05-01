import Link from "next/link";
import { Award, GraduationCap, Sparkles } from "lucide-react";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { awards } from "@/data/awards";
import { certifications } from "@/data/certifications";
import { skillGroups } from "@/data/skills";
import { SECTION_IDS } from "@/lib/nav";

export function SkillsSection() {
  return (
    <SectionReveal id={SECTION_IDS.skills} className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Stack I lean on"
          description="Groupings are indicative—my real superpower is learning the right tool for the job."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <Card key={g.category} className="border-border/80 bg-card/60">
              <CardHeader className="pb-2">
                <h3 className="font-heading text-foreground text-sm font-semibold">{g.category}</h3>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <Badge key={item} variant="secondary" className="rounded-full font-normal">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export function CertificationsSection() {
  return (
    <SectionReveal id={SECTION_IDS.certifications} className="bg-muted/20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning"
          description="Selected credentials that map to the work I do in production."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((c) => (
            <Card key={c.name} className="border-border/80 bg-card/70">
              <CardHeader className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="text-primary mt-0.5 size-5" />
                    <div>
                      <h3 className="font-heading text-base leading-snug font-semibold">
                        {c.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{c.issuer}</p>
                    </div>
                  </div>
                  {c.status === "in_progress" ? (
                    <Badge variant="outline" className="shrink-0">
                      In progress
                    </Badge>
                  ) : null}
                </div>
                {c.issued ? (
                  <p className="text-muted-foreground text-xs">Issued: {c.issued}</p>
                ) : null}
              </CardHeader>
              <CardContent className="pt-0">
                {c.href ? (
                  <Link
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Verify credential
                  </Link>
                ) : (
                  <p className="text-muted-foreground text-xs">
                    Verification link not listed publicly.
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export function AwardsSection() {
  return (
    <SectionReveal id={SECTION_IDS.awards} className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="Awards" title="Recognition that reflects delivery" />
        <div className="grid gap-4 md:grid-cols-2">
          {awards.map((a) => (
            <Card key={a.title} className="border-border/80 bg-card/60">
              <CardHeader className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="border-border bg-muted mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border">
                    <Award className="text-primary size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base leading-snug font-semibold">{a.title}</h3>
                    <p className="text-muted-foreground text-sm">{a.issuer}</p>
                    {a.date ? <p className="text-muted-foreground mt-1 text-xs">{a.date}</p> : null}
                  </div>
                </div>
                {a.detail ? (
                  <div className="bg-muted/40 text-muted-foreground flex gap-2 rounded-lg p-3 text-sm">
                    <Sparkles className="text-primary mt-0.5 size-4 shrink-0" />
                    <p>{a.detail}</p>
                  </div>
                ) : null}
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
