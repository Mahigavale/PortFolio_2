import React from 'react';
import { Terminal, Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800/40 flex items-center justify-center">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-200 text-sm font-sans">{personalInfo.name}</p>
              <p className="text-[11px] text-slate-500">Java Full Stack &bull; Technical Enablement</p>
            </div>
          </div>

          {/* Hosting and Build badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Hosted on GitHub Pages &bull; Automated CI/CD Workflow</span>
          </div>

          {/* Socials & Top button */}
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors" title="Email">
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with React 18, Tailwind CSS & Vite
          </p>
        </div>

      </div>
    </footer>
  );
}
