import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Palette, 
  Atom, 
  Coffee, 
  Smartphone, 
  Layers, 
  Cpu, 
  Sparkles,
  Terminal,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/projects.js';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-amber-400" />;
      case 'FileCode': return <FileCode className="w-6 h-6 text-orange-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-sky-400" />;
      case 'Atom': return <Atom className="w-6 h-6 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-orange-500" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-purple-400" />;
      default: return <Cpu className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section
      id="skill"
      aria-label="Skill & Teknologi Azazothx"
      className="py-20 md:py-28 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>&lt;tech-capabilities&gt;</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skill & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">Teknologi</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Kumpulan bahasa pemrograman dan library yang saya pelajari dan gunakan langsung untuk membangun antarmuka web, aplikasi mobile, dan utilitas interaktif.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Skill Category */}
        <div className="space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                <Terminal className="w-4 h-4 text-purple-300" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Programming & Development Stacks
              </h3>
            </div>
            <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30">
              6 CORE LANGUAGES & FRAMEWORKS
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData[0].items.map((skill, index) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <div
                  key={skill.name}
                  id={`skill-card-${skill.name.toLowerCase()}`}
                  onClick={() => setSelectedSkill(isSelected ? null : skill)}
                  className={`glass-panel glass-panel-hover rounded-3xl p-6 border relative overflow-hidden group flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'border-purple-400 ring-2 ring-purple-400/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] scale-[1.02]'
                      : 'border-purple-500/25 hover:border-purple-500/50'
                  }`}
                >
                  {/* Top Ambient Glow on Hover */}
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: skill.color }}
                  />

                  <div>
                    {/* Header Card: Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#09071c] border border-purple-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        {getIcon(skill.icon)}
                      </div>

                      {/* Status / Level Badge */}
                      <span className={`px-2.5 py-1 rounded-xl text-xs font-medium border ${skill.badgeColor} backdrop-blur-sm shadow-sm`}>
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Name */}
                    <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-purple-300 transition-colors flex items-center gap-2">
                      <span>{skill.name}</span>
                      {skill.name === 'React' && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/15 border border-cyan-500/40 text-cyan-300">
                          Portfolio Base
                        </span>
                      )}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-slate-300/85 leading-relaxed mb-4">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Visual Indicator Line */}
                  <div className="pt-3 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-purple-300/90">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      Eksplorasi Aktif
                    </span>
                    <span className="text-slate-500">
                      #0{index + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note Box */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#120a2e]/90 via-[#0c0822]/90 to-[#120a2e]/90 border border-purple-500/30 p-6 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_0_25px_rgba(168,85,247,0.15)]">
          <div className="flex items-center gap-3.5">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500" />
            </span>
            <p className="text-xs sm:text-sm text-slate-200">
              Setiap teknologi dipelajari dan diuji langsung melalui integrasi modul dan kebutuhan arsitektur proyek nyata.
            </p>
          </div>
          <span className="text-xs font-mono text-purple-300 whitespace-nowrap bg-purple-950/80 px-3 py-1.5 rounded-xl border border-purple-500/30">
            CONTINUOUS_LEARNING: ACTIVE
          </span>
        </div>

      </div>
    </section>
  );
}
