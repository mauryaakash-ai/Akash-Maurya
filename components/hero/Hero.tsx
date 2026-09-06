'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Github, Linkedin, BookOpen, Layers } from 'lucide-react';
import { profileData } from '@/data/profile';
import { SuperResolutionGrid } from './SuperResolutionGrid';
import { ResearchConsole } from './ResearchConsole';

export function Hero() {
  return (
    <section className="relative pt-10 pb-14 md:pt-14 md:pb-16 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow & Status Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-xs font-mono tracking-widest uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>AI / MACHINE LEARNING / COMPUTER VISION</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-900 px-3 py-1 rounded-md border border-stone-200 dark:border-stone-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for AI/ML Engineering & Research</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Headline, Bio, Navigation CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider font-semibold">
                {profileData.name} — {profileData.role}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-950 dark:text-stone-50 leading-[1.12]">
                Building intelligent systems through research, experimentation, and engineering.
              </h1>
            </div>

            {/* Subtitle Bio */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
              AI/ML undergraduate researcher with hands-on experience in deep learning, computer vision, and image super-resolution. Investigating CNN and Vision Transformer architectures, self-supervised representation learning (SimCLR), and real-time embedded robotic control.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold bg-stone-950 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-950 transition-all shadow-xs cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 hover:border-stone-900 dark:hover:border-stone-400 text-stone-900 dark:text-stone-100 transition-all shadow-2xs cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-stone-500" />
                <span>About & Profile</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition-all shadow-2xs cursor-pointer"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Verified Social Links */}
            <div className="pt-3 flex items-center gap-5 text-xs font-mono text-stone-500 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/{profileData.github}</span>
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>Contact Details →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic + Research Console (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <SuperResolutionGrid />
            <ResearchConsole />
          </div>
        </div>
      </div>
    </section>
  );
}
