import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Globe, 
  Boxes, 
  Network, 
  Sparkles, 
  CheckCircle,
  ArrowUpRight,
  Layers,
  Activity,
  Cpu,
  RefreshCw
} from 'lucide-react';
import { projectsData } from '../data/projects.js';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [pingStatus, setPingStatus] = useState({});

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'Boxes': return <Boxes className="w-6 h-6 text-purple-300" />;
      case 'Globe': return <Globe className="w-6 h-6 text-violet-300" />;
      case 'Network': return <Network className="w-6 h-6 text-cyan-300" />;
      default: return <Layers className="w-6 h-6 text-purple-300" />;
    }
  };

  const simulatePing = (projectId) => {
    setPingStatus(prev => ({ ...prev, [projectId]: 'pinging' }));
    setTimeout(() => {
      const ms = Math.floor(Math.random() * 18) + 16;
      setPingStatus(prev => ({ ...prev, [projectId]: `${ms}ms • ONLINE` }));
    }, 600);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.technologies.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <section
      id="proyek"
      aria-label="Proyek-proyek Azazothx"
      className="py-20 md:py-28 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>&lt;verified-portfolio-showcase&gt;</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">Saya</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Eksplorasi nyata dan platform web aktif yang saya rancang untuk eksperimen AI, pemetaan jaringan IP, dan utilitas produktivitas.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Semua Proyek' },
            { id: 'react', label: 'React / SPA' },
            { id: 'javascript', label: 'JavaScript' },
            { id: 'ai', label: 'AI & Tools' },
            { id: 'network', label: 'Networking / API' }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                  : 'bg-[#09071b]/80 text-slate-400 border border-purple-500/20 hover:text-white hover:border-purple-500/40'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Cards List */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => {
            const currentPing = pingStatus[project.id] || '24ms • ONLINE';
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 md:p-10 border border-purple-500/30 relative overflow-hidden group transition-all duration-500"
              >
                {/* Background Glow Effect */}
                <div
                  className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20 group-hover:opacity-45 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: project.accentColor }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Info Column */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Tags & Status */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-500/40 text-xs font-mono text-purple-300">
                        {project.tag}
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:scale-105 transition-transform duration-300">
                        {getProjectIcon(project.icon)}
                      </div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-base leading-relaxed">
                      "{project.description}"
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2 pt-1">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300/90">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-purple-500/25 text-xs font-mono text-slate-300 group-hover:border-purple-400/40 transition-colors"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Button & Live Latency Tester */}
                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <a
                        id={`btn-open-${project.id}`}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right text-white font-semibold text-sm shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 touch-btn cursor-pointer"
                      >
                        <span>Buka Proyek</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>

                      <button
                        type="button"
                        onClick={() => simulatePing(project.id)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs font-mono text-purple-300 hover:text-white hover:border-purple-500/50 transition-all cursor-pointer"
                      >
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Ping: {currentPing}</span>
                      </button>
                    </div>

                  </div>

                  {/* Visual Preview Box */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-[#080517] border border-purple-500/30 p-5 shadow-[0_0_35px_rgba(0,0,0,0.7)] relative overflow-hidden group-hover:border-purple-400/60 transition-all duration-300">
                      
                      {/* Terminal-like Browser Window Header */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-purple-500/20 text-xs font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-purple-300/90 text-[11px] truncate max-w-[200px]">
                          {project.url.replace('https://', '')}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                      </div>

                      {/* Mockup Preview Area */}
                      <div className="h-48 sm:h-56 rounded-xl bg-gradient-to-br from-[#120a2e] via-[#0b071e] to-[#04020a] border border-purple-500/20 p-5 flex flex-col justify-between relative overflow-hidden group/mock">
                        <div className="absolute inset-0 cosmic-grid-bg opacity-30 pointer-events-none" />
                        
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-purple-300 uppercase flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            LIVE PREVIEW FEED
                          </span>
                          <span className="px-2 py-0.5 rounded bg-purple-500/20 text-[10px] font-mono text-purple-200">
                            HTTPS:// OK
                          </span>
                        </div>

                        <div className="relative z-10 space-y-2 text-center my-auto">
                          <div className="inline-flex p-3 rounded-2xl bg-purple-950/60 border border-purple-500/40 text-purple-300 mb-1 group-hover/mock:scale-110 transition-transform">
                            {getProjectIcon(project.icon)}
                          </div>
                          <p className="font-display font-bold text-lg text-white">
                            {project.title}
                          </p>
                          <p className="text-xs text-purple-200/80 font-mono">
                            {project.tag}
                          </p>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span>EDGE: VERCEL CLOUD</span>
                          <span className="text-emerald-400">DEPLOYED & HEALTHY</span>
                        </div>
                      </div>

                    </div>
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
