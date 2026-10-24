'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

type MobileNavProps = {
  links: Array<{ label: string; href: string }>;
};

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsideClick);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative hidden max-[680px]:block" ref={containerRef}>
      <button
        className="grid size-[42px] h-[38px] place-items-center border-2 border-[var(--ink)] bg-[var(--paper)] transition-[transform,background] duration-150 ease-out hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[var(--yellow)] active:translate-x-1 active:translate-y-1"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>
      <nav
        className={`absolute right-0 top-12 grid min-w-[190px] origin-top-right border-2 border-[var(--ink)] bg-[var(--paper)] p-2 shadow-[4px_4px_0_var(--ink)] transition-[opacity,transform] duration-200 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'} `}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        {links.map((link) => (
          <Link
            className="border-b border-[var(--ink)] px-2.5 py-3 text-[0.82rem] font-extrabold transition-colors duration-150 hover:bg-[var(--yellow)] last:border-b-0"
            href={link.href}
            key={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        <a
          className="flex items-center gap-1.5 px-2.5 py-3 text-[0.82rem] font-extrabold transition-colors duration-150 hover:bg-[var(--yellow)]"
          href={portfolio.socials[0].href}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          GitHub <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </nav>
    </div>
  );
}
