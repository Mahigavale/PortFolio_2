import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Server, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  ArrowUpRight 
} from 'lucide-react';
import { Github } from './BrandIcons';
import { projects } from '../data/portfolioData';

export default function ProjectsSection({ activePersona }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Real-World Engineering & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects & Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Production microservices platforms, high-throughput event processing pipelines, and internal developer tooling.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-slate-700 text-white shadow'
                : 'text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800'
            }`}
          >
            All Initiatives ({projects.length})
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              filter === 'fullstack'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800'
            }`}
          >
            <Server className="w-3.5 h-3.5 text-amber-400" />
            Full Stack Systems
          </button>
          <button
            onClick={() => setFilter('enablement')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              filter === 'enablement'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            Enablement & DevEx
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isEnablement = project.category === 'enablement';
            return (
              <div
                key={project.id}
                className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 hover:border-slate-700 transition-all duration-300 group hover:shadow-2xl hover:shadow-black/60"
              >
                <div>
                  
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-mono px-3 py-1 rounded-full font-semibold flex items-center gap-1.5 ${
                      isEnablement
                        ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60'
                        : 'bg-indigo-950/80 text-indigo-400 border border-indigo-800/60'
                    }`}>
                      {isEnablement ? <Sparkles className="w-3 h-3" /> : <Server className="w-3 h-3" />}
                      {project.badge}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                    {project.subtitle}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    <p className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
                      Key Highlights & Architecture
                    </p>
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Tech Tags & Footer */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
