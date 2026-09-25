import React, { useState, useEffect, useRef } from 'react';
import { 
  Orbit, 
  Sparkles, 
  Cpu, 
  Zap, 
  Play, 
  Pause, 
  FastForward, 
  Crosshair, 
  Atom, 
  Code2, 
  FileCode, 
  Palette, 
  Coffee, 
  Smartphone, 
  Terminal, 
  Server, 
  GitBranch, 
  Github, 
  Cloud, 
  Bot,
  Radio,
  Flame
} from 'lucide-react';
import { orbitTechs } from '../data/projects.js';
import BlackHole from './BlackHole.jsx';
import { playCyberClick } from '../utils/sound.js';

export default function TechOrbit() {
  const [speedMode, setSpeedMode] = useState('normal'); // 'normal' | 'hyperdrive' | 'warp' | 'paused'
  const [selectedTech, setSelectedTech] = useState(orbitTechs[0]); // default to React
  const [hoveredTech, setHoveredTech] = useState(null);

  const activeTech = hoveredTech || selectedTech || orbitTechs[0];

  // Direct 60fps RequestAnimationFrame orbital math engine
  const [orbitAngles, setOrbitAngles] = useState({
    ring1: 0,
    ring2: Math.PI / 4,
    ring3: Math.PI / 3,
  });

  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const speedMultiplierRef = useRef(1);

  useEffect(() => {
    if (speedMode === 'paused') {
      speedMultiplierRef.current = 0;
    } else if (speedMode === 'hyperdrive') {
      speedMultiplierRef.current = 2.5;
    } else if (speedMode === 'warp') {
      speedMultiplierRef.current = 4.5;
    } else {
      speedMultiplierRef.current = 1;
    }
  }, [speedMode]);

  useEffect(() => {
    const updateTechOrbit = (time) => {
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const speedMult = speedMultiplierRef.current;
      if (speedMult > 0) {
        // Rotational speeds in radians/sec
        const r1Speed = 0.35 * speedMult;   // Inner Ring Clockwise
        const r2Speed = -0.25 * speedMult;  // Middle Ring Counter-Clockwise
        const r3Speed = 0.18 * speedMult;   // Outer Ring Clockwise

        setOrbitAngles((prev) => ({
          ring1: (prev.ring1 + r1Speed * delta) % (Math.PI * 2),
          ring2: (prev.ring2 + r2Speed * delta) % (Math.PI * 2),
          ring3: (prev.ring3 + r3Speed * delta) % (Math.PI * 2),
        }));
      }

      animFrameRef.current = requestAnimationFrame(updateTechOrbit);
    };

    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(updateTechOrbit);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const getTechIcon = (name) => {
    switch (name) {
      case 'React': return <Atom className="w-4 h-4 text-cyan-400" />;
      case 'JavaScript': return <Code2 className="w-4 h-4 text-yellow-400" />;
      case 'CSS': return <Palette className="w-4 h-4 text-sky-400" />;
      case 'HTML': return <FileCode className="w-4 h-4 text-orange-400" />;
      case 'Java': return <Coffee className="w-4 h-4 text-orange-500" />;
      case 'Kotlin': return <Smartphone className="w-4 h-4 text-purple-400" />;
      case 'Python': return <Terminal className="w-4 h-4 text-sky-300" />;
      case 'Node.js': return <Server className="w-4 h-4 text-emerald-400" />;
      case 'Git': return <GitBranch className="w-4 h-4 text-rose-400" />;
      case 'GitHub': return <Github className="w-4 h-4 text-slate-200" />;
      case 'Vercel': return <Cloud className="w-4 h-4 text-fuchsia-400" />;
      case 'AI / LLM': return <Bot className="w-4 h-4 text-cyan-300" />;
      default: return <Sparkles className="w-4 h-4 text-purple-300" />;
    }
  };

  // Orbital Radii for the 3 Tech Rings (Scaled responsive)
  const ring1Radius = 135; // Inner Ring
  const ring2Radius = 205; // Middle Ring
  const ring3Radius = 275; // Outer Ring

  // Ring 1 Nodes (4 items evenly spaced by PI / 2)
  const ring1Nodes = [
    { tech: orbitTechs[0], angleOffset: 0, color: 'border-cyan-400 text-cyan-200' },             // React
    { tech: orbitTechs[1], angleOffset: Math.PI * 0.5, color: 'border-yellow-400 text-yellow-200' }, // JavaScript
    { tech: orbitTechs[2], angleOffset: Math.PI, color: 'border-sky-400 text-sky-200' },             // CSS
    { tech: orbitTechs[3], angleOffset: Math.PI * 1.5, color: 'border-orange-400 text-orange-200' }, // HTML
  ];

  // Ring 2 Nodes (4 items evenly spaced)
  const ring2Nodes = [
    { tech: orbitTechs[4], angleOffset: Math.PI * 0.25, color: 'border-orange-500 text-orange-200' },   // Java
    { tech: orbitTechs[5], angleOffset: Math.PI * 0.75, color: 'border-purple-400 text-purple-200' },   // Kotlin
    { tech: orbitTechs[6], angleOffset: Math.PI * 1.25, color: 'border-sky-400 text-sky-200' },         // Python
    { tech: orbitTechs[7], angleOffset: Math.PI * 1.75, color: 'border-emerald-400 text-emerald-200' }, // Node.js
  ];

  // Ring 3 Nodes (4 items evenly spaced)
  const ring3Nodes = [
    { tech: orbitTechs[8], angleOffset: 0, color: 'border-cyan-300 text-cyan-100' },             // AI / LLM
    { tech: orbitTechs[9], angleOffset: Math.PI * 0.5, color: 'border-fuchsia-400 text-fuchsia-200' }, // Vercel
    { tech: orbitTechs[10], angleOffset: Math.PI, color: 'border-slate-300 text-slate-100' },         // GitHub
    { tech: orbitTechs[11], angleOffset: Math.PI * 1.5, color: 'border-rose-400 text-rose-200' },     // Git
  ];

  return (
    <section
      id="tech-orbit-section"
      aria-label="Orbit Teknologi & Singularity Azazothx"
      className="py-20 md:py-28 relative z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Orbit className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>&lt;cosmic-orbit-and-singularity&gt;</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technology Orbit & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300">Lubang Hitam</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Sistem orbit kosmik 12 teknologi inti yang mengitari singularitas gravitasi secara otomatis. Klik node mana saja untuk inspeksi detail data telemetry.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Clean Status & Target Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-200 shadow-md backdrop-blur-md">
            <Crosshair className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>INSPEKSI NODE: <strong className="text-white">{activeTech.name.toUpperCase()}</strong></span>
          </div>
        </div>

        {/* Orbit Visualization Arena (60fps dynamic math auto-orbit) */}
        <div className="relative w-full max-w-4xl mx-auto h-[560px] sm:h-[640px] md:h-[700px] flex items-center justify-center overflow-hidden">
          
          {/* Ambient Cosmic Background Nebula */}
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-purple-700/25 blur-[100px] pointer-events-none" />
          <div className="absolute w-64 h-64 rounded-full bg-indigo-600/20 blur-[80px] pointer-events-none" />

          {/* Central Pulsing Energy Waves */}
          <div className="absolute w-44 h-44 rounded-full border border-purple-500/30 animate-energy-wave pointer-events-none" />
          <div className="absolute w-44 h-44 rounded-full border border-cyan-500/20 animate-energy-wave pointer-events-none" style={{ animationDelay: '1.5s' }} />

          {/* Orbit Track Lines */}
          <div 
            className="absolute rounded-full border border-purple-500/30 pointer-events-none"
            style={{ width: `${ring1Radius * 2}px`, height: `${ring1Radius * 2}px` }}
          />
          <div 
            className="absolute rounded-full border border-indigo-500/30 border-dashed pointer-events-none"
            style={{ width: `${ring2Radius * 2}px`, height: `${ring2Radius * 2}px` }}
          />
          <div 
            className="absolute rounded-full border border-fuchsia-500/25 border-dotted pointer-events-none"
            style={{ width: `${ring3Radius * 2}px`, height: `${ring3Radius * 2}px` }}
          />

          {/* CENTRAL CORE: LUBANG HITAM SINGULARITAS KOSMIK */}
          <div className="relative z-30 w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center">
            
            {/* Swirling Plasma Accretion Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-cyan-400 blur-xl animate-black-hole opacity-90 pointer-events-none" />
            
            {/* Relativistic Accretion Ring */}
            <div 
              className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border-[3px] border-dashed border-fuchsia-400/70 animate-accretion-reverse pointer-events-none"
              style={{ boxShadow: '0 0 35px rgba(217,70,239,0.8)' }}
            />

            {/* Event Horizon Pure Void Center */}
            <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#020108] border-2 border-purple-500 shadow-[0_0_40px_rgba(0,0,0,1),inset_0_0_25px_rgba(168,85,247,0.4)] flex flex-col items-center justify-center p-2 text-center group cursor-pointer">
              <Sparkles className="w-5 h-5 text-fuchsia-300 animate-pulse mb-1" />
              <span className="font-display font-black text-xs text-white tracking-widest">
                AZAZOTHX
              </span>
              <span className="text-[8px] font-mono text-cyan-300 tracking-wider">
                SINGULARITY
              </span>
            </div>
          </div>

          {/* ========================================================
              RING 1 SATELLITES (Inner Track: React, JS, CSS, HTML)
              ======================================================== */}
          {ring1Nodes.map(({ tech, angleOffset, color }) => {
            const currentAngle = orbitAngles.ring1 + angleOffset;
            const x = Math.cos(currentAngle) * ring1Radius;
            const y = Math.sin(currentAngle) * ring1Radius;
            const isSelected = activeTech.name === tech.name;

            return (
              <div
                key={tech.name}
                className="absolute z-20 pointer-events-auto cursor-pointer"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  willChange: 'transform',
                }}
                onClick={() => { playCyberClick(); setSelectedTech(tech); }}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div
                  className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#09071c]/95 border transition-all duration-200 shadow-lg ${
                    isSelected
                      ? `border-cyan-300 ring-2 ring-cyan-400/60 scale-110 shadow-[0_0_25px_rgba(6,182,212,0.9)]`
                      : `border-purple-500/40 hover:border-cyan-400 hover:scale-105 shadow-[0_0_12px_rgba(0,0,0,0.5)]`
                  }`}
                >
                  {getTechIcon(tech.name)}
                  <span className={`text-xs font-bold font-mono ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}

          {/* ========================================================
              RING 2 SATELLITES (Middle Track: Java, Kotlin, Python, Node.js)
              ======================================================== */}
          {ring2Nodes.map(({ tech, angleOffset, color }) => {
            const currentAngle = orbitAngles.ring2 + angleOffset;
            const x = Math.cos(currentAngle) * ring2Radius;
            const y = Math.sin(currentAngle) * ring2Radius;
            const isSelected = activeTech.name === tech.name;

            return (
              <div
                key={tech.name}
                className="absolute z-20 pointer-events-auto cursor-pointer"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  willChange: 'transform',
                }}
                onClick={() => { playCyberClick(); setSelectedTech(tech); }}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div
                  className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#09071c]/95 border transition-all duration-200 shadow-lg ${
                    isSelected
                      ? `border-purple-300 ring-2 ring-purple-400/60 scale-110 shadow-[0_0_25px_rgba(168,85,247,0.9)]`
                      : `border-indigo-500/40 hover:border-purple-400 hover:scale-105 shadow-[0_0_12px_rgba(0,0,0,0.5)]`
                  }`}
                >
                  {getTechIcon(tech.name)}
                  <span className={`text-xs font-bold font-mono ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}

          {/* ========================================================
              RING 3 SATELLITES (Outer Track: AI/LLM, Vercel, GitHub, Git)
              ======================================================== */}
          {ring3Nodes.map(({ tech, angleOffset, color }) => {
            const currentAngle = orbitAngles.ring3 + angleOffset;
            const x = Math.cos(currentAngle) * ring3Radius;
            const y = Math.sin(currentAngle) * ring3Radius;
            const isSelected = activeTech.name === tech.name;

            return (
              <div
                key={tech.name}
                className="absolute z-20 pointer-events-auto cursor-pointer"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  willChange: 'transform',
                }}
                onClick={() => { playCyberClick(); setSelectedTech(tech); }}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div
                  className={`group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#09071c]/95 border transition-all duration-200 shadow-lg ${
                    isSelected
                      ? `border-fuchsia-300 ring-2 ring-fuchsia-400/60 scale-115 shadow-[0_0_25px_rgba(217,70,239,0.9)]`
                      : `border-fuchsia-500/40 hover:border-fuchsia-300 hover:scale-105 shadow-[0_0_12px_rgba(0,0,0,0.5)]`
                  }`}
                >
                  {getTechIcon(tech.name)}
                  <span className={`text-xs font-bold font-mono ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Live Interactive Telemetry HUD Card */}
        <div className="mt-6 max-w-2xl mx-auto rounded-3xl bg-[#0a071f]/95 border border-purple-500/40 p-5 sm:p-6 shadow-[0_0_35px_rgba(168,85,247,0.25)] backdrop-blur-xl relative overflow-hidden transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-purple-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                {getTechIcon(activeTech.name)}
              </div>
              <div>
                <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest block">
                  ORBIT NODE TELEMETRY • RING 0{activeTech.ring}
                </span>
                <h4 className="font-display font-bold text-xl text-white flex items-center gap-2">
                  <span>{activeTech.name}</span>
                  <span className="text-xs font-mono font-normal text-purple-300/80">({activeTech.category})</span>
                </h4>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-xs font-mono text-purple-200 self-start sm:self-auto">
              {activeTech.status}
            </span>
          </div>

          <p className="mt-3 text-sm text-slate-200 leading-relaxed font-sans">
            {activeTech.role}
          </p>

          <div className="mt-4 pt-3 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <Sparkles className="w-3 h-3" />
              <span>Auto-Orbit Live Synchronized</span>
            </span>
            <span className="text-slate-500">Klik node mana saja di orbit untuk inspeksi</span>
          </div>
        </div>

        {/* Dedicated Black Hole Singularity Interactive Card */}
        <div className="mt-14">
          <BlackHole />
        </div>

      </div>
    </section>
  );
}
