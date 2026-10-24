'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { MobileNav } from '@/components/MobileNav';

const links = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/#work' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-10 w-full bg-[var(--paper)]">
      <div className="mx-auto flex h-[86px] w-[min(calc(100%-48px),var(--max-width))] items-center justify-between gap-6 border-b-[1.5px] border-[var(--ink)] max-[680px]:h-[72px] max-[680px]:w-[min(calc(100%-32px),var(--max-width))]">
        <Link
          className="inline-flex items-center gap-[11px] text-[0.86rem] font-extrabold tracking-[-0.03em]"
          href="/"
          aria-label="Back to top"
        >
          <span className="grid size-[31px] place-items-center bg-[var(--ink)] font-mono text-[0.63rem] tracking-[-0.08em] text-[var(--paper)]">
            CV
          </span>
          <span className="whitespace-nowrap max-[680px]:hidden">Chamreun Vira</span>
        </Link>

        <nav
          className="ml-auto mr-[clamp(10px,2vw,28px)] flex items-center gap-[clamp(18px,3vw,42px)] max-[680px]:hidden"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              className="group/nav-link relative text-[0.8rem] font-bold text-[var(--muted)] transition-colors duration-150 ease-out after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--ink)] after:transition-transform after:duration-200 hover:text-[var(--ink)] group-hover/nav-link:after:scale-x-100 aria-[current=page]:text-[var(--ink)] aria-[current=page]:after:scale-x-100"
              href={link.href}
              key={link.href}
              aria-current={link.href === '/about' && pathname === '/about' ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          className="inline-flex items-center gap-2 border-2 border-[var(--ink)] bg-[var(--yellow)] px-[14px] py-[11px] text-[0.78rem] font-extrabold shadow-[3px_3px_0_var(--ink)] transition-[transform,box-shadow] duration-150 ease-out hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_var(--ink)] active:translate-x-1 active:translate-y-1 active:shadow-none max-[680px]:hidden"
          href="#contact"
        >
          <span>Let&apos;s talk</span>
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.5} />
        </Link>

        <MobileNav links={links} />
      </div>
    </header>
  );
}
