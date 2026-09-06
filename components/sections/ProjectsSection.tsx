'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Github, Layers, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';
import { projectsData, ProjectItem } from '@/data/projects';
import { ProjectDetailModal } from '../modals/ProjectDetailModal';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
          <span className="font-mono text-xs font-semibold text-blue-700 dark:text-blue-400">
            04 /
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 uppercase font-mono">
              Selected Engineering & Research Projects
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
              Deep learning evaluation, robotics hardware, unsupervised compression, and full-stack systems
            </p>
          </div>
        </div>

        {/* Projects 2x2 Grid with Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 shadow-xs hover:border-stone-400 dark:hover:border-stone-600 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header tags */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] text-stone-400">
                      // 0{index + 1}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
                    {project.dates}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-stone-950 dark:text-stone-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-mono">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Technical Abstract Diagram / Flow Spec */}
                <div className="p-3 rounded bg-stone-50 dark:bg-stone-950/70 border border-stone-200/70 dark:border-stone-800 text-xs font-mono space-y-1.5">
                  <div className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                    <Layers className="w-3 h-3 text-blue-500" />
                    <span>System Pipeline Architecture</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-700 dark:text-stone-300">
                    {project.diagramSpec.stages.map((stage, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="px-1.5 py-0.5 rounded bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                          {stage.label}
                        </span>
                        {sIdx < project.diagramSpec.stages.length - 1 && (
                          <span className="text-stone-400">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Bullet Contributions (Concise) */}
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300 pt-1">
                  {project.keyContributions.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 mt-5 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="font-mono text-[10px] px-1.5 py-0.5 text-stone-400">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-white transition-colors"
                  >
                    <span>View Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
