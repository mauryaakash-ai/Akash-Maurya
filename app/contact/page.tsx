import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/ContactSection';
import { ContactButtons } from '@/components/ui/ContactButtons';

export const metadata: Metadata = {
  title: 'Contact Akash Maurya — Direct Verification & Communication',
  description: 'Direct contact buttons for email and phone, verified GitHub and LinkedIn profiles, and contact message dispatcher.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Page Banner */}
        <div className="border-b border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/60 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-stone-900 dark:text-stone-100 font-semibold">Contact & Verification</span>
            </div>
            <ContactButtons showLabels={false} size="sm" />
          </div>
        </div>

        <ContactSection />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-between items-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 text-xs font-mono text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: Awards & Certifications</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-700 dark:text-blue-400 hover:underline"
          >
            <span>Return to Home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
