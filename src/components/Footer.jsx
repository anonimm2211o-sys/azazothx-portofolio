import React from 'react';
import { ArrowUp, Sparkles, Heart, Code2, GraduationCap, MapPin } from 'lucide-react';
import { personalInfo } from '../data/projects.js';
import { playCyberClick } from '../utils/sound.js';

export default function Footer() {
  const scrollToTop = () => {
    playCyberClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Skill', href: '#skill' },
    { name: 'Vibe Coding', href: '#vibe-coding' },
    { name: 'Orbit & Singularity', href: '#tech-orbit-section' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    playCyberClick();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 border-t border-purple-500/20 bg-[#04030c]/95 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/15">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl text-white tracking-wider">
                Azazothx
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-xs font-mono text-purple-300">Azazothx</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              {personalInfo.school} ({personalInfo.grade}) • {personalInfo.origin}
            </p>
          </div>

          {/* Mini Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-purple-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            id="footer-back-to-top"
            type="button"
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="p-3 rounded-xl bg-purple-950/70 hover:bg-purple-900 border border-purple-500/30 text-purple-300 hover:text-white transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer shadow-lg"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Bottom Credits & Quote */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left font-mono">
          <p>
            {personalInfo.copyright} • SMP SMP Bekasi.
          </p>

          <p className="text-purple-300/80">
            {personalInfo.footerQuote}
          </p>
        </div>

      </div>
    </footer>
  );
}
