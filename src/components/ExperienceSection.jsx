import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Quote, Award } from 'lucide-react';
import { experience, testimonialsOrMetrics } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            From coding high-volume payment pipelines to establishing enterprise developer enablement architectures.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-slate-800 before:to-transparent">
          {experience.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } group`}
              >
                {/* Timeline Node Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-white z-15 shadow-md shadow-indigo-600/40">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 group-hover:bg-emerald-400 transition-colors"></div>
                </div>

                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  isEven ? 'md:pl-10' : 'md:pr-10'
                } w-full`}>
                  <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 group-hover:border-slate-700 transition-all">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-indigo-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mb-3">
                      {item.company}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                      {item.skills.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Testimonials / Leadership Feedback */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <Quote className="w-5 h-5 text-indigo-400" /> What Engineering Leaders Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsOrMetrics.map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.author}</h4>
                    <p className="text-[11px] text-slate-400">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
