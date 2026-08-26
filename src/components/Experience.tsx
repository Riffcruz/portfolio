'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Career background & engineering leadership.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="clean-card p-6 rounded-xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-sm font-semibold text-emerald-400">{exp.company}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.stack.map((item, sIdx) => (
                  <span key={sIdx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
