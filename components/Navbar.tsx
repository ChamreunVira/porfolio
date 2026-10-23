import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const links = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="#top" aria-label="Back to top">
          <span className="brand__mark">CV</span>
          <span className="brand__name">Chamreun Vira</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="nav-cta" href="#contact">
          <span>Let&apos;s talk</span>
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
        </Link>

        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <Menu aria-hidden="true" size={20} />
            <span className="sr-only">Menu</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link className="mobile-nav__link" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <a className="mobile-nav__social" href={portfolio.socials[0].href} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
