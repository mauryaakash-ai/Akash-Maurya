'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { profileData } from '@/data/profile';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '', subject: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${profileData.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry from ' + formState.name)}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline gap-3 mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
          <span className="font-mono text-xs font-semibold text-blue-700 dark:text-blue-400">
            10 /
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 uppercase font-mono">
              Contact & Verification Hub
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
              Direct communication channels for AI/ML engineering internships, research inquiries, and collaborations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 shadow-xs space-y-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-semibold">
                Direct Contact Channels
              </h3>

              {/* 1. WhatsApp Button (With WhatsApp Logo & Direct Link) */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  Instant Messaging:
                </span>
                <a
                  href="https://wa.me/918869973263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 hover:bg-emerald-100 dark:hover:bg-emerald-950/80 transition-all shadow-2xs group"
                >
                  <div className="flex items-center gap-3">
                    {/* WhatsApp Icon */}
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.075-2.038-.475-1.637-.67-2.678-2.34-2.76-2.45-.082-.109-.661-.881-.661-1.68 0-.799.418-1.192.567-1.353.149-.16.326-.2.435-.2.109 0 .218.001.313.006.1.006.234-.038.366.279.136.327.464 1.134.505 1.217.041.083.068.18.014.288-.055.109-.082.176-.164.272-.082.096-.172.215-.246.288-.082.08-.168.167-.072.332.096.164.425.702.912 1.135.628.558 1.157.731 1.32.813.164.082.259.072.355-.038.096-.109.41-.478.519-.642.109-.164.218-.137.366-.082.149.055.945.445 1.108.527.164.082.273.123.313.191.041.069.041.398-.103.803z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold leading-tight">Chat on WhatsApp</span>
                      <span className="text-[11px] text-emerald-700 dark:text-emerald-300 font-mono">
                        Direct Message • Fast Response
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* 2. Direct Email Button with Copy Option */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  Direct Email:
                </span>
                <div className="flex items-stretch rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-2xs overflow-hidden">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="flex-1 flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-mono text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="font-semibold break-all">{profileData.email}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(profileData.email)}
                    title="Copy email"
                    className="px-3 bg-stone-100 dark:bg-stone-800 border-l border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  <span>Current Base</span>
                </div>
                <div className="font-mono text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">
                  {profileData.location}
                </div>
              </div>

              {/* Social / Profiles */}
              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex flex-col gap-2 font-mono text-xs">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 dark:bg-stone-800/60 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 transition-colors border border-stone-200 dark:border-stone-700"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>github.com/{profileData.github}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>

                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 dark:bg-stone-800/60 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 transition-colors border border-stone-200 dark:border-stone-700"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span>linkedin.com/in/{profileData.linkedin}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Dispatch Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 sm:p-8 shadow-xs space-y-5">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-semibold mb-1">
                  Send Direct Inquiry
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 font-sans">
                  Whether discussing super-resolution models, research internships, or engineering projects, drop a note below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-stone-700 dark:text-stone-300">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Chen / Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-stone-700 dark:text-stone-300">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-stone-700 dark:text-stone-300">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI Engineering Internship / Research Inquiry"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-stone-700 dark:text-stone-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your project, team, or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-xs font-mono font-semibold hover:bg-stone-800 dark:hover:bg-white transition-all shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email Client</span>
                </button>

                {submitted && (
                  <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 mt-2">
                    ✓ Opening email client with formatted message...
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
