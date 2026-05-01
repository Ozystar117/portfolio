"use client";

import { GitFork, Mail, Menu, Share2, Video, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SECTION_IDS } from "@/lib/nav";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

function NavItemLabel({ label, isActive }: { label: string; isActive: boolean }) {
  return (
    <span className="relative inline-block">
      {label}
      <span
        aria-hidden
        className={cn(
          "bg-primary absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full transition-transform",
          isActive ? "scale-x-100" : "scale-x-0",
        )}
      />
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<keyof typeof SECTION_IDS>("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids: (keyof typeof SECTION_IDS)[] = ["hero", ...NAV_ITEMS.map((i) => i.id)];
    const elements = ids
      .map((id) => ({ id, el: document.getElementById(SECTION_IDS[id]) }))
      .filter((x): x is { id: keyof typeof SECTION_IDS; el: HTMLElement } => Boolean(x.el));

    const ratios = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          ratios.set(e.target.id, e.intersectionRatio);
        }
        const sorted = [...ratios.entries()].sort((a, b) => b[1] - a[1]);
        const top = sorted[0];
        if (top && top[1] > 0) {
          const matched = ids.find((id) => SECTION_IDS[id] === top[0]);
          if (matched) setActive(matched);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach(({ el }) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: keyof typeof SECTION_IDS) => {
    const el = document.getElementById(SECTION_IDS[id]);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "bg-background/80 sticky top-0 z-50 border-b border-transparent backdrop-blur-md transition-[border-color,box-shadow]",
        scrolled && "border-border shadow-sm",
      )}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="font-heading text-foreground focus-visible:outline-ring text-sm font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {profile.shortName}
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <Button
                key={item.id}
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => scrollTo(item.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "text-muted-foreground hover:text-foreground relative",
                  isActive && "text-foreground",
                )}
              >
                <NavItemLabel label={item.label} isActive={isActive} />
              </Button>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center gap-0.5 sm:flex">
            <Button variant="ghost" size="icon" className="size-9 rounded-full" asChild>
              <Link
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitFork className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="size-9 rounded-full" asChild>
              <Link
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Share2 className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="size-9 rounded-full" asChild>
              <Link
                href={profile.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Video className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="size-9 rounded-full" asChild>
              <Link href={`mailto:${profile.email}`} aria-label="Email">
                <Mail className="size-4" />
              </Link>
            </Button>
          </div>
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-border bg-background/95 border-t px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <Button
                  key={item.id}
                  type="button"
                  variant="ghost"
                  className={cn("justify-start", isActive && "text-foreground")}
                  onClick={() => scrollTo(item.id)}
                  aria-current={isActive ? "true" : undefined}
                >
                  <NavItemLabel label={item.label} isActive={isActive} />
                </Button>
              );
            })}
            <div className="border-border mt-2 flex gap-2 border-t pt-3">
              <Button variant="outline" size="sm" asChild>
                <Link href={profile.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={profile.links.youtube} target="_blank" rel="noopener noreferrer">
                  YouTube
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
