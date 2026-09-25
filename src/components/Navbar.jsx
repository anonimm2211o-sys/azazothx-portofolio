import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code2, Orbit, Send, Layers, Atom, Volume2, VolumeX } from 'lucide-react';
import { toggleSound, isSoundEnabled, playCyberClick } from '../utils/sound.js';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll Progress Calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Scroll Spy
      const sections = ['beranda', 'tentang', 'skill', 'vibe-coding', 'tech-orbit-section', 'proyek', 'kontak'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) {
      playCyberClick();
    }
  };

  const navItems = [
    { name: 'Beranda', href: '#beranda', id: 'beranda' },
    { name: 'Tentang', href: '#tentang', id: 'tentang' },
    { name: 'Skill', href: '#skill', id: 'skill' },
    { name: 'Vibe Coding', href: '#vibe-coding', id: 'vibe-coding' },
    { name: 'Orbit & Singularity', href: '#tech-orbit-section', id: 'tech-orbit-section' },
    { name: 'Proyek', href: '#proyek', id: 'proyek' },
    { name: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    playCyberClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-purple-950/40">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_15px_rgba(217,70,239,0.9)] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
        <nav
          id="main-navbar"
          aria-label="Navigasi Utama"
          className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-[#09081a]/90 backdrop-blur-xl border border-purple-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_25px_rgba(168,85,247,0.2)] py-3 px-5 sm:px-6'
              : 'bg-[#0b091f]/60 backdrop-blur-md border border-purple-500/15 py-4 px-5 sm:px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              id="nav-logo"
              href="#beranda"
              onClick={(e) => handleNavClick(e, '#beranda')}
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-xl p-1"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-fuchsia-600 p-[1px] shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_25px_rgba(192,132,252,0.8)] transition-all duration-300">
                <div className="w-full h-full bg-[#070514] rounded-[11px] flex items-center justify-center">
                  <Atom className="w-5 h-5 text-cyan-300 group-hover:rotate-180 transition-transform duration-700" />
                </div>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-400 rounded-full animate-ping opacity-75" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-400 rounded-full" />
              </div>
              
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-wide group-hover:text-purple-300 transition-colors">
                  Azazothx
                </span>
                <span className="text-[10px] font-mono text-purple-300 -mt-1 hidden sm:block">
                  Bagas Satrio Putra
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    id={`nav-link-${item.id}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3 py-1.5 text-xs font-medium rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-purple-600/30 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 rounded-full shadow-[0_0_8px_#c084fc]" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action Controls: Sound FX Toggle & CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleAudioToggle}
                title={soundOn ? "Matikan Efek Suara Kosmik" : "Aktifkan Efek Suara Kosmik"}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  soundOn
                    ? 'bg-purple-950/60 border-purple-500/40 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                    : 'bg-slate-900 border-slate-700 text-slate-500'
                }`}
              >
                {soundOn ? <Volume2 className="w-4 h-4 text-cyan-300" /> : <VolumeX className="w-4 h-4" />}
              </button>

              <a
                id="nav-cta-contact"
                href="#kontak"
                onClick={(e) => handleNavClick(e, '#kontak')}
                className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-fuchsia-600 rounded-xl hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_28px_rgba(168,85,247,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kontak</span>
              </a>
            </div>

            {/* Mobile Actions: Sound + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={handleAudioToggle}
                className="p-2 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300"
              >
                {soundOn ? <Volume2 className="w-4 h-4 text-cyan-300" /> : <VolumeX className="w-4 h-4" />}
              </button>

              <button
                id="mobile-menu-toggle"
                type="button"
                aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="touch-btn p-2 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 hover:text-white hover:bg-purple-900/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div
              id="mobile-nav-menu"
              className="lg:hidden mt-3 pt-3 pb-2 border-t border-purple-500/20 flex flex-col gap-1.5 animate-fadeIn"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    id={`mobile-nav-link-${item.id}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-white bg-purple-600/30 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />}
                  </a>
                );
              })}
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
