'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layout, Smartphone, Server, Award, Lock, Code2, CheckCircle2, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Skills: React.FC = () => {
  const { skillGroups, certifications } = PORTFOLIO_DATA;

  const iconMap: Record<string, any> = {
    Layout: Layout,
    Smartphone: Smartphone,
    Server: Server,
    ShieldCheck: ShieldCheck,
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CORE ARCHITECTURE MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Production Stack & <span className="text-emerald-400">Cybersecurity Defense</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-light">
            Architectural patterns, frameworks, and security hardening methodologies mastered across 6+ years of active production.
          </p>
        </div>

        {/* Technical Architecture Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillGroups.map((group, idx) => {
            const Icon = iconMap[group.iconName] || Code2;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bespoke-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{group.category}</h3>
                      <p className="text-xs text-slate-400 font-mono">{group.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-white font-mono flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {item.name}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-light pl-3.5">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cybersecurity Certifications Banner */}
        <div className="bespoke-card rounded-3xl p-8 border border-emerald-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950/40 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono border border-emerald-500/40">
                <Lock className="w-3.5 h-3.5" />
                <span>CYBERSECURITY CREDENTIALS</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Verified Security Certifications</h3>
              <p className="text-slate-300 text-sm max-w-xl font-light">
                Specialized training in penetration testing, vulnerability assessment, secure code auditing, and server hardening from Smartweb Security.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-2xl bg-slate-900 border border-emerald-500/30 flex flex-col items-center text-center space-y-2"
                >
                  <Award className="w-6 h-6 text-emerald-400" />
                  <h4 className="text-xs font-bold text-white leading-tight font-mono">{cert.title}</h4>
                  <span className="text-[10px] font-mono text-slate-400">{cert.issuer}</span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    {cert.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
