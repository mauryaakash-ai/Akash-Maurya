'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profileData } from '@/data/profile';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-paper-100/50 dark:bg-stone-950/80 text-stone-700 dark:text-stone-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-stone-200 dark:border-stone-800">
          {/* Column 1: Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-stone-900 dark:text-stone-100">
                {profileData.name}
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                AI / ML Intern
              </span>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed max-w-sm">
              Research in Deep Learning, Computer Vision, and Image Super-Resolution. Focused on model architectures, self-supervised learning, and applied robotics.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Column 2: Direct Navigation & Contact Page */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-stone-900 dark:text-stone-100 uppercase tracking-wider font-semibold">
              Navigation & Verification
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Get in touch (Contact Page) →</span>
                </Link>
              </li>
              <li>
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/{profileData.github}</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/{profileData.linkedin}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Standards */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-stone-900 dark:text-stone-100 uppercase tracking-wider font-semibold">
              Research Ethics
            </span>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              All listed roles, metrics, and models represent verified academic and internship work per curriculum vitae. No simulated claims.
            </p>
            <div className="pt-1">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-stone-500 dark:text-stone-400 gap-3">
          <div>
            © {new Date().getFullYear()} {profileData.name} — Built with Next.js & Tailwind CSS
          </div>
          <div className="flex items-center gap-4">
            <span>AI / ML Engineer Portfolio</span>
            <span>•</span>
            <span>Research & Implementation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
