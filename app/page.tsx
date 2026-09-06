import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Layers, Briefcase, Code, BarChart3, GraduationCap, Award, Mail, Cpu } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/hero/Hero';

const directorySections = [
  {
    number: '01',
    title: 'About & Research Profile',
    href: '/about',
    desc: 'Academic background at Bennett University, laboratory focus, and research methodology in computer vision.',
    icon: <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    tag: 'Profile & Background'
  },
  {
    number: '02',
    title: 'Research & Technical Interests',
    href: '/research',
    desc: 'Deep exploration of Image Super-Resolution, Self-Supervised Learning (SimCLR), Biometrics, and Robotics.',
    icon: <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    tag: '5 Research Areas'
  },
  {
    number: '03',
    title: 'Experience & Leadership',
    href: '/experience',
    desc: 'Summer research at ViSecure Systems, Simons Fellowship at Ashoka University (Prof. Anurag Agrawal), and RoboGenesis Club.',
    icon: <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    tag: 'Research Internships'
  },
  {
    number: '04',
    title: 'Selected Engineering Projects',
    href: '/projects',
    desc: 'Thermal SR research, autonomous line-following RC car with PID control, ImageLab K-Means compressor, and KrishiShram.',
    icon: <Code className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    tag: '4 Case Studies'
  },
  {
    number: '05',
    title: 'Benchmarking & Interactive Demo',
    href: '/benchmarks',
    desc: 'Interactive low-res vs high-res Thermal SR comparison slider and 10+ architecture evaluation framework (PSNR/SSIM).',
    icon: <BarChart3 className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
    tag: 'Interactive Slider'
  },
  {
    number: '06',
    title: 'Technical Skills & Competencies',
    href: '/skills',
    desc: 'Categorized technical inventory of languages (Python, C/C++), PyTorch, OpenCV, neural architectures, and edge platforms.',
    icon: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    tag: 'Full Stack AI'
  },
  {
    number: '07',
    title: 'Academic Education Record',
    href: '/education',
    desc: 'B.Tech in Artificial Intelligence at Bennett University (CGPA: 8.71/10) and secondary school academic records.',
    icon: <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    tag: 'CGPA 8.71 / 10'
  },
  {
    number: '08',
    title: 'Awards & Certifications',
    href: '/certifications',
    desc: 'INSPIRE Scholarship (DST), Academic Silver Medal (Top 10), and certifications from Google AI & DeepLearning.AI.',
    icon: <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    tag: 'Merit Honors'
  },
  {
    number: '09',
    title: 'Contact & Verification Hub',
    href: '/contact',
    desc: 'Direct email, WhatsApp messaging, phone channel, verified GitHub, and inquiry dispatcher form.',
    icon: <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    tag: 'Direct Messaging'
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Main Hero Section */}
        <Hero />

        {/* Dedicated Pages Navigation Grid (Clean Portfolio Directory) */}
        <section className="py-14 md:py-18 bg-paper-50/60 dark:bg-stone-950/40 border-b border-stone-200 dark:border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-stone-200 dark:border-stone-800">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-950 dark:text-stone-50 font-mono uppercase">
                  Portfolio Directory & Navigation
                </h2>
                <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                  Select a section below to explore detailed case studies, research logs, and technical benchmarks
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {directorySections.map((sec) => (
                <Link
                  key={sec.href}
                  href={sec.href}
                  className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 shadow-2xs hover:border-blue-600 dark:hover:border-blue-500 transition-all flex flex-col justify-between space-y-4 hover:shadow-xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/60 transition-colors">
                        {sec.icon}
                      </div>
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                        {sec.tag}
                      </span>
                    </div>

                    <div>
                      <div className="font-mono text-xs text-stone-400 mb-1">
                        Section // {sec.number}
                      </div>
                      <h3 className="text-base font-bold text-stone-950 dark:text-stone-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {sec.title}
                      </h3>
                    </div>

                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                      {sec.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-mono text-stone-600 dark:text-stone-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-semibold">
                    <span>Open Section</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
