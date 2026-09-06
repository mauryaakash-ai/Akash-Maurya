'use client';

import React from 'react';
import Image from 'next/image';
import { Microscope, Code2, Cpu, CheckCircle2, Award, Terminal, User, MapPin } from 'lucide-react';
import { profileData } from '@/data/profile';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
          <span className="font-mono text-xs font-semibold text-blue-700 dark:text-blue-400">
            01 /
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 uppercase font-mono">
            About & Research Profile
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Prominent Profile Photo Card */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none rounded-xl overflow-hidden border-2 border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-900 shadow-md">
              <Image
                src="/profile.jpg"
                alt="Akash Maurya - AI/ML Engineer"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 bg-stone-950/90 backdrop-blur-xs text-stone-100 p-3 rounded-lg border border-stone-800 text-xs font-mono space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">{profileData.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-600 text-white font-semibold">AI/ML</span>
                </div>
                <div className="text-[11px] text-stone-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 text-xs font-mono space-y-2 shadow-2xs">
              <div className="text-stone-900 dark:text-stone-100 font-semibold flex items-center gap-1.5">
                <Microscope className="w-4 h-4 text-blue-600" />
                <span>Primary Lab Focus</span>
              </div>
              <p className="text-stone-600 dark:text-stone-400 font-sans text-xs leading-relaxed">
                Super-resolution reconstruction, self-supervised representations with SimCLR, and low-latency robotics.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4 text-base text-stone-700 dark:text-stone-300 leading-relaxed">
              <p className="text-lg font-medium text-stone-950 dark:text-stone-100 leading-snug">
                I am an AI/ML undergraduate researcher specializing in computer vision, deep neural networks, and image super-resolution, driven by experimental rigor and production-grade implementation.
              </p>
              <p>
                My work spans designing, training, and benchmarking both convolutional (EDSR, VDSR, ESRGAN) and vision transformer architectures (SwinIR, HAT, DRCT) across diverse optical, infrared, and domain-specific datasets. Through summer research at ViSecure Systems and biometric research at Ashoka University under the Simons Fellowship Program, I have focused on solving concrete computer vision challenges: mitigating sensor degradation, specular reflection artifacts, and labeled data scarcity.
              </p>
              <p>
                Beyond algorithmic modeling in PyTorch and OpenCV, I build physical and web-based systems — from PID-controlled autonomous RC vehicles to full-stack management applications with Flask and SQLite.
              </p>
            </div>

            {/* Research & Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-800 dark:text-stone-200">
                  <Microscope className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xs font-mono uppercase tracking-wider text-stone-900 dark:text-stone-100">
                  Model Architecture
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                  Analysis of receptive fields, residual scaling, and self-attention in SwinIR and HAT.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-800 dark:text-stone-200">
                  <Code2 className="w-4 h-4 text-purple-600" />
                </div>
                <h3 className="font-semibold text-xs font-mono uppercase tracking-wider text-stone-900 dark:text-stone-100">
                  Quantitative Eval
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                  Rigorous benchmarking with PSNR, SSIM, and contrastive loss across standard datasets.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-800 dark:text-stone-200">
                  <Cpu className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-xs font-mono uppercase tracking-wider text-stone-900 dark:text-stone-100">
                  Applied Systems
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                  Translating algorithms into functional embedded systems (ESP32/Arduino) and web APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
