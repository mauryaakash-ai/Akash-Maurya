'use client';

import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { profileData } from '@/data/profile';

interface ContactButtonsProps {
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  className?: string;
}

export function ContactButtons({ size = 'md', showLabels = true, className = '' }: ContactButtonsProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* Email Button Group */}
      <div className="inline-flex items-stretch rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-2xs hover:border-blue-600 dark:hover:border-blue-500 transition-all overflow-hidden">
        <a
          href={`mailto:${profileData.email}`}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors focus:outline-none"
          title={`Send email to ${profileData.email}`}
        >
          <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
          <div className="flex flex-col text-left">
            {showLabels && <span className="text-[10px] text-stone-500 dark:text-stone-400 font-sans leading-none">Email Button</span>}
            <span className="font-semibold leading-tight">{profileData.email}</span>
          </div>
        </a>
        <button
          onClick={() => copyToClipboard(profileData.email, 'email')}
          aria-label="Copy email address"
          title="Copy email to clipboard"
          className="px-2.5 bg-stone-100 dark:bg-stone-800 border-l border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors flex items-center justify-center"
        >
          {copiedEmail ? (
            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Phone Button Group */}
      <div className="inline-flex items-stretch rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-2xs hover:border-emerald-600 dark:hover:border-emerald-500 transition-all overflow-hidden">
        <a
          href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors focus:outline-none"
          title={`Call ${profileData.phone}`}
        >
          <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <div className="flex flex-col text-left">
            {showLabels && <span className="text-[10px] text-stone-500 dark:text-stone-400 font-sans leading-none">Phone / WhatsApp Button</span>}
            <span className="font-semibold leading-tight">{profileData.phone}</span>
          </div>
        </a>
        <button
          onClick={() => copyToClipboard(profileData.phone, 'phone')}
          aria-label="Copy phone number"
          title="Copy phone number to clipboard"
          className="px-2.5 bg-stone-100 dark:bg-stone-800 border-l border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors flex items-center justify-center"
        >
          {copiedPhone ? (
            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
