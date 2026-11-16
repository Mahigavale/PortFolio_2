import React, { useState } from 'react';
import { 
  Server, 
  Layout, 
  Sparkles, 
  Cloud, 
  CheckCircle2, 
  Search, 
  Code2, 
  Layers, 
  Cpu, 
  Database,
  Coffee,
  Network,
  Radio,
  Zap,
  HardDrive,
  FileCode,
  Palette,
  Box,
  Wifi,
  Package,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Workflow,
  Activity,
  Container,
  Boxes,
  GitBranch,
  LineChart,
  Compass
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon map helper
const iconMap = {
  Coffee,
  Server,
  Network,
  Code2,
  Database,
  Zap,
  Radio,
  HardDrive,
  Layout,
  FileCode,
  Palette,
  Box,
  Wifi,
  Cpu,
  Sparkles,
  Compass,
  Package,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Workflow,
  Activity,
  Container,
  Boxes,
  GitBranch,
  Cloud,
  LineChart,
  Layers
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Capabilities', icon: Layers },
    { id: 'backend', label: 'Java & Microservices', icon: Server },
    { id: 'enablement', label: 'Technical Enablement & DevEx', icon: Sparkles },
    { id: 'frontend', label: 'Frontend & React', icon: Layout },
    { id: 'devopsCloud', label: 'DevOps & Cloud', icon: Cloud },
  ];

  const getFilteredSkills = () => {
    let result = [];
    if (activeTab === 'all') {
      result = [
        ...skillsData.backend.map(s => ({ ...s, category: 'Backend' })),
        ...skillsData.enablement.map(s => ({ ...s, category: 'Enablement & DevEx' })),
        ...skillsData.frontend.map(s => ({ ...s, category: 'Frontend' })),
        ...skillsData.devopsCloud.map(s => ({ ...s, category: 'Cloud & DevOps' })),
      ];
    } else {
      const catName = categories.find(c => c.id === activeTab)?.label || '';
      result = (skillsData[activeTab] || []).map(s => ({ ...s, category: catName }));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.level.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      );
    }
    return result;
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Comprehensive Technical Repertoire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A balanced synthesis of deep backend systems architecture, modern frontend development, and organization-wide developer enablement.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by skill, level, tech..."
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const isExpert = skill.level === 'Expert';
            return (
              <div
                key={`${skill.name}-${index}`}
                className="glass-panel glass-panel-hover rounded-xl p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isExpert 
                      ? 'bg-indigo-950/80 text-indigo-400 border border-indigo-800/40 group-hover:bg-indigo-600 group-hover:text-white' 
                      : 'bg-slate-900 text-slate-400 border border-slate-800 group-hover:bg-slate-800 group-hover:text-slate-200'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-mono">
                      {skill.category}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                    isExpert
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60'
                      : 'bg-slate-800 text-slate-400 border border-slate-700/60'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-slate-500 font-mono text-sm">
            No matching skills found for "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
