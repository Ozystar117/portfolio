import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { SECTION_IDS } from "@/lib/nav";

export function Projects() {
  return (
    <SectionReveal id={SECTION_IDS.projects} className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work & impact"
          description="Outcome-led highlights from production work and community."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`border-border/80 bg-card/70 flex flex-col shadow-sm ${project.featured ? "ring-primary/25 ring-1" : ""}`}
            >
              <CardHeader className="space-y-3 pb-2">
                <div className="flex flex-wrap items-center gap-2">
                  {project.tag ? (
                    <Badge variant="secondary" className="rounded-full">
                      {project.tag}
                    </Badge>
                  ) : null}
                  {project.featured ? (
                    <Badge className="bg-primary text-primary-foreground rounded-full">Featured</Badge>
                  ) : null}
                </div>
                {project.company ? (
                  <p className="text-muted-foreground font-heading text-xs font-medium tracking-wide uppercase">
                    {project.company}
                  </p>
                ) : null}
                {project.stat ? (
                  <div className="space-y-1">
                    <p className="font-heading text-primary text-4xl font-semibold tracking-tight">
                      {project.stat}
                    </p>
                    {project.statLabel ? (
                      <p className="text-muted-foreground text-xs tracking-wide uppercase">{project.statLabel}</p>
                    ) : null}
                  </div>
                ) : null}
                <h3 className="font-heading text-xl font-semibold tracking-tight">{project.title}</h3>
                {project.description ? (
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                ) : null}
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 pt-0">
                {project.embedYouTubeId ? (
                  <div className="border-border/70 overflow-hidden rounded-xl border">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.embedYouTubeId}`}
                      title={`${project.title} — embedded video`}
                      className="aspect-video w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : null}
                {project.highlights?.length ? (
                  <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : null}
              </CardContent>
              {project.links?.length ? (
                <CardFooter className="mt-auto flex flex-wrap gap-2">
                  {project.links.map((l) => (
                    <Button key={l.href} asChild variant="default">
                      <Link href={l.href} target="_blank" rel="noopener noreferrer" className="gap-2">
                        {l.label}
                        <ExternalLink className="size-4" />
                      </Link>
                    </Button>
                  ))}
                </CardFooter>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
