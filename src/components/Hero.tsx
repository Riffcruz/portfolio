'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone, MessageSquare, ExternalLink, ArrowRight, MapPin, Award, Terminal, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Hero: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-bg min-h-[90vh] flex items-center">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono mb-6 shadow-lg shadow-emerald-950/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 absolute" />
              <span className="ml-2 font-medium">AVAILABLE FOR NEW PROJECTS & CONSULTING</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-4">
              <span className="block text-2xl sm:text-3xl font-mono text-cyan-400 font-medium mb-2">Akor Anthony Makuochukwu</span>
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 glow-text-emerald">Reactive Apps</span>, Web Platforms & Security.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-light">
              Known in tech as <strong className="text-white font-mono text-emerald-400">Snowtech</strong>. Senior Full-Stack & Mobile App Developer with <span className="text-emerald-400 font-semibold">6+ years of experience</span>. CTO at <span className="text-emerald-400 font-medium">TallyPadi</span> & former engineer at <span className="text-cyan-400 font-medium">Smartweb Security</span>.
            </p>

            {/* Location & Experience Badges */}
            <div className="flex flex-wrap gap-3 mb-8 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>6+ Years Active Experience</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cybersecurity Certified</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-200"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-emerald-400 border border-emerald-500/40 text-sm font-semibold hover:border-emerald-400 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ({personalInfo.phone})</span>
              </a>
            </div>

          </motion.div>

          {/* Right Visual Photo & Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-30 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Profile Image Box */}
              <div className="glass-card rounded-3xl overflow-hidden p-2.5 border border-slate-700/80 shadow-2xl relative">
                <div className="relative h-[440px] sm:h-[480px] w-full rounded-2xl overflow-hidden group">
                  <img
                    src="/profile.jpg"
                    alt="Akor Anthony Makuochukwu (Snowtech)"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono backdrop-blur-md">
                      @Snowtech
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono backdrop-blur-md flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" /> CTO @ TallyPadi
                    </span>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white font-mono">Akor Anthony Makuochukwu</h3>
                      <span className="text-emerald-400 text-xs font-mono font-bold">6+ Yrs Exp</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Senior Full-Stack & App Developer • Cybersecurity Specialist • Lagos, Nigeria
                    </p>
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Phone: 09045382250</span>
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
            <div key={idx} className="glass-card p-4 rounded-xl text-center border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
