'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Terminal, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture & Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold tracking-tight text-white font-mono">SNOWTECH</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                CTO @ TallyPadi
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">AKOR ANTHONY MAKOUCHUKWU</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-wide text-slate-300 hover:text-emerald-400 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:opacity-95 shadow-md shadow-emerald-500/20 transition-all"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call 09045382250</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-slate-200 hover:text-emerald-400 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={PORTFOLIO_DATA.personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs font-mono"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call 09045382250</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
