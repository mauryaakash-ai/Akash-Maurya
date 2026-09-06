'use client';

import React from 'react';
import { Terminal, Code, Cpu, Layers, Wrench } from 'lucide-react';
import { skillsData } from '@/data/skills';

const categoryIcons: Record<string, React.ReactNode> = {
  'Languages & Core': <Code className="w-4 h-4 text-blue-600" />,
  'ML/DL Frameworks': <Cpu className="w-4 h-4 text-purple-600" />,
  'Techniques & Paradigms': <Layers className="w-4 h-4 text-emerald-600" />,
  'Models & Architectures': <Terminal className="w-4 h-4 text-amber-600" />,
  'Tools & Platforms': <Wrench className="w-4 h-4 text-rose-600" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-20 border-b border-stone-200 dark:border-stone-800 bg-paper-50/50 dark:bg-stone-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
          <span className="font-mono text-xs font-semibold text-blue-700 dark:text-blue-400">
            07 /
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 uppercase font-mono">
              Technical Skills & Competencies
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
              Comprehensive inventory of programming languages, deep learning frameworks, neural architectures, and developer tooling
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryGroup, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-xs flex flex-col justify-between space-y-4 ${
                categoryGroup.category === 'Techniques & Paradigms' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2 border-b border-stone-100 dark:border-stone-800 pb-3">
                  <div className="p-1.5 rounded bg-stone-100 dark:bg-stone-800">
                    {categoryIcons[categoryGroup.category] || <Code className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="font-mono text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                      {categoryGroup.category}
                    </h3>
                    <span className="text-[10px] text-stone-400 font-mono">
                      {categoryGroup.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-500 dark:text-stone-400 font-sans mb-3.5 leading-relaxed">
                  {categoryGroup.description}
                </p>

                {/* Skill Chips (Categorized, Clean, No Fake Percentage Bars) */}
                <div className="flex flex-wrap gap-1.5">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-stone-50 dark:bg-stone-800/90 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700/80 hover:border-stone-400 dark:hover:border-stone-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
