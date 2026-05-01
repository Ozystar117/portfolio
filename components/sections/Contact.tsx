"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { SECTION_IDS } from "@/lib/nav";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fallbackMailto, setFallbackMailto] = useState<string | null>(null);

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setStatus("loading");
    setFallbackMailto(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; fallback?: boolean };
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      if (json.fallback) {
        const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\n— ${data.name} <${data.email}>`);
        setFallbackMailto(`mailto:${profile.email}?subject=${subject}&body=${body}`);
        setStatus("error");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  });

  return (
    <SectionReveal id={SECTION_IDS.contact} className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something solid"
          description={
            <>
              Direct line:{" "}
              <a
                className="text-foreground font-medium underline-offset-4 hover:underline"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </>
          }
        />
        <div className="mx-auto max-w-xl">
          <form
            onSubmit={onSubmit}
            className="border-border/80 bg-card/60 space-y-4 rounded-2xl border p-6 shadow-sm sm:p-8"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                autoComplete="name"
                placeholder="Your name"
                {...form.register("name")}
              />
              {form.formState.errors.name ? (
                <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                {...form.register("email")}
              />
              {form.formState.errors.email ? (
                <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="What do you want to collaborate on?"
                {...form.register("message")}
              />
              {form.formState.errors.message ? (
                <p className="text-destructive text-sm">{form.formState.errors.message.message}</p>
              ) : null}
            </div>
            <Button
              type="submit"
              className="w-full gap-2 sm:w-auto"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Mail className="size-4" />
              )}
              Send message
            </Button>
            {status === "success" ? (
              <p className="text-primary text-sm" role="status">
                Thanks—your message is on its way.
              </p>
            ) : null}
            {status === "error" ? (
              <div className="text-destructive space-y-2 text-sm" role="alert">
                <p>We couldn’t send through the form just now.</p>
                {fallbackMailto ? (
                  <a className="font-medium underline underline-offset-4" href={fallbackMailto}>
                    Open your email app instead
                  </a>
                ) : (
                  <a
                    className="font-medium underline underline-offset-4"
                    href={`mailto:${profile.email}`}
                  >
                    Email {profile.email} directly
                  </a>
                )}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </SectionReveal>
  );
}
