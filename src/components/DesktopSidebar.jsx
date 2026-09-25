import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Sparkles, 
  Bot, 
  Orbit, 
  FolderGit2, 
  Send, 
  Volume2, 
  VolumeX, 
  ChevronUp, 
  ChevronDown,
  Atom,
  GraduationCap,
  MapPin,
  Cpu
} from 'lucide-react';
import { isSoundEnabled, toggleSound, playCyberClick } from '../utils/sound.js';
import { personalInfo } from '../data/projects.js';

export default function DesktopSidebar() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [soundOn, setSoundOn] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'tentang', label: 'Tentang & Rig', icon: User },
    { id: 'skill', label: 'Keahlian', icon: Sparkles },
    { id: 'vibe-coding', label: 'Vibe Coding', icon: Bot },
    { id: 'tech-orbit-section', label: 'Tech Orbit', icon: Orbit },
    { id: 'proyek', label: 'Proyek', icon: FolderGit2 },
    { id: 'kontak', label: 'Kontak', icon: Send },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    playCyberClick();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAudioToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) {
      playCyberClick();
    }
  };

  const scrollToTop = () => {
    playCyberClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      id="desktop-cyber-sidebar"
      aria-label="Desktop Cyber Navigation Sidebar"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center p-2.5 rounded-3xl bg-[#08061a]/85 border border-purple-500/35 backdrop-blur-2xl shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300 select-none ${
        isExpanded ? 'w-48' : 'w-14'
      }`}
    >
      {/* Top Brand / Avatar Indicator */}
      <div 
        onClick={scrollToTop}
        className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-fuchsia-600 p-[1.5px] shadow-[0_0_15px_rgba(168,85,247,0.5)] cursor-pointer mb-3 hover:scale-105 transition-transform"
        title="Azazothx - Bagas Satrio Putra"
      >
        <div className="w-full h-full bg-[#060414] rounded-[14px] flex items-center justify-center">
          <Atom className="w-5 h-5 text-cyan-300 animate-spin" style={{ animationDuration: '8s' }} />
        </div>
      </div>

      {/* Expanded Builder ID Card */}
      {isExpanded && (
        <div className="w-full px-2 py-1 mb-2 border-b border-purple-500/20 text-center animate-fadeIn">
          <span className="text-[10px] font-mono text-cyan-300 block truncate font-bold">
            BAGAS SATRIO P.
          </span>
          <span className="text-[9px] font-mono text-purple-300/80 block truncate">
            SMP Sandikta (9) • Bekasi
          </span>
        </div>
      )}

      {/* Navigation Links with Active Trackers */}
      <nav className="flex flex-col gap-1.5 w-full">
        {sections.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.id;

          return (
            <button
              key={sec.id}
              onClick={() => handleNavClick(sec.id)}
              title={sec.label}
              className={`group relative flex items-center gap-3 w-full p-2.5 rounded-2xl transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-purple-600/40 text-white border border-purple-400/60 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'text-slate-400 hover:text-purple-200 hover:bg-purple-950/40 border border-transparent'
              }`}
            >
              <div className="shrink-0 flex items-center justify-center w-5 h-5">
                <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-cyan-300' : ''}`} />
              </div>

              {isExpanded && (
                <span className={`text-xs font-mono font-medium truncate ${isActive ? 'text-white font-bold' : ''}`}>
                  {sec.label}
                </span>
              )}

              {/* Active Pip on Collapsed Mode */}
              {isActive && !isExpanded && (
                <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] animate-ping" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Action Deck */}
      <div className="w-full pt-3 mt-2 border-t border-purple-500/20 flex flex-col items-center gap-1.5">
        
        {/* Audio Toggle */}
        <button
          onClick={handleAudioToggle}
          title={soundOn ? "Matikan Efek Suara" : "Aktifkan Efek Suara"}
          className={`p-2 rounded-xl border transition-all cursor-pointer w-full flex items-center justify-center gap-2 ${
            soundOn
              ? 'bg-purple-950/50 border-purple-500/40 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
              : 'bg-slate-900 border-slate-700 text-slate-500'
          }`}
        >
          {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          {isExpanded && <span className="text-[10px] font-mono">{soundOn ? 'SFX ON' : 'SFX OFF'}</span>}
        </button>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          title="Kembali ke atas"
          className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-purple-900/30 transition-colors cursor-pointer w-full flex items-center justify-center"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

      </div>

    </aside>
  );
}
