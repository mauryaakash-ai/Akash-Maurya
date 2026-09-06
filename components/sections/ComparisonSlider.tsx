'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles, Layers, RefreshCw, ZoomIn, Info } from 'lucide-react';

export function ComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-16 md:py-20 border-b border-stone-200 dark:border-stone-800 bg-paper-50/50 dark:bg-stone-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
          <span className="font-mono text-xs font-semibold text-blue-700 dark:text-blue-400">
            05 /
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 uppercase font-mono">
              Thermal SR Interactive Reconstruction
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
              Interactive split-view comparison illustrating low-resolution infrared sensor input vs. deep super-resolution reconstruction
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Slider Container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4 shadow-xs">
              {/* Top Sub-bar */}
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-semibold text-stone-900 dark:text-stone-100">
                    Interactive Comparison Slider
                  </span>
                </div>
                <span className="text-stone-500 dark:text-stone-400 text-[11px]">
                  Drag slider horizontally (Left: Input / Right: Reconstruction)
                </span>
              </div>

              {/* Slider Viewport Container */}
              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative w-full aspect-16/10 rounded-md overflow-hidden bg-stone-950 select-none cursor-ew-resize border border-stone-800"
              >
                {/* Background Layer: High Resolution Reconstructed Thermal Graphic (Full Width) */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-stone-950 via-slate-900 to-stone-900 flex items-center justify-center p-6">
                  {/* High Resolution Reconstructed Thermal SVG Pattern */}
                  <svg viewBox="0 0 400 250" className="w-full h-full">
                    <defs>
                      <radialGradient id="hr-thermal-core" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
                        <stop offset="25%" stopColor="#f97316" stopOpacity="0.8" />
                        <stop offset="55%" stopColor="#eab308" stopOpacity="0.7" />
                        <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.1" />
                      </radialGradient>
                      <radialGradient id="hr-thermal-sub" cx="30%" cy="40%" r="30%">
                        <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.85" />
                        <stop offset="40%" stopColor="#fb923c" stopOpacity="0.7" />
                        <stop offset="85%" stopColor="#0284c7" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                      </radialGradient>
                      <filter id="crisp-edges">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
                      </filter>
                    </defs>

                    {/* Smooth High-Definition Thermal Heat Map Contours */}
                    <rect width="400" height="250" fill="#09090b" />
                    <circle cx="200" cy="125" r="95" fill="url(#hr-thermal-core)" />
                    <circle cx="150" cy="100" r="50" fill="url(#hr-thermal-sub)" />

                    {/* Reconstructed Fine Structural Edges (High Frequency Details) */}
                    <path
                      d="M 120 70 Q 200 40 280 70 T 320 160 T 200 210 T 80 150 Z"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1.2"
                      strokeOpacity="0.75"
                      strokeDasharray="4 2"
                    />
                    <path
                      d="M 140 90 Q 200 65 260 90 T 290 150 T 200 185 T 110 140 Z"
                      fill="none"
                      stroke="#fde047"
                      strokeWidth="1"
                      strokeOpacity="0.9"
                    />
                    <path
                      d="M 160 110 Q 200 95 240 110 T 255 140 T 200 160 T 145 130 Z"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="1.2"
                      strokeOpacity="0.9"
                    />

                    {/* Fine Crosshairs & Grid Lines */}
                    <line x1="200" y1="20" x2="200" y2="230" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.4" />
                    <line x1="40" y1="125" x2="360" y2="125" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.4" />
                    <circle cx="200" cy="125" r="4" fill="#ffffff" />
                  </svg>
                </div>

                {/* Foreground Layer: Low Resolution Degraded Input (Clipped to slider position) */}
                <div
                  className="absolute inset-0 h-full overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="absolute inset-0 w-full h-full bg-stone-950 flex items-center justify-center p-6" style={{ width: containerRef.current?.clientWidth || '100%' }}>
                    {/* Pixelated/Downsampled Coarse Low-Res SVG Pattern */}
                    <svg viewBox="0 0 400 250" className="w-full h-full">
                      <rect width="400" height="250" fill="#09090b" />
                      {/* 16x10 coarse pixel blocks simulating low-resolution infrared sensor */}
                      {Array.from({ length: 10 }).map((_, row) =>
                        Array.from({ length: 16 }).map((_, col) => {
                          const cx = 8;
                          const cy = 5;
                          const dist = Math.sqrt(Math.pow(col - cx, 2) + Math.pow(row - cy, 2));
                          let color = '#0f172a';
                          if (dist < 2.5) color = '#dc2626';
                          else if (dist < 4.5) color = '#ea580c';
                          else if (dist < 6.5) color = '#d97706';
                          else if (dist < 8.5) color = '#1e3a8a';

                          return (
                            <rect
                              key={`${row}-${col}`}
                              x={col * 25}
                              y={row * 25}
                              width="24"
                              height="24"
                              fill={color}
                              fillOpacity="0.85"
                              stroke="#09090b"
                              strokeWidth="1"
                            />
                          );
                        })
                      )}
                      <line x1="200" y1="20" x2="200" y2="230" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="6 4" />
                      <line x1="40" y1="125" x2="360" y2="125" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="6 4" />
                    </svg>
                  </div>
                </div>

                {/* Vertical Divider Bar */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-stone-900 border-2 border-white text-white flex items-center justify-center shadow-md text-[10px] font-mono font-bold">
                    ⟷
                  </div>
                </div>

                {/* Floating Overlay Labels */}
                <div className="absolute top-3 left-3 bg-stone-900/90 text-stone-200 border border-stone-700 px-2.5 py-1 rounded text-[11px] font-mono">
                  [INPUT: Low-Res Infrared Sensor]
                </div>
                <div className="absolute top-3 right-3 bg-blue-950/90 text-blue-200 border border-blue-700 px-2.5 py-1 rounded text-[11px] font-mono">
                  [OUTPUT: Super-Resolution Model]
                </div>
              </div>

              {/* Slider Slider Position Control Helper */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-stone-400">
                <span>← 0% (Full LR)</span>
                <span>Split Ratio: {Math.round(sliderPosition)}%</span>
                <span>100% (Full HR) →</span>
              </div>
            </div>
          </div>

          {/* Right Column: Research Context & Technical Details (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-semibold font-mono text-xs uppercase tracking-wider">
                <Info className="w-4 h-4 text-blue-600" />
                <span>Thermal SR Experimentation Rationale</span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                Thermal sensors suffer from low spatial resolution due to hardware detector pitch limits. In this research, deep CNN and Vision Transformer models (EDSR, SwinIR, HAT) are trained to recover continuous thermal gradients and high-frequency edge contours.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-stone-100 dark:border-stone-800 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800">
                  <span className="text-stone-500 dark:text-stone-400">Degradation:</span>
                  <span className="text-stone-900 dark:text-stone-100 font-medium">Bicubic / Gaussian Sensor Blur</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800">
                  <span className="text-stone-500 dark:text-stone-400">Upscaling Factor:</span>
                  <span className="text-stone-900 dark:text-stone-100 font-medium">4× Sub-Pixel Feature Recovery</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800">
                  <span className="text-stone-500 dark:text-stone-400">Evaluation Metrics:</span>
                  <span className="text-stone-900 dark:text-stone-100 font-medium">PSNR (dB) & SSIM Index</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500 dark:text-stone-400">Key Backbones:</span>
                  <span className="text-stone-900 dark:text-stone-100 font-medium">EDSR, SwinIR, HAT</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 text-[11px] font-mono text-stone-600 dark:text-stone-400 leading-normal">
              * Note: The comparison visualization above serves as an illustrative interactive demonstration of thermal super-resolution reconstruction principles evaluated during the Thermal Image Super-Resolution Research project.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
