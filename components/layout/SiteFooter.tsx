import { profile } from "@/data/portfolioData";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink bg-paper">
      <div className="page-container flex flex-col gap-1 py-6 font-mono text-mono-tag text-ink-soft sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
