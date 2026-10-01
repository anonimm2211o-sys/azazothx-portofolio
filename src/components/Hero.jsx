import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Code2, 
  Bot, 
  Cpu, 
  Terminal, 
  Orbit, 
  Atom, 
  Zap, 
  GraduationCap,
  MapPin,
  Flame,
  Radio
} from 'lucide-react';
import { personalInfo } from '../data/projects.js';
import { playCyberClick } from '../utils/sound.js';

export default function Hero() {
  const roles = [
    "Programmer Pemula",
    "Vibe Coder",
    "Technology Enthusiast",
    "Web Development Explorer",
    "AI Prompt Orchestrator"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);
  const [heroSpeed, setHeroSpeed] = useState('normal'); // 'normal' | 'turbo' | 'hyperspace' | 'paused'
  const [activeSatellite, setActiveSatellite] = useState(null);

  // State for direct JS-driven 60fps orbital math animation
  const [angles, setAngles] = useState({
    ring1: 0,
    ring2: Math.PI / 2,
    ring3: Math.PI / 4,
  });

  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const speedMultiplierRef = useRef(1);

  // Synchronize speed multiplier
  useEffect(() => {
    if (heroSpeed === 'paused') {
      speedMultiplierRef.current = 0;
    } else if (heroSpeed === 'turbo') {
      speedMultiplierRef.current = 2.5;
    } else if (heroSpeed === 'hyperspace') {
      speedMultiplierRef.current = 4.5;
    } else {
      speedMultiplierRef.current = 1;
    }
  }, [heroSpeed]);

  // Direct 60fps RequestAnimationFrame orbital movement loop
  useEffect(() => {
    const updateOrbit = (time) => {
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const speedMult = speedMultiplierRef.current;
      if (speedMult > 0) {
        // Base angular speeds (rad/sec)
        const speedRing1 = 0.45 * speedMult;  // Ring 1 Clockwise
        const speedRing2 = -0.35 * speedMult; // Ring 2 Counter-Clockwise
        const speedRing3 = 0.25 * speedMult;  // Ring 3 Clockwise

        setAngles((prev) => ({
          ring1: (prev.ring1 + speedRing1 * delta) % (Math.PI * 2),
          ring2: (prev.ring2 + speedRing2 * delta) % (Math.PI * 2),
          ring3: (prev.ring3 + speedRing3 * delta) % (Math.PI * 2),
        }));
      }

      animFrameRef.current = requestAnimationFrame(updateOrbit);
    };

    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(updateOrbit);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Smooth Typewriter effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1900);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  const handleScroll = (href) => {
    playCyberClick();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Orbital Radii for badges based on screen
  // Ring 1 (Inner): React.js & Bekasi Node
  const r1 = 145; 
  // Ring 2 (Outer): SMP & Vibe Coder
  const r2 = 195;

  // Calculate live X, Y positions for satellites
  const satReactPos = {
    x: Math.cos(angles.ring1) * r1,
    y: Math.sin(angles.ring1) * r1,
  };
  const satBekasiPos = {
    x: Math.cos(angles.ring1 + Math.PI) * r1,
    y: Math.sin(angles.ring1 + Math.PI) * r1,
  };
  const satSandiktaPos = {
    x: Math.cos(angles.ring2) * r2,
    y: Math.sin(angles.ring2) * r2,
  };
  const satVibePos = {
    x: Math.cos(angles.ring2 + Math.PI) * r2,
    y: Math.sin(angles.ring2 + Math.PI) * r2,
  };

  // Photon Sparkle Particles
  const sparkle1 = {
    x: Math.cos(angles.ring3) * 110,
    y: Math.sin(angles.ring3) * 110,
  };
  const sparkle2 = {
    x: Math.cos(angles.ring3 + Math.PI) * 110,
    y: Math.sin(angles.ring3 + Math.PI) * 110,
  };

  return (
    <section
      id="beranda"
      aria-label="Hero Section Azazothx - Azazothx"
      className="relative min-h-[92vh] md:min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Sisi Kiri: Teks & Identitas Azazothx */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill with Pulsing Live Status & Identity Subtag */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/50 text-xs sm:text-sm font-medium text-purple-200 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.35)] animate-float-medium"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] -ml-4" />
              <span className="tracking-wide">Azazothx • SMP</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            </div>

            {/* Sapaan & Nama */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-purple-300/90 tracking-wider flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-purple-400">&lt;welcome-to-my-portfolio&gt;</span>
                <span className="h-[1px] w-8 bg-purple-500/40 inline-block" />
              </p>
              <h1
                id="hero-main-title"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
              >
                Hallo, saya{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">
                  Azazothx
                  <span className="absolute -inset-1 bg-purple-500/25 blur-xl -z-10 rounded-lg animate-pulse" />
                </span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-slate-300">
                (Nama asli: <strong className="text-purple-300">Azazothx</strong> • Asal Bekasi)
              </p>
            </div>

            {/* Dynamic Animated Roles Tagline */}
            <div
              id="hero-tagline"
              className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 tracking-wide min-h-[40px] flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-purple-300">&gt;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-fuchsia-300 font-bold">
                {displayText}
              </span>
              <span className="w-2.5 h-6 bg-purple-400 inline-block animate-pulse -ml-1 rounded-sm" />
            </div>

            {/* Deskripsi */}
            <p
              id="hero-description"
              className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
            >
              {personalInfo.heroDesc}
            </p>

            {/* Tombol Interaksi */}
            <div
              id="hero-cta-buttons"
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2"
            >
              <button
                id="hero-btn-projects"
                onClick={() => handleScroll('#proyek')}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right rounded-2xl shadow-[0_0_25px_rgba(147,51,234,0.45)] hover:shadow-[0_0_40px_rgba(168,85,247,0.75)] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 touch-btn cursor-pointer"
              >
                <span>Lihat Portofolio &amp; Proyek</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                id="hero-btn-about"
                onClick={() => handleScroll('#tentang')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/40 hover:border-purple-400/80 rounded-2xl backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 touch-btn cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <Compass className="w-4 h-4 text-purple-300" />
                <span>Profil & Rakitan Rig</span>
              </button>
            </div>

            {/* Quick Metrics / Focus Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-purple-500/30 text-purple-200 flex items-center gap-1.5 shadow-[0_0_12px_rgba(168,85,247,0.15)] animate-float-slow hover:border-purple-400 transition-colors">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" /> SMP SMP
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-200 flex items-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.15)] animate-float-medium hover:border-cyan-400 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Indonesia
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-indigo-500/30 text-indigo-200 flex items-center gap-1.5 shadow-[0_0_12px_rgba(99,102,241,0.15)] animate-float-reverse hover:border-indigo-400 transition-colors">
                <Bot className="w-3.5 h-3.5 text-indigo-400" /> AI Vibe Coder
              </span>
            </div>

          </div>

          {/* Sisi Kanan: Visual Planet Kosmik & Auto-Orbit Satelit Bergerak Penuh */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Visual Container */}
            <div
              id="hero-cosmic-visual"
              className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] flex items-center justify-center"
            >
              {/* Glowing Nebula Backdrop */}
              <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-purple-700/60 via-indigo-600/50 to-fuchsia-600/40 blur-3xl animate-pulse-glow pointer-events-none" />

              {/* Orbit Track Lines */}
              {/* Outer Orbit Track */}
              <div 
                className="absolute rounded-full border border-purple-500/35 border-dashed pointer-events-none"
                style={{ width: `${r2 * 2}px`, height: `${r2 * 2}px` }}
              />
              
              {/* Inner Orbit Track */}
              <div 
                className="absolute rounded-full border border-cyan-500/30 pointer-events-none"
                style={{ width: `${r1 * 2}px`, height: `${r1 * 2}px` }}
              />

              {/* Central Energy Ring Track */}
              <div 
                className="absolute rounded-full border border-fuchsia-500/20 border-dotted pointer-events-none"
                style={{ width: '220px', height: '220px' }}
              />

              {/* Orbit Sparkle Particles */}
              <div 
                className="absolute w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#06b6d4] pointer-events-none transition-transform"
                style={{
                  transform: `translate(${sparkle1.x}px, ${sparkle1.y}px)`,
                }}
              />
              <div 
                className="absolute w-2 h-2 rounded-full bg-fuchsia-300 shadow-[0_0_10px_#d946ef] pointer-events-none transition-transform"
                style={{
                  transform: `translate(${sparkle2.x}px, ${sparkle2.y}px)`,
                }}
              />

              {/* ========================================================
                  DYNAMIC MATH AUTO-ORBIT SATELLITES (Continuous Revolution)
                  ======================================================== */}

              {/* Satellite 1: React.js */}
              <div 
                className="absolute pointer-events-auto z-20 cursor-pointer"
                style={{
                  transform: `translate(${satReactPos.x}px, ${satReactPos.y}px)`,
                  willChange: 'transform',
                }}
                onClick={() => { playCyberClick(); setActiveSatellite('react'); }}
              >
                <div className="group px-3.5 py-2 rounded-2xl bg-[#0b0824]/95 border border-cyan-400/80 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:shadow-[0_0_35px_rgba(6,182,212,0.95)] hover:scale-110 transition-transform duration-200 flex items-center gap-2 text-xs text-cyan-200">
                  <div className="w-5 h-5 rounded-lg bg-cyan-950/80 flex items-center justify-center border border-cyan-500/40">
                    <Atom className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: '4s' }} />
                  </div>
                  <span className="font-mono font-bold tracking-wide">React.js</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                </div>
              </div>

              {/* Satellite 2: Bekasi Node */}
              <div 
                className="absolute pointer-events-auto z-20 cursor-pointer"
                style={{
                  transform: `translate(${satBekasiPos.x}px, ${satBekasiPos.y}px)`,
                  willChange: 'transform',
                }}
                onClick={() => { playCyberClick(); setActiveSatellite('bekasi'); }}
              >
                <div className="group px-3.5 py-2 rounded-2xl bg-[#0b0824]/95 border border-amber-400/80 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.6)] hover:shadow-[0_0_35px_rgba(245,158,11,0.95)] hover:scale-110 transition-transform duration-200 flex items-center gap-2 text-xs text-amber-200">
                  <div className="w-5 h-5 rounded-lg bg-amber-950/80 flex items-center justify-center border border-amber-500/40">
                    <Zap className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  </div>
                  <span className="font-mono font-bold tracking-wide">Bekasi Node</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                </div>
              </div>

              {/* Satellite 3: SMP */}
              <div 
                className="absolute pointer-events-auto z-20 cursor-pointer"
                style={{
                  transform: `translate(${satSandiktaPos.x}px, ${satSandiktaPos.y}px)`,
                  willChange: 'transform',
                }}
                onClick={() => { playCyberClick(); setActiveSatellite('sandikta'); }}
              >
                <div className="group px-3.5 py-2 rounded-2xl bg-[#0b0824]/95 border border-fuchsia-400/80 backdrop-blur-md shadow-[0_0_20px_rgba(217,70,239,0.6)] hover:shadow-[0_0_35px_rgba(217,70,239,0.95)] hover:scale-110 transition-transform duration-200 flex items-center gap-2 text-xs text-fuchsia-200">
                  <div className="w-5 h-5 rounded-lg bg-fuchsia-950/80 flex items-center justify-center border border-fuchsia-500/40">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="font-mono font-bold tracking-wide">SMP</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-ping" />
                </div>
              </div>

              {/* Satellite 4: Vibe Coder */}
              <div 
                className="absolute pointer-events-auto z-20 cursor-pointer"
                style={{
                  transform: `translate(${satVibePos.x}px, ${satVibePos.y}px)`,
                  willChange: 'transform',
                }}
                onClick={() => { playCyberClick(); setActiveSatellite('vibecoder'); }}
              >
                <div className="group px-3.5 py-2 rounded-2xl bg-[#0b0824]/95 border border-purple-400/80 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:shadow-[0_0_35px_rgba(168,85,247,0.95)] hover:scale-110 transition-transform duration-200 flex items-center gap-2 text-xs text-purple-200">
                  <div className="w-5 h-5 rounded-lg bg-purple-950/80 flex items-center justify-center border border-purple-500/40">
                    <Bot className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
                  </div>
                  <span className="font-mono font-bold tracking-wide">Vibe Coder</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                </div>
              </div>

              {/* Central Glowing Orb / Core Planet */}
              <div className="relative z-10 w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-purple-500 via-indigo-800 to-[#0d0722] p-[2px] shadow-[0_0_60px_rgba(168,85,247,0.7),inset_0_0_35px_rgba(192,132,252,0.45)] flex items-center justify-center animate-float-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1b103e] via-[#0f0927] to-[#060412] flex flex-col items-center justify-center relative overflow-hidden group">
                  
                  {/* Planet Atmosphere Shine */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-400/30 rounded-full blur-xl pointer-events-none" />
                  
                  {/* Core Symbol */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-purple-950/90 border border-purple-500/60 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.8)] mb-2 group-hover:scale-110 transition-transform">
                      <Atom className="w-8 h-8 text-cyan-300 animate-spin" style={{ animationDuration: '8s' }} />
                    </div>
                    <span className="font-display font-black text-xs uppercase tracking-widest text-purple-200 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                      AZAZOTHX
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300/90 mt-0.5">
                      AZAZOTHX
                    </span>
                  </div>

                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/20 to-transparent w-full h-10 animate-scanline pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Active Satellite Feedback Toast (if clicked) */}
            {activeSatellite && (
              <div className="mt-4 px-3.5 py-2 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-xs font-mono text-purple-200 flex items-center gap-2 animate-float-slow shadow-lg">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>
                  {activeSatellite === 'react' && 'Node React.js: Framework antarmuka interaktif utama Azazothx'}
                  {activeSatellite === 'sandikta' && 'Node SMP: Siswa aktif SMP, domisili Bekasi'}
                  {activeSatellite === 'vibecoder' && 'Node Vibe Coder: Memadukan ide, logika, dan prompt AI'}
                  {activeSatellite === 'bekasi' && 'Node Bekasi: Pusat komputasi dan workstation Bagas'}
                </span>
              </div>
            )}

            {/* Hint message */}
            <p className="text-[11px] font-mono text-cyan-300/80 mt-2 text-center flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              Satelit otomatis berevolusi 360° mengitari orb Azazothx secara realtime
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
