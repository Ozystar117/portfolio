import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p className="font-heading text-primary text-xs font-semibold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-foreground mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <div className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
          {description}
        </div>
      ) : null}
    </div>
  );
}
