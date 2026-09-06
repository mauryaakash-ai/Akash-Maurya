import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SkillsSection } from '@/components/sections/SkillsSection';

export const metadata: Metadata = {
  title: 'Technical Skills — Akash Maurya',
  description: 'Categorized technical inventory of languages, deep learning frameworks, neural architectures, and developer tools.',
};

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="border-b border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/60 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-stone-900 dark:text-stone-100 font-semibold">Technical Skills</span>
            </div>
            <Link
              href="/contact"
              className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact Akash →
            </Link>
          </div>
        </div>

        <SkillsSection />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-between items-center">
          <Link
            href="/benchmarks"
            className="inline-flex items-center gap-2 text-xs font-mono text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: Evaluation</span>
          </Link>
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-700 dark:text-blue-400 hover:underline"
          >
            <span>Next: Education</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
