'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight, Shield, Smartphone, Globe, CheckCircle2, X } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'fintech' | 'security'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'FinTech & Apps', value: 'fintech' },
    { label: 'Web Platforms', value: 'web' },
    { label: 'Mobile Apps', value: 'mobile' },
    { label: 'Cybersecurity', value: 'security' },
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative cyber-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO & LIVE WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-emerald-400">Applications</span> & <span className="text-cyan-400">Web Platforms</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Explore live deployed platforms, enterprise web applications, and mobile products engineered with production security.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter.value
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
              >
                {/* Visual Header Banner */}
                <div className={`h-48 w-full bg-gradient-to-br ${project.imageBg} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]" />
                  
                  {/* Category Pill */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-white/10 text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="px-2.5 py-1 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-[11px] font-mono text-emerald-300">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Role Title in Header */}
                  <div className="relative z-10 mt-auto">
                    <span className="text-xs font-mono text-cyan-300 block mb-1">{project.role}</span>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                    >
                      <span>View Details</span>
                    </button>

                    {project.url !== '#' ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono transition-colors"
                      >
                        <span>Visit Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-500 italic">Client App</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Detailed Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                  {selectedProject.category} • {selectedProject.role}
                </span>
                <h3 className="text-3xl font-extrabold text-white">{selectedProject.title}</h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-emerald-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.url !== '#' && (
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Live URL: {selectedProject.url}</span>
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs"
                  >
                    <span>Launch Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
};
