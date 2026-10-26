import Link from "next/link";
import { profile } from "@/data/portfolioData";

const navigationLinks = [
  { href: "/#projects", label: "projects" },
  { href: "/#journey", label: "journey" },
  { href: "/#stack", label: "stack" },
  { href: "/#contact", label: "contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink bg-paper">
      <div className="page-container flex items-center justify-between gap-4 py-3">
        <Link href="/" className="font-hand text-3xl font-bold leading-none text-ink">
          {profile.name.toLowerCase()}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 font-mono text-mono-tag text-ink-soft sm:gap-6">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="underline-offset-4 hover:text-ink hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
