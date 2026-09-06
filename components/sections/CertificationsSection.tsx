'use client';

import React from 'react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { certificationsData } from '@/data/certifications';

export function CertificationsSection() {
  const certs = certificationsData.filter(c => c.category === 'Certification');
  const awards = certificationsData.filter(c => c.category === 'Award');

  return (
    <section id="certifications" className="py-16 md:py-20 border-b border-stone-200 dark:border-stone-800 bg-paper-50/50 dark:bg-stone-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
          <span className="font-mono text-xs font-semibold text-blue-700 dark:text-blue-400">
            09 /
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 uppercase font-mono">
              Certifications & Academic Recognition
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
              Verified certifications from Google, DeepLearning.AI, Infosys, and national merit awards
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Professional Technical Certifications</span>
            </h3>

            <div className="space-y-3">
              {certs.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4 shadow-xs space-y-2 hover:border-stone-400 dark:hover:border-stone-600 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-stone-100 dark:border-stone-800 pb-2">
                    <h4 className="font-bold text-sm text-stone-950 dark:text-stone-50">
                      {item.title}
                    </h4>
                    <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
                      {item.issueDate}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-blue-700 dark:text-blue-400">
                    <span>{item.issuer}</span>
                    {item.platform && <span className="text-stone-400">• {item.platform}</span>}
                  </div>

                  {item.description && (
                    <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Academic Honors & Awards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-semibold flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Honors & Merit Awards</span>
            </h3>

            <div className="space-y-3">
              {awards.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4 shadow-xs space-y-2"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-2">
                    <h4 className="font-bold text-sm text-stone-950 dark:text-stone-50">
                      {item.title}
                    </h4>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 shrink-0">
                      Merit Honor
                    </span>
                  </div>

                  <div className="font-mono text-xs text-stone-700 dark:text-stone-300">
                    {item.issuer}
                  </div>

                  {item.description && (
                    <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
