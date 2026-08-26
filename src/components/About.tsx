'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Smartphone, Globe, User, Building, Phone, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const About: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;

  const pillars = [
    {
      icon: Cpu,
      title: "CTO & Technical Strategy",
      description: "Directing technology architecture, cloud microservices, database scaling, and product execution at TallyPadi."
    },
    {
      icon: Shield,
      title: "Cybersecurity & Hardening",
      description: "Certified security specialist experienced with Smartweb Security, OWASP audits, SSL/TLS, and server hardening."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Mobile Apps",
      description: "Architecting high-performance iOS & Android mobile applications using React Native with 60fps native performance."
    },
    {
      icon: Globe,
      title: "Full-Stack Web Architect",
      description: "Building sub-second Next.js web applications, e-commerce stores (rmg-emporium.com), and enterprise portals (wilson-elite.com)."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#050811] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3 uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>EXECUTIVE BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            6 Years of Engineering <span className="text-emerald-400">Scalable Systems</span> & <span className="text-emerald-400">Cyber Hardening</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 text-slate-300"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug font-mono">
              Akor Anthony Makuochukwu <span className="text-emerald-400 font-normal">(Snowtech)</span>
            </h3>

            <p className="leading-relaxed text-sm sm:text-base font-light">
              Based in <strong className="text-white font-semibold">Sangotedo, Lagos Island</strong>, I have spent the last <strong className="text-white font-semibold">6+ years</strong> architecting software solutions for web platforms, cross-platform mobile apps, and financial software ecosystems.
            </p>

            <p className="leading-relaxed text-sm sm:text-base font-light">
              As the <strong className="text-emerald-400 font-semibold">Chief Technology Officer (CTO) of TallyPadi</strong>, I lead technological innovation and core application architecture. My engineering foundation is backed by extensive work with enterprise clients like <strong className="text-emerald-400 font-semibold">Smartweb Security</strong>, conducting vulnerability assessments and building hardened cloud systems.
            </p>

            {/* Verified Credentials Strip */}
            <div className="pro-card rounded-2xl p-5 border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Verified Leadership Credentials</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-slate-300 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CTO @ TallyPadi (tallypadi.com)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Smartweb Security Engineer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Certified Cybersecurity Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Phone: 09045382250</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono transition-colors shadow-lg shadow-emerald-500/20"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call 09045382250</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
              >
                <span>Send Direct Inquiry</span>
              </a>
            </div>

          </motion.div>

          {/* Right Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="pro-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
