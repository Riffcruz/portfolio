'use client';

import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUp, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080b12] border-t border-slate-800 text-slate-400 text-xs py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
              <Code2 className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-sm font-bold text-white tracking-tight">SNOWTECH</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-slate-300 font-mono text-xs">
            <a href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`} className="hover:text-emerald-400 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PORTFOLIO_DATA.personalInfo.phone}</span>
            </a>
            <a href={PORTFOLIO_DATA.personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sangotedo, Lagos Island</span>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-emerald-400 flex items-center gap-1 font-mono text-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-4 border-t border-slate-900 text-center sm:text-left text-slate-500 font-mono text-[11px]">
          © {new Date().getFullYear()} Akor Anthony Makuochukwu (Snowtech). All rights reserved.
        </div>
      </div>
    </footer>
  );
};
