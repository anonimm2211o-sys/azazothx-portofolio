import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Zap, 
  Power, 
  Activity, 
  Sliders, 
  ShieldAlert, 
  Fan, 
  HardDrive, 
  Sparkles, 
  Terminal,
  Layers,
  Thermometer
} from 'lucide-react';
import { rigSpecs, personalInfo } from '../data/projects.js';
import { playCyberClick, playRigPowerUp, playOverclockSound } from '../utils/sound.js';

export default function ComputerRig() {
  const [isPowered, setIsPowered] = useState(true);
  const [isOverclocked, setIsOverclocked] = useState(false);
  const [rgbTheme, setRgbTheme] = useState('violet'); // 'violet' | 'cyan' | 'matrix' | 'crimson'
  const [cpuTemp, setCpuTemp] = useState(42);
  const [gpuUsage, setGpuUsage] = useState(38);
  const [clockSpeed, setClockSpeed] = useState(4.8);
  const [activeTab, setActiveTab] = useState('hardware'); // 'hardware' | 'specs'

  // Dynamic telemetry oscillation
  useEffect(() => {
    if (!isPowered) return;
    const interval = setInterval(() => {
      const baseTemp = isOverclocked ? 58 : 42;
      const baseGpu = isOverclocked ? 78 : 38;
      const baseClock = isOverclocked ? 5.6 : 4.8;

      setCpuTemp(Math.round(baseTemp + (Math.random() * 4 - 2)));
      setGpuUsage(Math.round(baseGpu + (Math.random() * 8 - 4)));
      setClockSpeed(Number((baseClock + (Math.random() * 0.2 - 0.1)).toFixed(2)));
    }, 1800);

    return () => clearInterval(interval);
  }, [isPowered, isOverclocked]);

  const togglePower = () => {
    playRigPowerUp();
    setIsPowered(!isPowered);
  };

  const toggleOverclock = () => {
    playOverclockSound();
    setIsOverclocked(!isOverclocked);
  };

  const handleRgbChange = (theme) => {
    playCyberClick();
    setRgbTheme(theme);
  };

  // Color theme mapping
  const getThemeColors = () => {
    switch (rgbTheme) {
      case 'cyan':
        return {
          glow: 'rgba(6, 182, 212, 0.7)',
          border: 'border-cyan-500/60',
          text: 'text-cyan-400',
          bgGlow: 'from-cyan-500/20 to-blue-600/10',
          fanColor: '#06b6d4',
          ramGradient: 'from-cyan-400 via-blue-500 to-indigo-400'
        };
      case 'matrix':
        return {
          glow: 'rgba(34, 197, 94, 0.7)',
          border: 'border-emerald-500/60',
          text: 'text-emerald-400',
          bgGlow: 'from-emerald-500/20 to-teal-600/10',
          fanColor: '#22c55e',
          ramGradient: 'from-emerald-400 via-green-500 to-teal-400'
        };
      case 'crimson':
        return {
          glow: 'rgba(244, 63, 94, 0.7)',
          border: 'border-rose-500/60',
          text: 'text-rose-400',
          bgGlow: 'from-rose-500/20 to-orange-600/10',
          fanColor: '#f43f5e',
          ramGradient: 'from-rose-500 via-amber-500 to-red-500'
        };
      default: // 'violet'
        return {
          glow: 'rgba(168, 85, 247, 0.7)',
          border: 'border-purple-500/60',
          text: 'text-purple-400',
          bgGlow: 'from-purple-500/20 to-indigo-600/10',
          fanColor: '#a855f7',
          ramGradient: 'from-purple-400 via-fuchsia-500 to-indigo-400'
        };
    }
  };

  const theme = getThemeColors();

  return (
    <div className="w-full rounded-3xl bg-[#09071b]/95 border border-purple-500/40 p-5 sm:p-6 shadow-[0_0_35px_rgba(168,85,247,0.2)] backdrop-blur-xl relative overflow-hidden transition-all duration-300">
      
      {/* Top Header Bar: Rig Name & Status */}
      <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-950/80 border border-purple-500/40">
            <Cpu className={`w-4 h-4 ${theme.text} ${isPowered ? 'animate-pulse' : 'text-slate-600'}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-white text-sm sm:text-base tracking-wide">
                RAKITAN KOMPUTER BISUAK
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                CYBER RIG
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              Builder: <strong className="text-purple-300">{personalInfo.realName}</strong> ({personalInfo.school}, {personalInfo.grade})
            </p>
          </div>
        </div>

        {/* Rig Power Toggle */}
        <button
          onClick={togglePower}
          title={isPowered ? "Matikan Rig" : "Nyalakan Rig"}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
            isPowered 
              ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
              : 'bg-rose-950/40 border border-rose-500/40 text-rose-400'
          }`}
        >
          <Power className={`w-3.5 h-3.5 ${isPowered ? 'text-emerald-400' : 'text-rose-500'}`} />
          <span>{isPowered ? 'ONLINE' : 'OFFLINE'}</span>
        </button>
      </div>

      {/* Interactive Tabs */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => { playCyberClick(); setActiveTab('hardware'); }}
          className={`flex-1 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
            activeTab === 'hardware'
              ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
              : 'bg-purple-950/30 text-slate-400 hover:text-white border border-purple-500/20'
          }`}
        >
          Visual Chassis & Fans
        </button>
        <button
          onClick={() => { playCyberClick(); setActiveTab('specs'); }}
          className={`flex-1 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
            activeTab === 'specs'
              ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
              : 'bg-purple-950/30 text-slate-400 hover:text-white border border-purple-500/20'
          }`}
        >
          Spesifikasi & Hardware
        </button>
      </div>

      {activeTab === 'hardware' ? (
        /* VISUAL HARDWARE CHASSIS */
        <div className={`relative rounded-2xl border ${theme.border} bg-[#060414] p-4 sm:p-5 overflow-hidden transition-all duration-500 min-h-[300px] flex flex-col justify-between`}>
          
          {/* Ambient Lighting Reflection */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              background: isPowered ? `radial-gradient(circle at 50% 40%, ${theme.glow} 0%, transparent 70%)` : 'none',
              opacity: isPowered ? 0.35 : 0
            }}
          />

          {/* Motherboard Grid Lines */}
          <div className="absolute inset-0 cosmic-grid-bg opacity-30 pointer-events-none" />

          {/* Sisi Atas: Liquid CPU Cooler AIO & RAM Modules */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            {/* CPU Liquid Pump Block with Dynamic LCD Screen */}
            <div className="sm:col-span-6 flex items-center gap-3 p-3 rounded-2xl bg-[#0e0a24]/90 border border-purple-500/40 shadow-inner">
              <div 
                className={`w-14 h-14 rounded-2xl border-2 flex flex-col items-center justify-center relative overflow-hidden transition-all ${
                  isPowered ? 'animate-aio-cooler' : 'opacity-40'
                }`}
                style={{ borderColor: theme.fanColor }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 to-black" />
                <span className="relative z-10 text-[9px] font-mono font-bold text-slate-300">AIO LCD</span>
                <span className={`relative z-10 font-mono text-xs font-extrabold ${theme.text}`}>
                  {isPowered ? `${cpuTemp}°C` : '--'}
                </span>
                <span className="relative z-10 text-[8px] font-mono text-slate-400">
                  {isPowered ? `${clockSpeed} GHz` : '0 GHz'}
                </span>
              </div>

              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-mono text-purple-300 uppercase tracking-wider block">
                  Liquid AIO Block
                </span>
                <p className="text-xs font-mono font-bold text-white">
                  BAGAS CYBER CORE
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <Thermometer className="w-3 h-3 text-amber-400" />
                  <span>Pump: {isPowered ? (isOverclocked ? '2800 RPM' : '1950 RPM') : '0 RPM'}</span>
                </div>
              </div>
            </div>

            {/* DDR5 Dual RAM Sticks with RGB Flow */}
            <div className="sm:col-span-6 flex items-center justify-center sm:justify-end gap-2.5 p-3 rounded-2xl bg-[#0e0a24]/90 border border-purple-500/30">
              <div className="text-right mr-1">
                <span className="text-[10px] font-mono text-purple-300 uppercase block">RAM DUAL-CH</span>
                <span className="text-xs font-mono font-bold text-slate-200">32GB DDR5</span>
              </div>
              
              {/* RAM 1 */}
              <div className="w-4 h-14 rounded-md bg-[#0a0718] border border-slate-700 flex flex-col justify-between p-0.5 relative overflow-hidden">
                <div 
                  className={`w-full h-full rounded-sm bg-gradient-to-b ${theme.ramGradient} transition-opacity duration-300 ${
                    isPowered ? 'animate-ram-rgb opacity-90' : 'opacity-10'
                  }`}
                />
              </div>

              {/* RAM 2 */}
              <div className="w-4 h-14 rounded-md bg-[#0a0718] border border-slate-700 flex flex-col justify-between p-0.5 relative overflow-hidden">
                <div 
                  className={`w-full h-full rounded-sm bg-gradient-to-b ${theme.ramGradient} transition-opacity duration-300 ${
                    isPowered ? 'animate-ram-rgb opacity-90' : 'opacity-10'
                  }`}
                  style={{ animationDelay: '0.5s' }}
                />
              </div>
            </div>

          </div>

          {/* Sisi Tengah: Dual Fan GPU Unit */}
          <div className="relative z-10 my-4 p-3.5 rounded-2xl bg-[#0a071b]/95 border border-purple-500/40 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Fan className={`w-3.5 h-3.5 ${theme.text}`} />
                <span className="text-xs font-mono font-bold text-white">
                  RTX Cosmic Holo GPU • Dual Fan
                </span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                isOverclocked ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400'
              }`}>
                {isPowered ? (isOverclocked ? 'OVERCLOCKED ⚡' : 'STD BOOST') : 'INACTIVE'}
              </span>
            </div>

            {/* Fans Visual */}
            <div className="flex items-center justify-around py-2">
              
              {/* Fan 1 */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed flex items-center justify-center relative p-1 transition-all"
                  style={{ borderColor: theme.fanColor }}
                >
                  <Fan 
                    className={`w-10 h-10 sm:w-12 sm:h-12 transition-all ${
                      isPowered 
                        ? (isOverclocked ? 'animate-fan-spin-turbo' : 'animate-fan-spin') 
                        : 'opacity-30'
                    }`} 
                    style={{ color: theme.fanColor }}
                  />
                  <div className="absolute w-4 h-4 rounded-full bg-black border border-slate-700" />
                </div>
                <span className="text-[9px] font-mono text-slate-400 mt-1">FAN 01</span>
              </div>

              {/* Center GPU Core Telemetry */}
              <div className="flex flex-col items-center justify-center text-center px-2">
                <span className="text-[10px] font-mono text-purple-300">GPU LOAD</span>
                <span className={`text-base sm:text-lg font-mono font-black ${theme.text}`}>
                  {isPowered ? `${gpuUsage}%` : '0%'}
                </span>
                <span className="text-[9px] font-mono text-slate-500">Vibe VRAM: 16GB</span>
              </div>

              {/* Fan 2 */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed flex items-center justify-center relative p-1 transition-all"
                  style={{ borderColor: theme.fanColor }}
                >
                  <Fan 
                    className={`w-10 h-10 sm:w-12 sm:h-12 transition-all ${
                      isPowered 
                        ? (isOverclocked ? 'animate-fan-spin-turbo' : 'animate-fan-spin') 
                        : 'opacity-30'
                    }`} 
                    style={{ color: theme.fanColor, animationDirection: 'reverse' }}
                  />
                  <div className="absolute w-4 h-4 rounded-full bg-black border border-slate-700" />
                </div>
                <span className="text-[9px] font-mono text-slate-400 mt-1">FAN 02</span>
              </div>

            </div>
          </div>

          {/* Sisi Bawah: SSD Activity & Status Strip */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-purple-500/20 text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isPowered ? 'bg-cyan-400 animate-ping' : 'bg-slate-700'}`} />
              <span>NVMe Gen4 IOPS Active</span>
            </div>
            <span className="text-purple-300">Bekasi Cyber Node #09</span>
          </div>

        </div>
      ) : (
        /* SPECS & DETAILS PANEL */
        <div className="rounded-2xl border border-purple-500/30 bg-[#060414] p-4 sm:p-5 space-y-3 min-h-[300px]">
          <div className="flex items-center justify-between pb-2 border-b border-purple-500/20">
            <span className="font-mono text-xs text-purple-300">SYSTEM ARCHITECTURE</span>
            <span className="text-[10px] font-mono text-emerald-400">PASS TEST: OK</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {rigSpecs.specs.map((item, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20">
                <span className="text-[10px] font-mono text-slate-400 block">{item.label}</span>
                <span className="text-xs font-mono font-bold text-white block truncate">{item.val}</span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/30 mt-3 text-xs text-slate-300 leading-relaxed font-sans">
            <p>
              💡 <strong>Catatan Builder:</strong> Rig ini adalah representasi ruang kerja komputasi dan eksplorasi teknologi oleh <strong>Bagas Satrio Putra</strong> (Azazothx) untuk coding, belajar fundamental AI, serta mendeploy aplikasi web.
            </p>
          </div>
        </div>
      )}

      {/* Control Deck: RGB Themes & Overclock */}
      <div className="mt-4 pt-4 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-3">
        
        {/* RGB Palette Switcher */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono text-slate-400 mr-1">ARGB:</span>
          {[
            { id: 'violet', bg: 'bg-purple-500', name: 'Violet' },
            { id: 'cyan', bg: 'bg-cyan-400', name: 'Cyan' },
            { id: 'matrix', bg: 'bg-emerald-400', name: 'Matrix' },
            { id: 'crimson', bg: 'bg-rose-500', name: 'Crimson' },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => handleRgbChange(c.id)}
              title={`Mode RGB ${c.name}`}
              className={`w-5 h-5 rounded-full ${c.bg} transition-all cursor-pointer ${
                rgbTheme === c.id ? 'ring-2 ring-white scale-110 shadow-lg' : 'opacity-60 hover:opacity-100'
              }`}
            />
          ))}
        </div>

        {/* Turbo Boost / Overclock Button */}
        <button
          onClick={toggleOverclock}
          disabled={!isPowered}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
            !isPowered
              ? 'opacity-40 cursor-not-allowed bg-slate-800 text-slate-500'
              : isOverclocked
                ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-[0_0_18px_rgba(245,158,11,0.6)]'
                : 'bg-purple-950/60 border border-purple-500/40 text-purple-200 hover:bg-purple-900/60'
          }`}
        >
          <Zap className={`w-3.5 h-3.5 ${isOverclocked ? 'text-amber-300 animate-bounce' : 'text-purple-400'}`} />
          <span>{isOverclocked ? 'OVERCLOCK ACTIVE ⚡' : 'TURBO BOOST'}</span>
        </button>

      </div>

    </div>
  );
}
