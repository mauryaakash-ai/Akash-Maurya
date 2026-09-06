'use client';

import React from 'react';
import { Terminal, Cpu, Database, Award, CheckCircle2 } from 'lucide-react';
import { profileData } from '@/data/profile';

export function ResearchConsole() {
  return (
    <div className="w-full bg-stone-50 dark:bg-stone-900/90 border border-stone-200 dark:border-stone-800 rounded-lg p-5 font-mono text-xs shadow-xs">
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-stone-600 dark:text-stone-300" />
          <span className="font-semibold text-stone-900 dark:text-stone-100 tracking-wider text-[11px] uppercase">
            Technical Research Console
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/80">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
          <span>Status: Verified CV Record</span>
        </div>
      </div>

      <div className="space-y-3 text-stone-700 dark:text-stone-300">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-stone-200/60 dark:border-stone-800/60">
          <span className="text-stone-500 dark:text-stone-400 text-[11px]">Primary Domain:</span>
          <span className="text-stone-900 dark:text-stone-100 font-medium">
            Image Super-Resolution & Computer Vision
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-stone-200/60 dark:border-stone-800/60">
          <span className="text-stone-500 dark:text-stone-400 text-[11px]">Institution & Degree:</span>
          <span className="text-stone-900 dark:text-stone-100 font-medium">
            Bennett Univ. • B.Tech AI (CGPA 8.71)
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-stone-200/60 dark:border-stone-800/60">
          <span className="text-stone-500 dark:text-stone-400 text-[11px]">Internship Research:</span>
          <span className="text-stone-900 dark:text-stone-100 font-medium">
            ViSecure Systems • Ashoka Univ. (Simons Fellow)
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-stone-200/60 dark:border-stone-800/60">
          <span className="text-stone-500 dark:text-stone-400 text-[11px]">Core Architectures:</span>
          <span className="text-stone-800 dark:text-stone-200">
            EDSR, SwinIR, HAT, Real-ESRGAN, SimCLR
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <span className="text-stone-500 dark:text-stone-400 text-[11px]">Core Frameworks:</span>
          <span className="text-stone-800 dark:text-stone-200">
            PyTorch, OpenCV, Flask, C/C++, Linux
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-[10px] text-stone-500 dark:text-stone-400">
        <span>Location: Greater Noida, UP</span>
        <span>Expected: May 2028</span>
      </div>
    </div>
  );
}
