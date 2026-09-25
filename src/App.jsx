import React, { useState } from 'react';
import StarBackground from './components/StarBackground.jsx';
import Navbar from './components/Navbar.jsx';
import DesktopSidebar from './components/DesktopSidebar.jsx';
import LandingOverlay from './components/LandingOverlay.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import VibeCoding from './components/VibeCoding.jsx';
import AILab from './components/AILab.jsx';
import TechOrbit from './components/TechOrbit.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#05050f] text-slate-100 font-body selection:bg-purple-600/30 selection:text-purple-200">
      
      {/* Landing Overlay ("Welcome to my Portfolio" + "Lihat Portfolio" CTA with Fade-Out) */}
      <LandingOverlay onEnter={() => setHasEntered(true)} />

      {/* Background Starfield & Deep Space Nebulas */}
      <StarBackground />

      {/* Floating Glass Navbar with Audio Controller */}
      <Navbar />

      {/* Desktop Cyber HUD Sidebar (Visible on Desktop) */}
      <DesktopSidebar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section (Azazothx & Bagas Satrio Putra with 60fps Auto-Orbit Satellites) */}
        <Hero />

        {/* 2. Tentang Saya (Bagas Satrio Putra + Rakitan Komputer Bisuak Cyber Rig) */}
        <About />

        {/* 3. Skill & Teknologi */}
        <Skills />

        {/* 4. Vibe Coding Lab */}
        <VibeCoding />

        {/* 5. AI & Prompt Engineering */}
        <AILab />

        {/* 6. Technology Orbit & Lubang Hitam Singularity */}
        <TechOrbit />

        {/* 7. Proyek Saya */}
        <Projects />

        {/* 8. Kontak & Hubungi */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
