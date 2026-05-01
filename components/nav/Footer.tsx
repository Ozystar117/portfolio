import Link from "next/link";
import { profile } from "@/data/profile";

const SOURCE_REPO = "https://github.com/emmanuel-ozioma/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-border bg-muted/30 border-t py-10">
      <div className="text-muted-foreground mx-auto flex max-w-5xl flex-col gap-4 px-4 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left">
        <p>
          © {year} {profile.name}. {profile.location}
        </p>
        <p className="sm:text-right">
          Built with{" "}
          <Link
            href="https://nextjs.org"
            className="text-foreground font-medium underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>
          . Source on{" "}
          <Link
            href={SOURCE_REPO}
            className="text-foreground font-medium underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
