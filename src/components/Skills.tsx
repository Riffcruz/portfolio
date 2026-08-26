'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ShieldCheck, Award } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills, certifications } = PORTFOLIO_DATA;

  return (
    <section className="py-16 bg-[#0c101a] border-t border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills & Certifications
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Technologies and security credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {skills.map((group, idx) => (
            <div key={idx} className="clean-card p-5 rounded-xl space-y-3">
              <h3 className="text-base font-bold text-white">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Box */}
        <div className="clean-card p-6 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Award className="w-5 h-5" />
            <span>Cybersecurity Certifications</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 font-medium">
                {cert}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
