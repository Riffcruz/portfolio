'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Globe, User, Building, Phone, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const About: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;

  const highlights = [
    {
      icon: Building,
      title: "CTO @ TallyPadi",
      description: "Leading technology strategy, cloud infrastructure, and product development for TallyPadi's business accounting platform."
    },
    {
      icon: Shield,
      title: "Smartweb Security Background",
      description: "Experience conducting web application security audits, penetration testing, and server hardening."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications for iOS and Android using React Native."
    },
    {
      icon: Globe,
      title: "Client Web Projects",
      description: "Developed custom web platforms for clients including rmg-emporium.com and wilson-elite.com."
    }
  ];

  return (
    <section id="about" className="py-16 bg-[#0c101a] border-t border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Background, roles, and technical expertise over 6+ years.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative */}
          <div className="lg:col-span-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am <strong className="text-white">Akor Anthony Makuochukwu</strong>, known in tech as <strong className="text-emerald-400">Snowtech</strong>. Based in <strong className="text-white">Sangotedo, Lagos Island</strong>, I have over 6 years of experience developing web and mobile applications.
            </p>
            <p>
              Currently, I serve as the <strong className="text-emerald-400">Chief Technology Officer (CTO) at TallyPadi</strong>, where I oversee software architecture and product infrastructure. 
            </p>
            <p>
              In addition to my CTO role at TallyPadi, I have worked with <strong className="text-white">Smartweb Security</strong> on web security audits, and built custom web platforms for several clients (such as <strong className="text-emerald-400">rmg-emporium.com</strong> and <strong className="text-emerald-400">wilson-elite.com</strong>).
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call 09045382250</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Grid Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="clean-card p-5 rounded-xl space-y-2">
                  <Icon className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
