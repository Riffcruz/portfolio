'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ArrowRight, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Hero: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>CTO @ TallyPadi • 6+ Years Experience</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Akor Anthony Makuochukwu
              </h1>
              <p className="text-lg sm:text-xl font-medium text-emerald-400 mt-1">
                Known as Snowtech • Senior Full-Stack & App Developer
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              I build web platforms, mobile apps for iOS & Android, and secure software. Currently Chief Technology Officer (CTO) at <strong className="text-white font-medium">TallyPadi</strong>, with background at <strong className="text-white font-medium">Smartweb Security</strong> and cybersecurity certifications. Developed web platforms for clients including <strong className="text-white font-medium">rmg-emporium.com</strong> and <strong className="text-white font-medium">wilson-elite.com</strong>.
            </p>

            {/* Location & Contact Info */}
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>09045382250</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Cybersecurity Certified</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

          </motion.div>

          {/* Right Clean Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="clean-card rounded-2xl p-2 max-w-sm mx-auto shadow-xl">
              <div className="relative h-[380px] sm:h-[420px] rounded-xl overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Akor Anthony Makuochukwu (Snowtech)"
                  className="w-full h-full object-cover object-center"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/90 border border-slate-800 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs font-medium text-white">
                    <span>Akor Anthony Makuochukwu</span>
                    <span className="text-emerald-400 font-bold">CTO @ TallyPadi</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
