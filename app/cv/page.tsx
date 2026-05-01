import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const PDF = "/cv/emmanuel-ozioma-cv.pdf";

export const metadata: Metadata = {
  title: "CV",
  description: `Download or view ${profile.name}'s CV (PDF).`,
};

export default function CVPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="ghost" asChild className="gap-2">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>
        </Button>
        <Button asChild>
          <a href={PDF} download>
            <Download className="mr-2 size-4" />
            Download PDF
          </a>
        </Button>
      </div>
      <div className="border-border bg-card flex flex-1 flex-col overflow-hidden rounded-2xl border shadow-sm">
        <div className="border-border bg-muted/40 text-muted-foreground border-b px-4 py-3 text-sm sm:px-5">
          If the preview does not load, use the download button (some browsers block inline PDFs).
        </div>
        <object
          data={PDF}
          type="application/pdf"
          className="min-h-[70vh] w-full flex-1"
          title="Emmanuel Ozioma CV"
        >
          <div className="text-muted-foreground p-6 text-sm">
            PDF preview is not available in this browser.{" "}
            <a className="text-primary font-medium underline" href={PDF} download>
              Download the CV
            </a>{" "}
            instead.
          </div>
        </object>
      </div>
    </div>
  );
}
