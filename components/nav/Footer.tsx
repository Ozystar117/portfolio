import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-border bg-muted/30 border-t py-10">
      <div className="text-muted-foreground mx-auto max-w-5xl px-4 text-center text-sm sm:px-6">
        <p>© {year} {profile.name}.</p>
      </div>
    </footer>
  );
}
