'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone, MessageSquare, ExternalLink, ArrowRight, MapPin, Award, Terminal, Code2, Sparkles, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Hero: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden ambient-spotlight editorial-grid min-h-[92vh] flex items-center">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold tracking-wide">CTO @ TALLYPADI • 6+ YEARS EXPERIENCE</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                Full-Stack & Mobile Architect • Cybersecurity Specialist
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                Akor Anthony <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-glow-emerald">
                  Makuochukwu
                </span>
                <span className="text-emerald-400 font-mono text-2xl sm:text-3xl ml-3 font-normal opacity-90">(Snowtech)</span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-2xl">
              Building sub-second web platforms, cross-platform mobile apps for iOS & Android, and hardened cyber architecture. Driving technical innovation as <strong className="text-white font-normal">CTO at TallyPadi</strong> & former engineer at <strong className="text-cyan-400 font-normal">Smartweb Security</strong>.
            </p>

            {/* Location & Experience Badges */}
            <div className="flex flex-wrap gap-2.5 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Cybersecurity Certified</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-mono font-bold text-xs tracking-wider uppercase shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.02] transition-all"
              >
                <span>Explore Featured Deploys</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-semibold transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ({personalInfo.phone})</span>
              </a>
            </div>

          </motion.div>

          {/* Right Visual Editorial Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-25 blur-2xl pointer-events-none" />

              {/* Profile Card Container */}
              <div className="bespoke-card rounded-3xl overflow-hidden p-3 relative border border-slate-700/80 shadow-2xl">
                <div className="relative h-[460px] sm:h-[500px] w-full rounded-2xl overflow-hidden group">
                  <img
                    src="/profile.jpg"
                    alt="Akor Anthony Makuochukwu (Snowtech)"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-slate-950/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono backdrop-blur-md">
                      @Snowtech
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-slate-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono backdrop-blur-md flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" /> CTO @ TallyPadi
                    </span>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white font-mono">Akor Anthony Makuochukwu</h3>
                      <span className="text-emerald-400 text-xs font-mono font-bold">6+ Yrs Exp</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 pt-1 border-t border-slate-800/80">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-emerald-400" />
                        09045382250
                      </span>
                      <a
                        href="https://tallypadi.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline flex items-center gap-1"
                      >
                        tallypadi.com <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Metric Counter Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="bespoke-card p-5 rounded-2xl text-center">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-mono mb-1">
                {stat.number}
              </div>
              <div className="text-xs text-slate-400 font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
