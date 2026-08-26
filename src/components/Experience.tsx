'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 relative cyber-bg border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-emerald-400">Leadership History</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            6+ years of driving growth, leading tech teams, and engineering mission-critical software.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative space-y-8">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-slate-800 -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Left Column (or Right alternate) */}
              <div className={`space-y-3 ${idx % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-base font-semibold text-emerald-400 flex items-center gap-2 justify-start md:justify-end">
                  {idx % 2 === 0 ? (
                    <>
                      <span className="hidden md:inline">{exp.company}</span>
                      <span className="md:hidden text-emerald-400 font-bold">{exp.company}</span>
                    </>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                </h4>
                <div className="flex items-center gap-1 text-xs text-slate-400 font-mono justify-start md:justify-end">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Center Timeline Node Marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* Right Box (or Left alternate) */}
              <div className={`glass-card p-6 rounded-2xl border border-slate-800 space-y-4 ${idx % 2 === 0 ? 'md:order-2' : ''}`}>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{exp.description}</p>
                
                <div className="space-y-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-cyan-300 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
