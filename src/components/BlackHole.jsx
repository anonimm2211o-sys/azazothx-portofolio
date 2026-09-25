import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Radio, Zap, Compass, RotateCw, Eye } from 'lucide-react';
import { playBlackHolePulse, playCyberClick } from '../utils/sound.js';

export default function BlackHole() {
  const [pulseCount, setPulseCount] = useState(0);
  const [isWarping, setIsWarping] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
    setMousePos({ x, y });
  };

  const handleTriggerPulse = () => {
    playBlackHolePulse();
    setIsWarping(true);
    setPulseCount((prev) => prev + 1);
    setTimeout(() => setIsWarping(false), 900);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-2xl mx-auto my-8 p-6 sm:p-8 rounded-3xl bg-[#070514]/90 border border-purple-500/40 shadow-[0_0_50px_rgba(147,51,234,0.3)] backdrop-blur-xl overflow-hidden text-center"
    >
      {/* Background Star Warp Distortion */}
      <div 
        className="absolute inset-0 cosmic-grid-bg opacity-20 pointer-events-none transition-transform duration-300"
        style={{
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`
        }}
      />

      {/* Header Info */}
      <div className="flex items-center justify-between pb-3 border-b border-purple-500/20 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 animate-ping" />
          <span className="font-mono text-xs text-purple-300 uppercase tracking-wider">
            Cosmic Singularity & Gravitational Lensing
          </span>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-200">
          GARGANTUA VORTEX
        </span>
      </div>

      {/* Interactive Black Hole Core Arena */}
      <div 
        onClick={handleTriggerPulse}
        title="Klik untuk memicu Gelombang Gravitasi (Hawking Pulse)"
        className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto my-6 flex items-center justify-center cursor-pointer group"
      >
        {/* Outer Plasma Accretion Disk (Swirling Glow) */}
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-cyan-400 opacity-70 blur-2xl animate-black-hole group-hover:scale-110 transition-transform duration-700 pointer-events-none"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
          }}
        />

        {/* Counter-rotating Outer Dust Disc */}
        <div 
          className="absolute inset-4 rounded-full border-2 border-dashed border-purple-400/40 animate-accretion-reverse pointer-events-none" 
        />

        {/* Relativistic Accretion Ring 1 */}
        <div 
          className="absolute w-56 h-56 sm:w-68 sm:h-68 rounded-full border-[3px] border-transparent bg-gradient-to-r from-purple-500 via-fuchsia-400 to-amber-300 rounded-full animate-black-hole opacity-90 pointer-events-none"
          style={{ 
            boxShadow: '0 0 45px rgba(217, 70, 239, 0.75), inset 0 0 25px rgba(6, 182, 212, 0.6)',
            filter: isWarping ? 'brightness(2) contrast(1.5)' : 'none'
          }}
        />

        {/* Relativistic Beaming & Doppler Asymmetry Halo */}
        <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-b from-fuchsia-500/50 via-transparent to-purple-800/40 blur-lg animate-pulse pointer-events-none" />

        {/* Photon Sphere / Ring */}
        <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-cyan-300/80 animate-photon-ring pointer-events-none" />

        {/* Pure Event Horizon (The Deep Black Void Center) */}
        <div 
          className={`relative z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#020108] border border-purple-900 shadow-[0_0_35px_rgba(0,0,0,1),inset_0_0_20px_rgba(0,0,0,1)] flex flex-col items-center justify-center transition-all duration-300 ${
            isWarping ? 'scale-90 shadow-[0_0_60px_rgba(217,70,239,0.9)]' : 'group-hover:scale-95'
          }`}
        >
          {/* Singularity Core Logo / Pulse */}
          <div className="relative z-10 flex flex-col items-center">
            <Sparkles className={`w-5 h-5 text-fuchsia-300 ${isWarping ? 'animate-spin' : 'animate-pulse'}`} />
            <span className="font-display font-black text-[10px] sm:text-xs text-purple-200 tracking-widest mt-1">
              SINGULARITY
            </span>
            <span className="text-[8px] font-mono text-cyan-300">
              {isWarping ? 'WARPING...' : 'EVENT HORIZON'}
            </span>
          </div>

          {/* Shockwave Energy Ripple on Click */}
          {isWarping && (
            <div className="absolute -inset-10 rounded-full border-2 border-fuchsia-400 animate-energy-wave pointer-events-none" />
          )}
        </div>

        {/* Inflowing Spiral Dust Nodes (8 points) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 pointer-events-none"
            style={{
              '--rot': `${angle}deg`,
              animation: `particleSuck ${3 + (i % 3)}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}

      </div>

      {/* Telemetry Stats & Action Info */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono">
        <div className="p-2 rounded-xl bg-purple-950/40 border border-purple-500/20">
          <span className="text-[10px] text-slate-400 block">Radius Schwarzschild</span>
          <span className="text-xs font-bold text-cyan-300">2.95 × 10³ m</span>
        </div>
        <div className="p-2 rounded-xl bg-purple-950/40 border border-purple-500/20">
          <span className="text-[10px] text-slate-400 block">Warp Gravitasi</span>
          <span className="text-xs font-bold text-fuchsia-300">{isWarping ? 'PULSING ⚡' : 'STABLE'}</span>
        </div>
        <div className="p-2 rounded-xl bg-purple-950/40 border border-purple-500/20">
          <span className="text-[10px] text-slate-400 block">Hawking Pulses</span>
          <span className="text-xs font-bold text-purple-300">{pulseCount} Dispatched</span>
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-400 font-sans">
        ✨ <em>Klik pada lingkaran lubang hitam untuk memicu getaran gelombang gravitasi dan radiasi foton kosmik!</em>
      </p>
    </div>
  );
}
