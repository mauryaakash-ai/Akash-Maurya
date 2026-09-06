'use client';

import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin, User, CheckCircle2, Globe, ArrowUpRight } from 'lucide-react';
import { experienceData } from '@/data/experience';

export function ExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    visecure: true,
    ashoka: true,
    robogenesis: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="experience" className="py-16 md:py-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline gap-3 mb-12 pb-4 border-b border-stone-200 dark:border-stone-800">
          <span className="font-mono text-xs font-semibold text-blue-700 dark:text-blue-400">
            03 /
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 uppercase font-mono">
              Research & Engineering Experience
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
              Internship research, academic fellowships, and student engineering leadership
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-stone-200 dark:border-stone-800 ml-3 md:ml-4 pl-6 md:pl-8 space-y-12">
          {experienceData.map((exp) => {
            const isExpanded = expandedItems[exp.id] ?? true;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-stone-400 dark:border-stone-600 bg-paper-50 dark:bg-stone-950 group-hover:border-blue-600 group-hover:bg-blue-600 transition-colors" />

                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 sm:p-6 shadow-xs space-y-4">
                  {/* Top Bar: Role, Org, Mode, Dates */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-stone-950 dark:text-stone-50">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                          {exp.mode}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-stone-800 dark:text-stone-200 mt-0.5 flex flex-wrap items-center gap-2">
                        <span>{exp.organization}</span>
                        {exp.program && (
                          <span className="text-xs text-purple-700 dark:text-purple-400 font-mono">
                            • {exp.program}
                          </span>
                        )}
                        {exp.websiteUrl && (
                          <a
                            href={exp.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-blue-700 dark:text-blue-400 hover:underline px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900"
                          >
                            <Globe className="w-3 h-3" />
                            <span>{exp.websiteLabel || 'Club Website'}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-70" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-stone-500 dark:text-stone-400 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{exp.dates}</span>
                    </div>
                  </div>

                  {/* Supervisor Note if present */}
                  {exp.supervisor && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-xs font-mono text-stone-700 dark:text-stone-300">
                      <User className="w-3.5 h-3.5 text-blue-600" />
                      <span>Supervised by: <strong className="text-stone-900 dark:text-stone-100">{exp.supervisor}</strong></span>
                    </div>
                  )}

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    {exp.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-1">
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                      {(isExpanded ? exp.highlights : exp.highlights.slice(0, 2)).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.highlights.length > 2 && (
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="inline-flex items-center gap-1 font-mono text-xs text-blue-700 dark:text-blue-400 hover:underline pt-1 focus:outline-none cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show fewer details</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>View all {exp.highlights.length} contribution points</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[11px] text-stone-400 mr-1 uppercase">
                      Stack:
                    </span>
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-stone-50 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
