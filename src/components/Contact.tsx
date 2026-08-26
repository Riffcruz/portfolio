'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, Mail, Send, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Contact: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '', projectType: 'Web Development' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch with <span className="text-emerald-400">Wilson</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Based in Sangotedo, Lagos Island. Available for full-stack web projects, mobile app development, CTO consulting, and security audits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Direct Info & Action Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Call Direct Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-xs font-mono text-slate-400">DIRECT PHONE / CALL</span>
                <h4 className="text-xl font-bold text-white font-mono">{personalInfo.phone}</h4>
                <p className="text-xs text-slate-400">Available Mon - Sat for calls & inquiries</p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-1"
                >
                  <span>Tap to Call Now</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Quick Chat Card */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 shrink-0 shadow-lg shadow-emerald-500/30">
                <MessageSquare className="w-6 h-6 fill-current" />
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-xs font-mono text-emerald-400">INSTANT MESSAGING</span>
                <h4 className="text-lg font-bold text-white">WhatsApp Chat</h4>
                <p className="text-xs text-slate-300">Direct 1-on-1 response within hours</p>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 mt-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-[11px] block">LOCATION</span>
                  <span className="text-white font-medium">{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-[11px] block">RESPONSE TIME</span>
                  <span className="text-emerald-300 font-medium">Under 2 Hours Guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-2xl border border-slate-800 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out. I will review your message and call or reply to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-emerald-400 text-xs font-semibold border border-slate-800 hover:bg-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white">Send Direct Message</h3>
                    <span className="text-xs font-mono text-emerald-400">Direct to Wilson</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email or Phone</label>
                      <input
                        type="text"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. 08012345678 or john@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Project Interest</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                    >
                      <option value="Web Development">Web Application / Website (Next.js/React)</option>
                      <option value="Mobile App">Mobile App (iOS & Android)</option>
                      <option value="Fintech & Accounting">FinTech / Ledger Architecture (TallyPadi style)</option>
                      <option value="Cybersecurity">Cybersecurity Audit & Penetration Testing</option>
                      <option value="CTO Advisory">CTO Advisory & Technical Leadership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Project Details / Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project goals, timelines, or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/20 hover:opacity-95 flex items-center justify-center gap-2 transition-all"
                  >
                    {loading ? (
                      <span className="font-mono animate-pulse">Transmitting message...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
