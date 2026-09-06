'use client';

import React, { useState, useEffect } from 'react';
import { RefreshCw, ZoomIn, Layers, Zap } from 'lucide-react';

export function SuperResolutionGrid() {
  const [scaleStep, setScaleStep] = useState<1 | 2 | 4>(4);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeKernel, setActiveKernel] = useState({ x: 2, y: 2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKernel(prev => ({
        x: (prev.x + 1) % 4,
        y: (prev.y + (prev.x === 3 ? 1 : 0)) % 4
      }));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleToggleScale = (scale: 1 | 2 | 4) => {
    setIsProcessing(true);
    setScaleStep(scale);
    setTimeout(() => setIsProcessing(false), 250);
  };

  // 8x8 base matrix representing high frequency feature patch
  const baseMatrix = [
    [0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 0.9, 1.0],
    [0.1, 0.2, 0.4, 0.6, 0.8, 0.9, 0.8, 0.6],
    [0.2, 0.3, 0.7, 0.9, 0.8, 0.5, 0.3, 0.2],
    [0.3, 0.5, 0.9, 0.8, 0.4, 0.2, 0.2, 0.3],
    [0.4, 0.7, 0.8, 0.4, 0.2, 0.3, 0.5, 0.7],
    [0.6, 0.9, 0.5, 0.2, 0.3, 0.6, 0.8, 0.9],
    [0.8, 0.8, 0.3, 0.2, 0.5, 0.8, 0.9, 0.8],
    [1.0, 0.7, 0.2, 0.3, 0.7, 0.9, 0.8, 0.5],
  ];

  return (
    <div className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-xs flex flex-col gap-4">
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-mono text-xs font-semibold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
            Super-Resolution Reconstruction Graphic
          </span>
        </div>
        <span className="font-mono text-[11px] text-stone-500 dark:text-stone-400">
          Scale: {scaleStep === 1 ? '1x (LR Input)' : scaleStep === 2 ? '2x (Sub-Pixel)' : '4x (HR Target)'}
        </span>
      </div>

      {/* Grid Canvas Visual */}
      <div className="relative bg-stone-950 rounded-md p-4 flex flex-col items-center justify-center overflow-hidden min-h-[220px]">
        {/* Subtle coordinate ticks */}
        <div className="absolute top-2 left-2 font-mono text-[9px] text-stone-500">
          TENSOR [B, C, H, W]
        </div>
        <div className="absolute top-2 right-2 font-mono text-[9px] text-stone-500">
          {scaleStep === 1 ? '8×8 (64 px)' : scaleStep === 2 ? '16×16 (256 px)' : '32×32 (1024 px)'}
        </div>

        {/* Dynamic SVG Pixel Matrix */}
        <svg
          viewBox="0 0 160 160"
          className="w-40 h-40 transition-all duration-300 transform"
        >
          <defs>
            <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#262626" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="160" height="160" fill="#0c0a09" />
          <rect width="160" height="160" fill="url(#grid-pattern)" />

          {/* Render Pixel Grid according to scale step */}
          {baseMatrix.map((row, rIdx) =>
            row.map((val, cIdx) => {
              const cellSize = 160 / 8;
              const x = cIdx * cellSize;
              const y = rIdx * cellSize;

              if (scaleStep === 1) {
                // Coarse 8x8
                const brightness = Math.round(val * 255);
                return (
                  <rect
                    key={`${rIdx}-${cIdx}`}
                    x={x + 1}
                    y={y + 1}
                    width={cellSize - 2}
                    height={cellSize - 2}
                    fill={`rgb(${brightness}, ${brightness}, ${brightness})`}
                    rx="1"
                  />
                );
              } else if (scaleStep === 2) {
                // 2x Sub-pixel interpolation
                const subSize = cellSize / 2;
                return [0, 1].map((subR) =>
                  [0, 1].map((subC) => {
                    const interpolated = Math.min(
                      1,
                      Math.max(0, val + (subR * 0.1 - 0.05) + (subC * 0.1 - 0.05))
                    );
                    const b = Math.round(interpolated * 255);
                    return (
                      <rect
                        key={`${rIdx}-${cIdx}-${subR}-${subC}`}
                        x={x + subC * subSize + 0.5}
                        y={y + subR * subSize + 0.5}
                        width={subSize - 1}
                        height={subSize - 1}
                        fill={`rgb(${b}, ${b}, ${b})`}
                        rx="0.5"
                      />
                    );
                  })
                );
              } else {
                // 4x High Resolution Reconstruction
                const subSize = cellSize / 4;
                return [0, 1, 2, 3].map((subR) =>
                  [0, 1, 2, 3].map((subC) => {
                    // Continuous edge simulation
                    const distFromDiag = Math.abs((rIdx * 4 + subR) - (cIdx * 4 + subC)) / 32;
                    const bVal = Math.max(0.1, 1 - distFromDiag * 1.6);
                    const b = Math.round(bVal * 255);
                    return (
                      <rect
                        key={`${rIdx}-${cIdx}-${subR}-${subC}`}
                        x={x + subC * subSize + 0.25}
                        y={y + subR * subSize + 0.25}
                        width={subSize - 0.5}
                        height={subSize - 0.5}
                        fill={`rgb(${b}, ${b}, ${b})`}
                      />
                    );
                  })
                );
              }
            })
          )}

          {/* Active Convolution Kernel Indicator */}
          <rect
            x={activeKernel.x * 40}
            y={activeKernel.y * 40}
            width="40"
            height="40"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeDasharray="3 2"
            className="transition-all duration-700 ease-in-out"
          />
        </svg>

        {/* Processing overlay tag */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1.5 font-mono text-[10px] text-stone-400 bg-stone-900/90 px-2 py-0.5 rounded border border-stone-800">
          <Layers className="w-3 h-3 text-blue-400" />
          <span>Kernel 3×3 Receptive Field</span>
        </div>
      </div>

      {/* Resolution Stepper Controls */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => handleToggleScale(1)}
          className={`px-2.5 py-1.5 rounded text-xs font-mono text-center border transition-all ${
            scaleStep === 1
              ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 border-transparent font-semibold shadow-xs'
              : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400'
          }`}
        >
          1× Low Res
        </button>
        <button
          onClick={() => handleToggleScale(2)}
          className={`px-2.5 py-1.5 rounded text-xs font-mono text-center border transition-all ${
            scaleStep === 2
              ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 border-transparent font-semibold shadow-xs'
              : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400'
          }`}
        >
          2× Sub-Pixel
        </button>
        <button
          onClick={() => handleToggleScale(4)}
          className={`px-2.5 py-1.5 rounded text-xs font-mono text-center border transition-all ${
            scaleStep === 4
              ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 border-transparent font-semibold shadow-xs'
              : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400'
          }`}
        >
          4× High Res
        </button>
      </div>

      <div className="text-[11px] font-mono text-stone-500 dark:text-stone-400 leading-tight">
        * Interactive visual schematic demonstrating discrete sub-pixel feature recovery across deep residual layers (EDSR/HAT).
      </div>
    </div>
  );
}
