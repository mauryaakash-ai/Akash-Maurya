'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, FileText, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import { profileData } from '@/data/profile';

export const navPages = [
  { label: 'Home', href: '/', number: '00' },
  { label: 'About', href: '/about', number: '01' },
  { label: 'Research', href: '/research', number: '02' },
  { label: 'Experience', href: '/experience', number: '03' },
  { label: 'Projects', href: '/projects', number: '04' },
  { label: 'Evaluation', href: '/benchmarks', number: '05' },
  { label: 'Skills', href: '/skills', number: '06' },
  { label: 'Education', href: '/education', number: '07' },
  { label: 'Awards', href: '/certifications', number: '08' },
  { label: 'Contact', href: '/contact', number: '09' },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand / Name Logo (No photo - text only) */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
        >
          <div className="w-8 h-8 rounded bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 flex items-center justify-center font-mono font-bold text-xs tracking-wider">
            AM
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm text-stone-900 dark:text-stone-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {profileData.name}
            </span>
            <span className="font-mono text-[10px] text-stone-500 dark:text-stone-400 tracking-wider">
              AI / ML ENGINEER INTERN
            </span>
          </div>
        </Link>

        {/* Desktop Multi-Page Navigation Bar */}
        <nav className="hidden xl:flex items-center gap-3" aria-label="Main Navigation">
          {navPages.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-medium tracking-wide transition-all py-1.5 px-2 rounded-md flex items-baseline gap-1 group ${
                  isActive
                    ? 'bg-stone-200 dark:bg-stone-800 text-blue-700 dark:text-blue-400 font-semibold shadow-2xs'
                    : 'text-stone-600 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900'
                }`}
              >
                <span className="font-mono text-[9px] text-stone-400 dark:text-stone-500 group-hover:text-blue-600 transition-colors">
                  {item.number}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Intermediate Nav for medium screens (lg/md) */}
        <div className="hidden md:flex xl:hidden items-center gap-2 text-xs font-mono">
          <Link
            href="/about"
            className={`px-2 py-1 rounded ${pathname === '/about' ? 'bg-stone-200 dark:bg-stone-800 font-bold' : 'text-stone-600 dark:text-stone-400'}`}
          >
            About
          </Link>
          <Link
            href="/research"
            className={`px-2 py-1 rounded ${pathname === '/research' ? 'bg-stone-200 dark:bg-stone-800 font-bold' : 'text-stone-600 dark:text-stone-400'}`}
          >
            Research
          </Link>
          <Link
            href="/experience"
            className={`px-2 py-1 rounded ${pathname === '/experience' ? 'bg-stone-200 dark:bg-stone-800 font-bold' : 'text-stone-600 dark:text-stone-400'}`}
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className={`px-2 py-1 rounded ${pathname === '/projects' ? 'bg-stone-200 dark:bg-stone-800 font-bold' : 'text-stone-600 dark:text-stone-400'}`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`px-2 py-1 rounded ${pathname === '/contact' ? 'bg-stone-200 dark:bg-stone-800 font-bold' : 'text-stone-600 dark:text-stone-400'}`}
          >
            Contact
          </Link>
        </div>

        {/* Actions (CV button, Theme toggle, Mobile trigger) - No raw phone/email here */}
        <div className="flex items-center gap-2">
          {/* CV Download Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-400 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 transition-all shadow-2xs hover:shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle light and dark theme"
            className="p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer shadow-2xs"
          >
            {mounted && theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-stone-700 dark:text-stone-300" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-stone-200 dark:border-stone-800 bg-paper-50 dark:bg-stone-950 px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-200 dark:border-stone-800">
            {navPages.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-stone-200 dark:bg-stone-800 text-blue-700 dark:text-blue-400 font-bold'
                      : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900'
                  }`}
                >
                  <span className="font-mono text-[10px] text-stone-400">{item.number}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-1">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 font-semibold"
            >
              <span>Go to Contact Page</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
