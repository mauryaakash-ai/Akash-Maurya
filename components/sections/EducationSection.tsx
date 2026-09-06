'use client';

import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '@/data/education';

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
          <span className="font-mono text-xs font-semibold text-blue-700 dark:text-blue-400">
            08 /
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 uppercase font-mono">
              Academic Background & Education
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
              Undergraduate degree in Artificial Intelligence and secondary school academic records
            </p>
          </div>
        </div>

        {/* Education Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              className={`bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 shadow-xs flex flex-col justify-between space-y-4 ${
                idx === 0 ? 'md:col-span-2 border-stone-400 dark:border-stone-700' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span className="font-mono text-xs font-semibold text-stone-900 dark:text-stone-100">
                      {edu.institution}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
                    {edu.dates}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-stone-950 dark:text-stone-50">
                    {edu.degree}
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800 font-mono text-xs text-stone-800 dark:text-stone-200 font-semibold">
                    <span>{edu.scoreType}:</span>
                    <span className="text-blue-600 dark:text-blue-400">{edu.score}</span>
                    {edu.expectedGraduation && (
                      <span className="text-stone-500 font-normal">
                        (Graduation: {edu.expectedGraduation})
                      </span>
                    )}
                  </div>
                </div>

                {edu.details && (
                  <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300 font-sans pt-1">
                    {edu.details.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
