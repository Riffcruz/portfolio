'use client';

import React from 'react';
import { Terminal, Phone, MessageSquare, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 text-slate-400 text-xs py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-emerald-500/20">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight font-mono">SNOWTECH</span>
              <span className="text-[11px] block font-mono text-emerald-400">Chief Technology Officer • Full-Stack & Mobile Architect</span>
            </div>
          </div>

          {/* Contact Details Quick Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-mono text-xs">
            <a href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`} className="hover:text-emerald-400 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PORTFOLIO_DATA.personalInfo.phone}</span>
            </a>
            <a href={PORTFOLIO_DATA.personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sangotedo, Lagos Island</span>
            </span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-emerald-400 flex items-center gap-1.5 font-mono text-xs transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 font-mono text-[11px]">
          <span>© {new Date().getFullYear()} Akor Anthony Makuochukwu (Snowtech). All rights reserved.</span>
          <span className="mt-2 sm:mt-0 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Built with Next.js 14, React, TypeScript & Tailwind CSS</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
