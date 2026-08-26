'use client';

import React from 'react';
import { ExternalLink, ArrowUpRight, Shield, Globe, Building } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Featured Projects & Work
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            CTO leadership at TallyPadi & web platforms developed for clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="clean-card rounded-xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-semibold ${
                    project.type === 'CTO Role'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                      : 'bg-slate-900 text-slate-300 border border-slate-800'
                  }`}>
                    {project.type}
                  </span>
                  {project.metrics && (
                    <span className="text-xs text-slate-400 font-mono">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <span className="text-xs text-emerald-400 block font-medium">
                  {project.role}
                </span>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Link */}
                {project.url !== '#' && (
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono truncate max-w-[200px]">
                      {project.url}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      <span>Visit Website</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
