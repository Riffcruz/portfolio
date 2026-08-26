'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layout, Smartphone, Server, Award, Lock, Code2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories, certifications } = PORTFOLIO_DATA;

  const iconMap: Record<string, any> = {
    Layout: Layout,
    Smartphone: Smartphone,
    Server: Server,
    ShieldCheck: ShieldCheck,
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Full-Stack Tech Stack & <span className="text-emerald-400">Cybersecurity Certifications</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            6+ years of hands-on experience building, scaling, and securing enterprise digital assets.
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Code2;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className={`font-semibold flex items-center gap-1.5 ${skill.highlight ? 'text-emerald-300' : 'text-slate-300'}`}>
                          {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                        <div
                          className={`h-full rounded-full ${
                            skill.highlight
                              ? 'bg-gradient-to-r from-emerald-500 to-cyan-400 shadow-sm shadow-emerald-500/50'
                              : 'bg-slate-700'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cybersecurity Certifications Banner */}
        <div className="glass-card rounded-2xl p-8 border border-emerald-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950/40 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono border border-emerald-500/40">
                <Lock className="w-3.5 h-3.5" />
                <span>CYBERSECURITY CREDENTIALS</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Verified Security Certifications</h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Specialized training in penetration testing, vulnerability assessment, secure code auditing, and server hardening from industry partners & Smartweb Security.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex flex-col items-center text-center space-y-2"
                >
                  <Award className="w-6 h-6 text-emerald-400" />
                  <h4 className="text-xs font-bold text-white leading-tight">{cert.title}</h4>
                  <span className="text-[10px] font-mono text-slate-400">{cert.issuer}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    {cert.date}
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
