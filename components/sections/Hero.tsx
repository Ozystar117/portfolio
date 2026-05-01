import { ArrowRight, FileText, GitFork, Mail, Share2, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/nav";

const HERO_STATS = [
  { value: "~4 yrs", label: "Industry experience" },
  { value: "99.9%", label: "Production uptime" },
  { value: "$25M+", label: "Trading benefits enabled" },
] as const;

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="border-border from-muted/40 to-background relative overflow-hidden border-b bg-gradient-to-b px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="from-primary/15 pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] via-transparent to-transparent" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-6">
          <div className="border-border bg-card text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="bg-primary/60 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
            </span>
            Open to impactful engineering roles
          </div>
          <div className="space-y-3">
            <h1 className="font-heading text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="font-heading text-primary text-lg sm:text-xl">{profile.headline}</p>
            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              {profile.tagline}
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            {HERO_STATS.map((s) => (
              <div
                key={s.label}
                className="border-border/80 bg-card/60 rounded-xl border px-3 py-2"
              >
                <dt className="text-muted-foreground text-[11px] uppercase tracking-wide">
                  {s.label}
                </dt>
                <dd className="font-heading text-primary text-lg font-semibold">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2 rounded-full">
              <Link href="/cv">
                View CV <FileText className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-full">
              <Link href={`mailto:${profile.email}`}>
                Email me <Mail className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="gap-2 rounded-full">
              <a href={`#${SECTION_IDS.contact}`}>
                Get in touch <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <Link href={profile.links.github} target="_blank" rel="noopener noreferrer">
                <GitFork className="mr-2 size-4" /> GitHub
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <Link href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                <Share2 className="mr-2 size-4" /> LinkedIn
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <Link href={profile.links.youtube} target="_blank" rel="noopener noreferrer">
                <Video className="mr-2 size-4" /> OzyCodes
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex w-full max-w-sm flex-col items-center gap-4 lg:items-end">
          <div className="border-border bg-card shadow-primary/10 relative h-36 w-36 overflow-hidden rounded-3xl border shadow-lg">
            <Image
              src="/images/headshot.jpeg"
              alt="Emmanuel Ozioma"
              fill
              sizes="144px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
