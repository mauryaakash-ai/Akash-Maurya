import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BenchmarkingSection } from '@/components/sections/BenchmarkingSection';
import { ComparisonSlider } from '@/components/sections/ComparisonSlider';

export const metadata: Metadata = {
  title: 'Benchmarking & Interactive Evaluation — Akash Maurya',
  description: 'Evaluation taxonomy across 10+ super-resolution models, DIV2K/RealSR datasets, and interactive thermal reconstruction slider.',
};

export default function BenchmarksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="border-b border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/60 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-stone-900 dark:text-stone-100 font-semibold">Evaluation & Experiments</span>
            </div>
            <Link
              href="/contact"
              className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact Akash →
            </Link>
          </div>
        </div>

        <ComparisonSlider />
        <BenchmarkingSection />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-between items-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: Projects</span>
          </Link>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-700 dark:text-blue-400 hover:underline"
          >
            <span>Next: Skills</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
