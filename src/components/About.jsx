import React from 'react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  Lightbulb, 
  Rocket, 
  ShieldCheck,
  Code2,
  Terminal,
  Cpu,
  Bot,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/projects.js';
import ComputerRig from './ComputerRig.jsx';

export default function About() {
  const pillars = [
    {
      title: "Programmer Pemula & Fundamental",
      desc: "Sedang dalam tahap memahami konsep dasar pemrograman web, struktur logika JavaScript, dan arsitektur komponen modern secara bertahap dan konsisten.",
      icon: Rocket,
      color: "from-purple-500/20 to-indigo-500/10",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-300"
    },
    {
      title: "Vibe Coder & Kolaborasi AI",
      desc: "Memanfaatkan kekuatan AI and prompt engineering untuk mempercepat eksperimen, membedah alur kode rumit, dan merealisasikan ide aplikasi kreatif.",
      icon: Bot,
      color: "from-indigo-500/20 to-fuchsia-500/10",
      borderColor: "border-indigo-500/30",
      iconColor: "text-indigo-300"
    },
    {
      title: "Rasa Ingin Tahu & Eksplorasi Rig",
      desc: "Menikmati proses ngoprek hardware komputer (Cyber Rig Bisuak), tweaking sistem, dan mempelajari ekosistem teknologi terbaru dari Bekasi.",
      icon: Cpu,
      color: "from-fuchsia-500/20 to-purple-500/10",
      borderColor: "border-fuchsia-500/30",
      iconColor: "text-fuchsia-300"
    }
  ];

  return (
    <section
      id="tentang"
      aria-label="Tentang Azazothx - Azazothx"
      className="py-20 md:py-28 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <User className="w-3.5 h-3.5 text-purple-400" />
            <span>&lt;identity-profile&gt;</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300">Saya</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl text-center">
            Mengenal lebih dekat identitas, latar belakang, dan perjalanan eksplorasi coding saya.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Top Two-Column Grid: Left (Bio Details) & Right (Rakitan Komputer Bisuak Cyber Rig) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Sisi Kiri: Profil Lengkap Azazothx */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Bio Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.4)] relative overflow-hidden space-y-5">
              
              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-500/20 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                  <span className="font-mono text-xs text-purple-200 uppercase tracking-wider font-semibold">
                    Biodata &amp; Profil Pengembang
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-xs font-mono text-purple-300">
                  SMP
                </span>
              </div>

              {/* Structured Personal Details Grid (Explicitly Highlighted) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Detail 1: Nama */}
                <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-300 uppercase">
                    <User className="w-3.5 h-3.5 text-purple-400" />
                    <span>Nama</span>
                  </div>
                  <p className="text-sm font-display font-bold text-white leading-tight">
                    Azazothx
                  </p>
                  <span className="text-[10px] font-mono text-cyan-300 block">Alias: Azazothx</span>
                </div>

                {/* Detail 2: Asal */}
                <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-300 uppercase">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Asal</span>
                  </div>
                  <p className="text-sm font-display font-bold text-white leading-tight">
                    Bekasi
                  </p>
                  <span className="text-[10px] font-mono text-slate-400 block">Jawa Barat, ID</span>
                </div>

                {/* Detail 3: Sekolah & Kelas */}
                <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-300 uppercase">
                    <GraduationCap className="w-3.5 h-3.5 text-fuchsia-400" />
                    <span>Sekolah</span>
                  </div>
                  <p className="text-sm font-display font-bold text-white leading-tight">
                    SMP
                  </p>
                  <span className="text-[10px] font-mono text-emerald-300 block">SMP</span>
                </div>

              </div>

              {/* Bio Description Narrative framed around beginner developer & vibe coder */}
              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-1">
                <p>
                  Halo! Saya <strong>Azazothx</strong>, seorang <strong>programmer pemula</strong> sekaligus <strong>vibe coder</strong> yang berasal dari <strong>Bekasi</strong> dan saat ini sedang menempuh pendidikan di <strong>SMP, SMP</strong>.
                </p>
                
                <p>
                  Saya memulai langkah di dunia teknologi dengan penuh antusiasme. Melalui pendekatan <em>vibe coding</em>, saya menggabungkan kreativitas, eksperimen langsung dengan kecerdasan buatan (AI), serta pembelajaran bertahap mengenai fundamental pemrograman web (JavaScript, React, CSS, dan HTML).
                </p>

                <p>
                  Bagi saya, AI bukan sekadar alat bantu otomatisasi, melainkan partner kolaborasi untuk memahami konsep-konsep baru, mendebug logika, dan mengubah imajinasi proyek digital menjadi kode nyata yang dapat dijalankan.
                </p>

                <div className="p-3.5 rounded-2xl bg-[#09061b] border border-purple-500/30 text-xs font-mono text-purple-200/90 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Filosofi Vibe Coding:</strong> Mengalir dengan ide, berani mencoba hal baru, dan terus mengasah pemahaman teknologi setiap hari.
                  </span>
                </div>
              </div>

              {/* Core Attributes Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1.5 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-200 text-xs font-medium flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-purple-400" /> Programmer Pemula
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-indigo-500/15 border border-indigo-500/40 text-indigo-200 text-xs font-medium flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-indigo-400" /> Vibe Coder
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-200 text-xs font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> AI Explorer
                </span>
              </div>

            </div>

          </div>

          {/* Sisi Kanan: Rakitan Komputer Bisuak (Interactive Cyber Rig) */}
          <div className="lg:col-span-6">
            <ComputerRig />
          </div>

        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 border ${pillar.borderColor} relative overflow-hidden group`}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-500/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300/90 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
