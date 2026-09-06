'use client';

import React, { useState } from 'react';
import { Layers, Eye, Sparkles, Binary, Cpu, ChevronRight, Github, ArrowUpRight } from 'lucide-react';
import { researchAreasData } from '@/data/research';

const iconMap: Record<string, React.ReactNode> = {
  'super-resolution': <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
  'self-supervised-learning': <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
  'computer-vision': <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  'biometric-identification': <Binary className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
  'embedded-ai-robotics': <Cpu className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
};

export function ResearchSection() {
  const [selectedAreaId, setSelectedAreaId] = useState<string>(researchAreasData[0].id);

  const activeArea = researchAreasData.find(a => a.id === selectedAreaId) || researchAreasData[0];

  return (
    <section id="research" className="py-16 md:py-20 border-b border-stone-200 dark:border-stone-800 bg-paper-50/50 dark:bg-stone-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
          <span className="font-mono text-xs font-semibold text-blue-700 dark:text-blue-400">
            02 /
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 uppercase font-mono">
              Research & Technical Interests
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
              Core research domains grounded in deep learning architectures, representation learning, and applied vision
            </p>
          </div>
        </div>

        {/* 5 Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* List / Tabs on Left */}
          <div className="md:col-span-5 space-y-2.5">
            {researchAreasData.map((area, idx) => {
              const isSelected = area.id === selectedAreaId;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedAreaId(area.id)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-stone-900 border-stone-900 dark:border-stone-100 shadow-xs'
                      : 'bg-stone-50 dark:bg-stone-900/40 border-stone-200 dark:border-stone-800/80 hover:border-stone-300 dark:hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-stone-100 dark:bg-stone-800">
                      {iconMap[area.id] || <Layers className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] text-stone-400">0{idx + 1}.</span>
                        <h3 className="font-medium text-xs text-stone-900 dark:text-stone-100">
                          {area.title}
                        </h3>
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-1 mt-0.5">
                        {area.modelsAndMethods.slice(0, 3).join(', ')}...
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-0.5 text-stone-900 dark:text-stone-100' : 'text-stone-400 opacity-60'}`} />
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Area Inspector on Right */}
          <div className="md:col-span-7 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 shadow-xs space-y-6">
            <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                    Research Domain
                  </span>
                  <span className="font-mono text-xs text-stone-400">
                    // {activeArea.id}
                  </span>
                </div>

                {activeArea.githubUrl && (
                  <a
                    href={activeArea.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-stone-950 dark:text-stone-50">
                {activeArea.title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
                {activeArea.description}
              </p>
            </div>

            {/* Key Concepts */}
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-stone-900 dark:text-stone-100 font-semibold mb-2.5">
                Core Focus & Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeArea.keyConcepts.map((concept, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded bg-stone-50 dark:bg-stone-800/60 border border-stone-100 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>{concept}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Models & Methods */}
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-stone-900 dark:text-stone-100 font-semibold mb-2">
                Associated Architectures & Methods
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeArea.modelsAndMethods.map((model, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* Datasets & Tooling */}
            <div className="pt-2 border-t border-stone-100 dark:border-stone-800">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold mb-2">
                Datasets & Experimental Tooling
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeArea.datasetsAndTools.map((tool, i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] px-2 py-0.5 rounded text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
