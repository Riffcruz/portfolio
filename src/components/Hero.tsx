'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone, MessageSquare, ExternalLink, ArrowRight, MapPin, Award } from 'lucide-react';
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
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 glow-text-emerald">Reactive Apps</span>, Web Platforms & Secure Systems.
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

          {/* Right Visual Interactive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glass Box */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative z-10 border border-slate-800/80 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">snowtech_profile.config.ts</span>
              </div>

              {/* Code Snippet Display */}
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div>
                  <span className="text-purple-400">const</span> <span className="text-cyan-300">engineer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div><span className="text-emerald-400">fullName:</span> <span className="text-slate-300">"Akor Anthony Makuochukwu"</span>,</div>
                  <div><span className="text-emerald-400">brandAlias:</span> <span className="text-amber-300">"Snowtech"</span>,</div>
                  <div><span className="text-emerald-400">role:</span> <span className="text-slate-300">"CTO @ TallyPadi & Full-Stack Engineer"</span>,</div>
                  <div><span className="text-emerald-400">experience:</span> <span className="text-amber-300">"6+ Years"</span>,</div>
                  <div><span className="text-emerald-400">location:</span> <span className="text-slate-300">"Sangotedo, Lagos Island, Nigeria"</span>,</div>
                  <div><span className="text-emerald-400">specialization:</span> [<span className="text-cyan-300">"Mobile Apps"</span>, <span className="text-cyan-300">"Web Dev"</span>, <span className="text-cyan-300">"Cybersecurity"</span>],</div>
                  <div><span className="text-emerald-400">contactPhone:</span> <span className="text-emerald-300">"09045382250"</span>,</div>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Direct Live Projects Quick Access */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Live Deployed Works</span>
                
                <a
                  href="https://tallypadi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-xs text-slate-200 border border-slate-800 hover:border-emerald-500/50 transition-all"
                >
                  <span className="font-semibold text-emerald-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    TallyPadi (CTO)
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                    tallypadi.com <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href="https://www.rmg-emporium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-xs text-slate-200 border border-slate-800 hover:border-cyan-500/50 transition-all"
                >
                  <span className="font-semibold text-cyan-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    RMG Emporium
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                    rmg-emporium.com <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href="https://wilson-elite.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-xs text-slate-200 border border-slate-800 hover:border-purple-500/50 transition-all"
                >
                  <span className="font-semibold text-purple-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Wilson Elite
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                    wilson-elite.com <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
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
