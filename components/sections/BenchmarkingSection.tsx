'use client';

import React, { useState } from 'react';
import { Database, BarChart3, Binary, Layers, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { benchmarkArchitectures, benchmarkDatasets, evaluationMetrics } from '@/data/benchmarks';

export function BenchmarkingSection() {
  const [activeTab, setActiveTab] = useState<'architectures' | 'datasets' | 'metrics'>('architectures');

  return (
    <section id="benchmarks" className="py-16 md:py-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
          <span className="font-mono text-xs font-semibold text-blue-700 dark:text-blue-400">
            06 /
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 uppercase font-mono">
              Benchmarking & Experimental Framework
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
              Rigorous evaluation taxonomy across deep super-resolution backbones, domain datasets, and quantitative metrics
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 dark:border-stone-800 mb-8 space-x-2">
          <button
            onClick={() => setActiveTab('architectures')}
            className={`pb-3 px-4 font-mono text-xs uppercase tracking-wider font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'architectures'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                : 'border-transparent text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            01. Model Architectures (10+)
          </button>
          <button
            onClick={() => setActiveTab('datasets')}
            className={`pb-3 px-4 font-mono text-xs uppercase tracking-wider font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'datasets'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                : 'border-transparent text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            02. Benchmark Datasets
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`pb-3 px-4 font-mono text-xs uppercase tracking-wider font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'metrics'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                : 'border-transparent text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            03. Evaluation Metrics
          </button>
        </div>

        {/* Tab 1: Architectures */}
        {activeTab === 'architectures' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benchmarkArchitectures.map((arch, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-xs flex flex-col justify-between space-y-3 hover:border-stone-400 dark:hover:border-stone-600 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-stone-950 dark:text-stone-50">
                      {arch.name}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                      {arch.family}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    {arch.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-stone-800 text-[11px] font-mono text-stone-500 dark:text-stone-400">
                  <span className="text-stone-900 dark:text-stone-100 font-semibold">Focus: </span>
                  {arch.keyTraits}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Datasets */}
        {activeTab === 'datasets' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benchmarkDatasets.map((dataset, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-stone-950 dark:text-stone-50 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-blue-600" />
                      {dataset.name}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                      {dataset.type}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-blue-700 dark:text-blue-400 mb-2">
                    {dataset.domain}
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    {dataset.roleInResearch}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Metrics */}
        {activeTab === 'metrics' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {evaluationMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
                  <span className="font-mono text-base font-bold text-stone-950 dark:text-stone-50">
                    {metric.metric}
                  </span>
                  <Activity className="w-4 h-4 text-blue-600" />
                </div>
                <div className="font-mono text-xs font-semibold text-stone-800 dark:text-stone-200">
                  {metric.fullName}
                </div>
                <div className="text-xs text-blue-700 dark:text-blue-400 font-mono">
                  Target: {metric.focus}
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  {metric.interpretation}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 p-4 rounded-lg bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 text-xs font-mono text-stone-600 dark:text-stone-400 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong>Experimental Discipline:</strong> All architectures and datasets reflect verified research environments executed across PyTorch research repositories and benchmark pipelines.
          </span>
        </div>
      </div>
    </section>
  );
}
