'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { profile } from '@/data/portfolioData';
import { Menu, X } from 'lucide-react';
import HeaderProfile from '@/public/images/cv.jpeg';

const navigationLinks = [
  { href: '#projects', id: 'projects', label: 'projects', num: '01' },
  { href: '#journey', id: 'journey', label: 'journey', num: '02' },
  { href: '#stack', id: 'stack', label: 'stack', num: '03' },
  { href: '#contact', id: 'contact', label: 'contact', num: '04' },
];

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Collect all section elements matching our navigation link IDs
    const sectionElements = navigationLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    // Set up IntersectionObserver to detect which section is currently centered/visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        // Trigger active state when section passes through top ~40% of viewport
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      },
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-dashed border-ink/20 bg-paper/90 backdrop-blur-md transition-all">
      {/* Decorative Grid Top Accent Line */}
      <div className="h-1 w-full bg-linear-to-r from-amber-200 via-red-400 to-amber-200 opacity-60" />

      <div className="page-container flex items-center justify-between gap-4 py-3 px-4 sm:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group relative block transition-transform hover:-rotate-1">
            <Image
              src={HeaderProfile}
              alt={profile.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover aspect-square"
            />
          </Link>

          {/* Status Badge */}
          {/* <span className="hidden items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-700 md:inline-flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            available for work
          </span> */}
        </div>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-6 font-mono text-sm">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative flex items-center gap-1.5 py-1 transition-colors ${
                      isActive ? 'text-ink font-semibold' : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    {/* Section Index Marker */}
                    <span
                      className={`font-mono text-xs transition-transform ${
                        isActive
                          ? 'text-red-500 font-bold -translate-y-0.5'
                          : 'text-red-500/70 group-hover:-translate-y-0.5'
                      }`}
                    >
                      {link.num}.
                    </span>

                    <span className="font-medium">{link.label}</span>

                    {/* Red handwritten underline stroke effect */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-ink/20 bg-paper hover:bg-ink/5 sm:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5 text-ink" /> : <Menu className="h-5 w-5 text-ink" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav className="border-t border-dashed border-ink/20 bg-paper px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-3 font-mono text-sm">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 py-1.5 transition-colors ${
                      isActive ? 'text-ink font-bold' : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    <span className={isActive ? 'text-red-500 font-bold' : 'text-red-500/70'}>// {link.num}</span>
                    <span className="font-hand text-xl font-bold">{link.label}</span>
                    {isActive && <span className="ml-auto font-mono text-xs text-red-500">← active</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
