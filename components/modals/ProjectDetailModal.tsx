'use client';

import React, { useEffect } from 'react';
import { X, Github, ArrowUpRight, CheckCircle2, Cpu, Wrench, Lightbulb, TrendingUp, Layers } from 'lucide-react';
import { ProjectItem } from '@/data/projects';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-start justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                {project.category}
              </span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                {project.teamType}
              </span>
              <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
                {project.dates}
              </span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-stone-950 dark:text-stone-50">
              {project.title}
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pipeline Architecture Diagram Spec */}
        <div className="bg-stone-50 dark:bg-stone-950/80 border border-stone-200 dark:border-stone-800 rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <h3 className="font-mono text-xs font-semibold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
              {project.diagramSpec.title}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 pt-1">
            {project.diagramSpec.stages.map((stage, sIdx) => (
              <div
                key={sIdx}
                className="p-2.5 rounded bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-stone-400">0{sIdx + 1}</span>
                  {stage.tag && (
                    <span className="font-mono text-[9px] px-1.5 py-0.2 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded">
                      {stage.tag}
                    </span>
                  )}
                </div>
                <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                  {stage.label}
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">
                  {stage.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2 p-4 rounded-lg bg-stone-50/60 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800">
            <h4 className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-semibold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-stone-500" />
              <span>Problem Statement</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-lg bg-stone-50/60 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800">
            <h4 className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-semibold flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-stone-500" />
              <span>Methodology & Approach</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Key Contributions */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-semibold mb-2.5">
            Key Engineering Work & Contributions
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
            {project.keyContributions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Results & Metrics */}
        <div className="p-4 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-semibold flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            <span>Demonstrated Results (Per CV Record)</span>
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
            {project.results.map((res, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What I Learned */}
        <div className="p-4 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 space-y-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-blue-900 dark:text-blue-300 font-semibold flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
            <span>Engineering Takeaways & Learnings</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
            {project.learnings.map((learn, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-mono text-blue-600 dark:text-blue-400">›</span>
                <span>{learn}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack & Links */}
        <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="font-mono text-xs px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono font-medium bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
