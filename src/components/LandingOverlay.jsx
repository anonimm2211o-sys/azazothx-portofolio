import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Atom, 
  Bot, 
  MapPin, 
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/projects.js';
import { playCyberClick, playRigPowerUp } from '../utils/sound.js';

export default function LandingOverlay({ onEnter }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const handleEnter = () => {
    playCyberClick();
    playRigPowerUp();
    setIsFadingOut(true);
    
    // Smooth transition before removing overlay from DOM
    setTimeout(() => {
      setIsRemoved(true);
      if (onEnter) onEnter();
    }, 750);
  };

  if (isRemoved) return null;

  return (
    <div
      id="landing-overlay"
      aria-label="Welcome to my Portfolio Portal"
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#04030d] text-white select-none overflow-hidden ${
        isFadingOut ? 'animate-overlay-fade-out' : 'opacity-100'
      }`}
    >
      {/* Dark Futuristic Glowing Background Effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-700/25 via-indigo-600/20 to-fuchsia-600/15 blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-cyan-600/20 via-purple-900/20 to-blue-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 cosmic-grid-bg opacity-25 pointer-events-none" />

      {/* Centered Glass Panel Container */}
      <div className="relative z-10 max-w-xl w-full mx-auto p-8 sm:p-12 rounded-3xl bg-[#09071c]/90 border border-purple-500/40 backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.35),inset_0_0_30px_rgba(168,85,247,0.15)] flex flex-col items-center text-center space-y-6 animate-float-slow">
        
        {/* Top Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-xs font-mono text-purple-200 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] -ml-4" />
          <span className="tracking-wide">AZAZOTHX • SYSTEM READY</span>
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
        </div>

        {/* Central Glowing Icon */}
        <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-700 to-fuchsia-600 p-[1.5px] shadow-[0_0_35px_rgba(168,85,247,0.6)]">
          <div className="w-full h-full bg-[#070514] rounded-[22px] flex items-center justify-center">
            <Atom className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
        </div>

        {/* Grand Headline: Welcome to my Portfolio */}
        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-mono text-purple-300 tracking-widest uppercase">
            &lt;official-developer-portfolio&gt;
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Welcome to my{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300">
              Portfolio
              <span className="absolute -inset-1 bg-purple-500/25 blur-xl -z-10 rounded-lg animate-pulse" />
            </span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-sans pt-1">
            Portofolio digital oleh <strong className="text-purple-300">{personalInfo.realName}</strong> (Azazothx) — Siswa SMP Sandikta Kelas 9 asal Bekasi, Programmer Pemula &amp; Vibe Coder.
          </p>
        </div>

        {/* Identity Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-300">
          <span className="px-3 py-1 rounded-xl bg-slate-900/80 border border-purple-500/30 text-purple-200 flex items-center gap-1.5 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>SMP Sandikta (Kelas 9)</span>
          </span>
          <span className="px-3 py-1 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-200 flex items-center gap-1.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Bekasi, Indonesia</span>
          </span>
          <span className="px-3 py-1 rounded-xl bg-slate-900/80 border border-indigo-500/30 text-indigo-200 flex items-center gap-1.5 shadow-sm">
            <Bot className="w-3.5 h-3.5 text-indigo-400" />
            <span>AI Vibe Coder</span>
          </span>
        </div>

        {/* Centered Action Button: "Lihat Portfolio" */}
        <div className="pt-2 w-full flex flex-col items-center">
          <button
            id="btn-enter-portfolio"
            onClick={handleEnter}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right rounded-2xl shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:shadow-[0_0_55px_rgba(217,70,239,0.9)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-purple-400/50 cursor-pointer w-full sm:w-auto"
          >
            <span>Lihat Portfolio</span>
            <ArrowRight className="w-5 h-5 text-cyan-300 group-hover:translate-x-2 transition-transform duration-300" />
            <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-400 via-cyan-400 to-fuchsia-500 opacity-0 group-hover:opacity-40 blur transition-opacity -z-10" />
          </button>

          <span className="text-[11px] font-mono text-slate-400 mt-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Klik untuk membuka seluruh visual &amp; ekosistem portofolio
          </span>
        </div>

      </div>
    </div>
  );
}
